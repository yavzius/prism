import { existsSync, readFileSync, writeFileSync, mkdirSync, readdirSync } from "fs";
import { homedir } from "os";
import { join, resolve } from "path";
import { randomBytes } from "node:crypto";
import type { Page } from "../types.js";

const envPagesDir = Bun.env.PRISM_PAGES_DIR?.trim();
const PAGES_DIR = envPagesDir
  ? resolve(envPagesDir)
  : join(homedir(), ".cache", "prism", "pages");

// ── ID ───────────────────────────────────────────────────────────────────────

export function generatePageId(): string {
  // 3-char, human-friendly IDs. Use base36 (0-9a-z) to expand the space vs hex.
  // Also avoid collisions by checking for existing files before returning.
  const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";

  const usedIds = new Set<string>();
  if (existsSync(PAGES_DIR)) {
    try {
      for (const file of readdirSync(PAGES_DIR)) {
        const id = file.split(".")[0];
        if (id) usedIds.add(id);
      }
    } catch {
      // Best-effort: if we can't read the dir, we'll fall back to existence checks on save.
    }
  }

  const randomChar = (): string => {
    // Rejection sampling to avoid modulo bias.
    while (true) {
      const b = randomBytes(1)[0]!;
      const max = 36 * 7; // 252
      if (b < max) return alphabet[b % 36]!;
    }
  };

  // If the directory doesn't exist yet, collisions are impossible.
  if (!existsSync(PAGES_DIR)) {
    return `${randomChar()}${randomChar()}${randomChar()}`;
  }

  for (let i = 0; i < 256; i++) {
    const id = `${randomChar()}${randomChar()}${randomChar()}`;
    if (!usedIds.has(id) && !existsSync(pageMetaPath(id))) return id;
  }

  throw new Error("Unable to allocate a unique page ID (ID space may be exhausted).");
}

// ── Paths ────────────────────────────────────────────────────────────────────

export function pagesDir(): string {
  return PAGES_DIR;
}

export function pageMetaPath(id: string): string {
  return join(PAGES_DIR, `${id}.json`);
}

export function imageExtForMimeType(mimeType?: string): string {
  if (!mimeType) return "png";
  const mt = mimeType.toLowerCase();
  if (mt === "image/png") return "png";
  if (mt === "image/jpeg" || mt === "image/jpg") return "jpg";
  if (mt === "image/webp") return "webp";
  if (mt === "image/gif") return "gif";
  const slash = mt.indexOf("/");
  if (slash === -1) return "img";
  const ext = mt.slice(slash + 1).replace(/[^a-z0-9]/g, "");
  return ext || "img";
}

export function pageImagePath(id: string, ext = "png"): string {
  const safeExt = ext.replace(/[^a-z0-9]/gi, "") || "img";
  return join(PAGES_DIR, `${id}.${safeExt}`);
}

// ── Read / Write ─────────────────────────────────────────────────────────────

export function savePage(page: Page, imageData: Buffer): void {
  if (!existsSync(PAGES_DIR)) mkdirSync(PAGES_DIR, { recursive: true });

  // Guard against accidental overwrite if an ID collision slips through (e.g. races).
  if (existsSync(pageMetaPath(page.id)) || existsSync(page.imagePath)) {
    throw new Error(`Page ID collision: ${page.id}. Refusing to overwrite existing files.`);
  }

  writeFileSync(pageMetaPath(page.id), JSON.stringify(page, null, 2));
  writeFileSync(page.imagePath, imageData);
}

export function loadPage(id: string): Page | null {
  const metaPath = pageMetaPath(id);
  if (!existsSync(metaPath)) {
    if (!existsSync(PAGES_DIR)) return null;
    const match = readdirSync(PAGES_DIR).find(
      (f) => f.startsWith(id) && f.endsWith(".json"),
    );
    if (!match) return null;
    const matchId = match.replace(".json", "");
    return loadPage(matchId);
  }

  try {
    return JSON.parse(readFileSync(metaPath, "utf-8")) as Page;
  } catch {
    return null;
  }
}

export function loadLatestPage(): Page | null {
  const pages = listPages();
  return pages[0] ?? null;
}

// ── List ─────────────────────────────────────────────────────────────────────

export function listPages(): Page[] {
  if (!existsSync(PAGES_DIR)) return [];

  return readdirSync(PAGES_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      try {
        return JSON.parse(readFileSync(join(PAGES_DIR, f), "utf-8")) as Page;
      } catch {
        return null;
      }
    })
    .filter((p): p is Page => p !== null)
    .sort((a, b) => b.timestamp - a.timestamp);
}

// ── Star ─────────────────────────────────────────────────────────────────────

export function toggleStar(id: string): { page: Page; starred: boolean } | null {
  const page = loadPage(id);
  if (!page) return null;

  page.starred = !page.starred;
  writeFileSync(pageMetaPath(page.id), JSON.stringify(page, null, 2));

  return { page, starred: page.starred };
}
