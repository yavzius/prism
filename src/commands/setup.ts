import { geminiKey, saveApiKey } from "../lib/config.js";
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import { homedir } from "os";
import { join } from "path";

const PRISM_CLAUDE_BEGIN = "<!-- PRISM:BEGIN -->";
const PRISM_CLAUDE_END = "<!-- PRISM:END -->";

// ── ~/.claude/CLAUDE.md Integration ─────────────────────────────────────────

const CLAUDE_MD_DIR = join(homedir(), ".claude");
const CLAUDE_MD_PATH = join(CLAUDE_MD_DIR, "CLAUDE.md");

function prismClaudeSection(): string {
  // Keep this concise: Claude should follow it, not debate it.
  return `${PRISM_CLAUDE_BEGIN}
## Prism (Visual Generator)

Use Prism to generate clear visuals (diagrams, charts, UI mockups) when you need to understand context or ideate on frontend.

### Rules

- When the task benefits from a visual: use Prism instead of guessing.
- Before writing UI code: generate a pack (wireframes + mockups + component sheet) and pick a direction.
- Prefer machine-readable outputs (\`--json\`) and write packs into \`./.prism/\` (gitignored).
- Keep visual consistency across screens by referencing the chosen mock with \`--ref\`.

### Commands

- Frontend pack (wireframes + mockups + components):
  \`PRISM_PAGES_DIR=./.prism/pages prism pack frontend "brief" --wireframe-pick B --mockup-pick C --out ./.prism/packs/<name> --json\`

- Context diagrams:
  \`prism "system architecture for ..." --guide architecture --json\`
  \`prism "OAuth flow in 6 steps ..." --guide sequence --json\`
  \`prism "request lifecycle ..." --guide flow --json\`

- Iterate on variations:
  \`prism "brief" --guide mockup --var\`
  \`prism var latest B\`

- Keep style consistent:
  \`prism "next screen brief" --guide mockup --ref <id|latest|path>\`

### Notes

- If you cannot view images in your environment, ask the user to pick A/B/C/D after they open the outputs.
- Store outputs under \`./.prism/\` and avoid committing generated images.
${PRISM_CLAUDE_END}`;
}

function upsertMarkedSection(existing: string, section: string): { next: string; changed: boolean } {
  const begin = existing.indexOf(PRISM_CLAUDE_BEGIN);
  const end = existing.indexOf(PRISM_CLAUDE_END);

  if (begin !== -1 && end !== -1 && end > begin) {
    const before = existing.slice(0, begin).trimEnd();
    const after = existing.slice(end + PRISM_CLAUDE_END.length).trimStart();
    const next = `${before}\n\n${section}\n\n${after}`.trimEnd() + "\n";
    return { next, changed: next !== existing };
  }

  // No existing markers: append.
  const trimmed = existing.trimEnd();
  const next = `${trimmed}\n\n${section}\n`;
  return { next, changed: next !== existing };
}

function ensureClaudeMd(): { changed: boolean } {
  if (!existsSync(CLAUDE_MD_DIR)) mkdirSync(CLAUDE_MD_DIR, { recursive: true });

  const section = prismClaudeSection();

  if (existsSync(CLAUDE_MD_PATH)) {
    const content = readFileSync(CLAUDE_MD_PATH, "utf-8");

    // If a Prism section exists without our markers, don't duplicate it.
    if (!content.includes(PRISM_CLAUDE_BEGIN) && content.includes("## Prism (Visual Generator)")) {
      return { changed: false };
    }

    const { next, changed } = upsertMarkedSection(content, section);
    if (changed) writeFileSync(CLAUDE_MD_PATH, next);
    return { changed };
  }

  writeFileSync(CLAUDE_MD_PATH, `# Claude Memory\n\n${section}\n`);
  return { changed: true };
}

export function run(positional: string[]): void {
  const subcommand = positional[0] as string | undefined;
  const key = positional[1] as string | undefined;

  // prism setup gemini <key>
  if (subcommand === "gemini" && key) {
    saveApiKey(key);
    console.log("✓ Gemini API key saved");

    try {
      const { changed } = ensureClaudeMd();
      if (changed) console.log("✓ Added prism to ~/.claude/CLAUDE.md");
    } catch (err: unknown) {
      // Best-effort: don't block setup if Claude integration fails.
      const message = err instanceof Error ? err.message : String(err);
      console.error(`Warning: unable to update ~/.claude/CLAUDE.md (${message})`);
    }

    return;
  }

  // prism setup claude — (re)install Claude Code integration
  if (subcommand === "claude") {
    const { changed } = ensureClaudeMd();
    console.log(changed ? "✓ Added prism to ~/.claude/CLAUDE.md" : "✓ Claude Code integration already configured.");
    return;
  }

  if (subcommand && subcommand !== "gemini") {
    console.error(`Unknown setup target: ${subcommand}. Available: gemini, claude.`);
    process.exit(1);
  }

  // prism setup — show status
  const configured = geminiKey !== undefined;
  const icon = configured ? "✓" : "✗";
  const state = configured ? "configured" : "missing";

  console.log("\nprism requires one API key:\n");
  console.log(`  ${icon} Gemini          ${state}       image generation`);

  if (!configured) {
    console.log("\nGet a key: https://aistudio.google.com/apikey");
    console.log("\nThen run:");
    console.log("  prism setup gemini <your-key>");
    console.log("\nOnce configured, setup automatically adds prism to ~/.claude/CLAUDE.md for Claude Code.");
  } else {
    try {
      const { changed } = ensureClaudeMd();
      if (changed) {
        console.log("\n✓ Added prism to ~/.claude/CLAUDE.md");
      } else {
        console.log("\n✓ Claude Code integration already configured.");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`\nWarning: unable to update ~/.claude/CLAUDE.md (${message})`);
    }
    console.log("\n✓ Ready to generate. Try: prism \"your prompt\"");
  }

  console.log();
}
