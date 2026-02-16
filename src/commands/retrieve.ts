import type { ParsedArgs } from "../types.js";
import { loadPage, loadLatestPage, listPages, toggleStar } from "../lib/pages.js";
import { status, printPageList, printPagePath, printPrompt, printInlineImage } from "../lib/output.js";

// ── Get ──────────────────────────────────────────────────────────────────────

export async function get(idOrLatest: string, args: ParsedArgs): Promise<void> {
  const json = args.flags.json === true;

  const page = idOrLatest === "latest" ? loadLatestPage() : loadPage(idOrLatest);

  if (!page) {
    throw new Error(idOrLatest === "latest" ? "No generations yet." : `No page found: ${idOrLatest}`);
  }

  printPagePath(page, json);
  if (!json) printInlineImage(page.imagePath);

  if (args.flags.open === true) {
    const proc = Bun.spawn(["open", page.imagePath], { stdout: "ignore", stderr: "ignore" });
    await proc.exited;
  }
}

// ── List ─────────────────────────────────────────────────────────────────────

export function list(args: ParsedArgs): void {
  const json = args.flags.json === true;
  const starredOnly = args.flags.starred === true;

  let pages = listPages();

  if (starredOnly) {
    pages = pages.filter((p) => p.starred);
  }

  printPageList(pages, json);
}

// ── Star ─────────────────────────────────────────────────────────────────────

export function star(id: string, args: ParsedArgs): void {
  const json = args.flags.json === true;

  const result = toggleStar(id);
  if (!result) {
    throw new Error(`No page found: ${id}`);
  }

  if (json) {
    console.log(JSON.stringify({ id: result.page.id, starred: result.starred }));
    return;
  }

  const icon = result.starred ? "★" : "☆";
  status(`${icon} [${result.page.id}] ${result.starred ? "starred" : "unstarred"}`);
}

// ── Prompt ───────────────────────────────────────────────────────────────────

export function prompt(id: string, args: ParsedArgs): void {
  const json = args.flags.json === true;

  const page = loadPage(id);
  if (!page) {
    throw new Error(`No page found: ${id}`);
  }

  printPrompt(page, json);
}
