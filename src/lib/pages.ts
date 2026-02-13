import { existsSync, readFileSync, writeFileSync, mkdirSync, readdirSync } from "fs";
import { homedir } from "os";
import { join } from "path";
import type { Page } from "../types.js";

const PAGES_DIR = join(homedir(), ".cache", "prism", "pages");

// ── ID ───────────────────────────────────────────────────────────────────────

export function generatePageId(): string {
  return Math.random().toString(16).slice(2, 5);
}

// ── Paths ────────────────────────────────────────────────────────────────────

export function pagesDir(): string {
  return PAGES_DIR;
}

export function pageMetaPath(id: string): string {
  return join(PAGES_DIR, `${id}.json`);
}

export function pageImagePath(id: string): string {
  return join(PAGES_DIR, `${id}.png`);
}

// ── Read / Write ─────────────────────────────────────────────────────────────

export function savePage(page: Page, imageData: Buffer): void {
  if (!existsSync(PAGES_DIR)) mkdirSync(PAGES_DIR, { recursive: true });

  writeFileSync(pageMetaPath(page.id), JSON.stringify(page, null, 2));
  writeFileSync(pageImagePath(page.id), imageData);
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
