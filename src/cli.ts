#!/usr/bin/env bun

import type { ParsedArgs } from "./types.js";
import { VERSION } from "./lib/config.js";
import * as generate from "./commands/generate.js";
import * as retrieve from "./commands/retrieve.js";
import * as guides from "./commands/guides.js";
import * as setup from "./commands/setup.js";
import * as varCmd from "./commands/var.js";
import * as pack from "./commands/pack.js";

// ── Help ─────────────────────────────────────────────────────────────────────

const HELP = `
prism v${VERSION} — Visual explanations from the terminal

GENERATE
  prism "prompt"                        Generate image, archive with 3-char ID
  prism "prompt" --guide NAME           Use a prompt guide
  prism "prompt" --var                  Generate 4 variations (2x2 grid, A/B/C/D)
  prism "prompt" --ref REF              Reference an image (id, latest, or file path)
  prism "prompt" --size SIZE            square (default), wide, tall, WxH
  prism "prompt" --thinking             Enable thinking mode for complex layouts
  prism "prompt" --open                 Open image after generation

VARIATIONS
  prism var <id|latest> <A|B|C|D>       Expand a variation to full image
  prism var <id> <A|B|C|D> --var        Generate 4 sub-variations of a pick

PACKS
  prism pack frontend "brief"           Wireframes + mockups + component sheet
  prism pack frontend "brief" --wireframe-pick B --mockup-pick C
                                       Expand picks and keep them style-consistent
  prism pack frontend "brief" --out DIR Copy outputs + write DIR/pack.json

RETRIEVE
  prism get <id>                        Get image path by ID
  prism get latest                      Most recent generation

HISTORY
  prism list                            All generations
  prism list --starred                  Starred only
  prism star <id>                       Toggle star

GUIDES
  prism guides                          List all prompt guides
  prism guide <name>                    Show full guide content

PROMPT RECALL
  prism prompt <id>                     Print the exact prompt used

SETUP
  prism setup                           Check API key status + configure Claude Code
  prism setup gemini <key>              Save Gemini API key
  prism setup claude                    Add prism to ~/.claude/CLAUDE.md

  When configured, setup automatically adds prism to ~/.claude/CLAUDE.md
  so Claude Code knows to use it.

OPTIONS
  --json                                Output as JSON
  --version                             Show version
  --help                                Show this help
`;

// ── Arg Parser ───────────────────────────────────────────────────────────────

function parseArgs(argv: string[]): ParsedArgs {
  const flags: Record<string, string | boolean> = {};
  const positional: string[] = [];

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]!;

    if (arg === "--help" || arg === "-h") {
      flags.help = true;
    } else if (arg === "--version" || arg === "-v") {
      flags.version = true;
    } else if (arg === "--json") {
      flags.json = true;
    } else if (arg === "--open") {
      flags.open = true;
    } else if (arg === "--thinking") {
      flags.thinking = true;
    } else if (arg === "--var") {
      flags.var = true;
    } else if (arg === "--starred") {
      flags.starred = true;
    } else if (arg.startsWith("--")) {
      const key = arg.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith("--")) {
        flags[key] = next;
        i++;
      } else {
        flags[key] = true;
      }
    } else {
      positional.push(arg);
    }
  }

  return { flags, positional };
}

// ── Router ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const args = parseArgs(Bun.argv.slice(2));

  if (args.flags.help || (args.positional.length === 0 && !args.flags.version)) {
    console.log(HELP);
    return;
  }

  if (args.flags.version) {
    console.log(`prism v${VERSION}`);
    return;
  }

  const command = args.positional[0];

  // prism get <id|latest>
  if (command === "get") {
    const id = args.positional[1];
    if (!id) {
      console.error("Usage: prism get <id|latest>");
      process.exit(1);
    }
    await retrieve.get(id, args);
    return;
  }

  // prism list
  if (command === "list") {
    retrieve.list(args);
    return;
  }

  // prism star <id>
  if (command === "star") {
    const id = args.positional[1];
    if (!id) {
      console.error("Usage: prism star <id>");
      process.exit(1);
    }
    retrieve.star(id, args);
    return;
  }

  // prism var <id> <letter>
  if (command === "var") {
    const id = args.positional[1];
    const letter = args.positional[2];
    if (!id || !letter) {
      console.error("Usage: prism var <id|latest> <A|B|C|D>");
      process.exit(1);
    }
    await varCmd.run(id, letter, args);
    return;
  }

  // prism prompt <id>
  if (command === "prompt") {
    const id = args.positional[1];
    if (!id) {
      console.error("Usage: prism prompt <id>");
      process.exit(1);
    }
    retrieve.prompt(id, args);
    return;
  }

  // prism guides
  if (command === "guides") {
    guides.listGuides(args.flags.json === true);
    return;
  }

  // prism guide <name>
  if (command === "guide") {
    const name = args.positional[1];
    if (!name) {
      console.error("Usage: prism guide <name>");
      process.exit(1);
    }
    guides.showGuide(name, args.flags.json === true);
    return;
  }

  // prism setup [gemini] [key]
  if (command === "setup") {
    setup.run(args.positional.slice(1));
    return;
  }

  // prism pack <type> <brief>
  if (command === "pack") {
    const type = args.positional[1];
    const brief = args.positional.slice(2).join(" ");
    if (!type || !brief) {
      console.error("Usage: prism pack frontend \"brief\"");
      process.exit(1);
    }
    await pack.run(type, brief, args);
    return;
  }

  // Default: generate
  const prompt = args.positional.join(" ");
  if (!prompt) {
    console.log(HELP);
    return;
  }

  await generate.run(prompt, args);
}

main().catch((err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);
  console.error(`Error: ${message}`);
  process.exit(1);
});
