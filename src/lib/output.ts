import type { Page } from "../types.js";

const SEPARATOR = "═".repeat(70);

// ── Status (stderr) ──────────────────────────────────────────────────────────

export function status(message: string): void {
  console.error(message);
}

// ── Time Ago ─────────────────────────────────────────────────────────────────

function timeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

// ── Size Label ───────────────────────────────────────────────────────────────

function sizeLabel(size: string): string {
  if (size === "1536x1024") return "wide";
  if (size === "1024x1536") return "tall";
  return size;
}

// ── Page List ────────────────────────────────────────────────────────────────

export function printPageList(pages: Page[], json: boolean): void {
  if (json) {
    console.log(JSON.stringify(pages, null, 2));
    return;
  }

  if (pages.length === 0) {
    console.log("No generations yet. Run: prism \"your prompt\"");
    return;
  }

  console.log();
  for (const page of pages) {
    const star = page.starred ? "★" : " ";
    const snippet = page.prompt.length > 50
      ? `${page.prompt.slice(0, 50)}...`
      : page.prompt;
    console.log(`[${page.id}] ${star} "${snippet}" (${sizeLabel(page.size)}) ${timeAgo(page.timestamp)}`);
  }
  console.log();
}

// ── Generation Result ────────────────────────────────────────────────────────

export function printGenerationResult(page: Page, json: boolean): void {
  if (json) {
    console.log(JSON.stringify(page, null, 2));
    return;
  }

  console.log(`\n${SEPARATOR}`);
  console.log(`[${page.id}] Generated (${sizeLabel(page.size)})`);
  console.log(`${SEPARATOR}\n`);
  console.log(page.imagePath);
}

// ── Page Detail ──────────────────────────────────────────────────────────────

export function printPagePath(page: Page, json: boolean): void {
  if (json) {
    console.log(JSON.stringify(page, null, 2));
    return;
  }

  console.log(page.imagePath);
}

// ── Prompt ───────────────────────────────────────────────────────────────────

export function printPrompt(page: Page, json: boolean): void {
  if (json) {
    console.log(JSON.stringify({ id: page.id, prompt: page.prompt, guideName: page.guideName }, null, 2));
    return;
  }

  if (page.guideName) {
    console.log(`[guide: ${page.guideName}]\n`);
  }
  console.log(page.prompt);
}
