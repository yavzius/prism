import type { ParsedArgs, Page } from "../types.js";
import { generatePageId, savePage, pageImagePath } from "../lib/pages.js";
import { getGuide } from "../guides/index.js";
import { status, printGenerationResult, printInlineImage } from "../lib/output.js";
import * as gemini from "../providers/gemini.js";

// ── Size Resolution ──────────────────────────────────────────────────────────

function resolveSize(flag?: string): string {
  if (!flag) return "1024x1024";
  if (flag === "wide") return "1536x1024";
  if (flag === "tall") return "1024x1536";
  if (flag === "square") return "1024x1024";
  if (/^\d+x\d+$/.test(flag)) return flag;
  return "1024x1024";
}

// ── Command ──────────────────────────────────────────────────────────────────

export async function run(prompt: string, args: ParsedArgs): Promise<void> {
  const json = args.flags.json === true;
  const thinking = args.flags.thinking === true;
  const size = resolveSize(args.flags.size as string | undefined);
  const guideName = args.flags.guide as string | undefined;

  let fullPrompt = prompt;

  if (guideName) {
    const guide = getGuide(guideName);
    if (!guide) {
      throw new Error(`Unknown guide: ${guideName}. Run 'prism guides' to see available guides.`);
    }
    fullPrompt = `${guide.content}\n\n---\n\nNow create this visualization:\n${prompt}`;
    status(`\n🎨 Generating with guide [${guideName}]${thinking ? " [thinking]" : ""}...`);
  } else {
    status(`\n🎨 Generating${thinking ? " [thinking]" : ""}...`);
  }

  const result = await gemini.generateImage(fullPrompt, { thinking });

  const id = generatePageId();

  const page: Page = {
    id,
    prompt: fullPrompt,
    guideName,
    size,
    starred: false,
    timestamp: Date.now(),
    imagePath: pageImagePath(id),
  };

  savePage(page, result.imageData);

  printGenerationResult(page, json);
  if (!json) printInlineImage(page.imagePath);

  if (args.flags.open === true) {
    const proc = Bun.spawn(["open", page.imagePath], { stdout: "ignore", stderr: "ignore" });
    await proc.exited;
  }
}
