import { getAllGuides, getGuide } from "../lib/guides.js";

// ── List Guides ──────────────────────────────────────────────────────────────

export function listGuides(json: boolean): void {
  const guides = getAllGuides();

  if (json) {
    console.log(JSON.stringify(guides, null, 2));
    return;
  }

  console.log("\nAvailable guides:\n");
  for (const guide of guides) {
    console.log(`  ${guide.name.padEnd(16)} ${guide.title}`);
  }
  console.log("\nUsage: prism guide <name>      Show full guide");
  console.log("       prism \"prompt\" --guide <name>   Generate with guide\n");
}

// ── Show Guide ───────────────────────────────────────────────────────────────

export function showGuide(name: string, json: boolean): void {
  const guide = getGuide(name);

  if (!guide) {
    const all = getAllGuides().map((g) => g.name).join(", ");
    throw new Error(`Unknown guide: ${name}. Available: ${all}`);
  }

  if (json) {
    console.log(JSON.stringify(guide, null, 2));
    return;
  }

  console.log(`\n## ${guide.title}\n`);
  console.log(guide.content);
  console.log();
}
