import { readFileSync } from "fs";
import type { ParsedArgs, Page } from "../types.js";
import {
  generatePageId,
  imageExtForMimeType,
  savePage,
  pageImagePath,
  loadLatestPage,
  loadPage,
} from "../lib/pages.js";
import { detectImageMimeType } from "../lib/mime.js";
import { getGuide } from "../guides/index.js";
import { status, printGenerationResult, printInlineImage } from "../lib/output.js";
import * as gemini from "../providers/gemini.js";

const VALID_LETTERS = new Set(["A", "B", "C", "D"]);

function expandPrompt(letter: string, page: Page): string {
  const base = page.basePrompt ?? page.prompt;
  return `Here is a 2x2 grid of four design variations labeled A, B, C, D. Expand variation ${letter} into a full, detailed standalone image. Keep its creative direction, style, and layout — but fill in all the detail and fidelity that the small quadrant couldn't show.\n\nOriginal brief: ${base}`;
}

function revarPrompt(letter: string, page: Page): string {
  const base = page.basePrompt ?? page.prompt;
  return `Here is a 2x2 grid of four design variations labeled A, B, C, D. Take the creative direction of variation ${letter} and generate four new distinct sub-variations of it, arranged in a 2x2 grid and labeled A, B, C, D.\n\nOriginal brief: ${base}`;
}

export async function run(id: string, letter: string, args: ParsedArgs): Promise<void> {
  const json = args.flags.json === true;
  const thinking = args.flags.thinking === true;
  const revar = args.flags.var === true;

  const upper = letter.toUpperCase();
  if (!VALID_LETTERS.has(upper)) {
    throw new Error(`Invalid variation letter: ${letter}. Use A, B, C, or D.`);
  }

  const sourcePage = id === "latest" ? loadLatestPage() : loadPage(id);
  if (!sourcePage) {
    throw new Error(id === "latest" ? "No generations yet." : `No generation found with ID: ${id}`);
  }

  const referenceImageData = Buffer.from(readFileSync(sourcePage.imagePath));
  const referenceImageMimeType = sourcePage.mimeType ?? detectImageMimeType(referenceImageData);
  const prompt = revar ? revarPrompt(upper, sourcePage) : expandPrompt(upper, sourcePage);

  // If the source used a guide, prepend the guide content
  let fullPrompt = prompt;
  if (sourcePage.guideName) {
    const guide = getGuide(sourcePage.guideName);
    if (guide) {
      fullPrompt = `${guide.content}\n\n---\n\n${prompt}`;
    }
  }

  const action = revar ? `new variations of ${upper}` : `expanding ${upper}`;
  status(`\n🎨 Generating ${action} from [${id}]${thinking ? " [thinking]" : ""}...`);

  const result = await gemini.generateImage(fullPrompt, {
    thinking,
    referenceImage: { data: referenceImageData, mimeType: referenceImageMimeType },
  });

  const newId = generatePageId();
  const imagePath = pageImagePath(newId, imageExtForMimeType(result.mimeType));

  const page: Page = {
    id: newId,
    prompt: fullPrompt,
    basePrompt: sourcePage.basePrompt ?? sourcePage.prompt,
    guideName: sourcePage.guideName,
    size: sourcePage.size,
    starred: false,
    timestamp: Date.now(),
    imagePath,
    mimeType: result.mimeType,
  };

  savePage(page, result.imageData);

  printGenerationResult(page, json);
  if (!json) printInlineImage(page.imagePath);

  if (args.flags.open === true) {
    const proc = Bun.spawn(["open", page.imagePath], { stdout: "ignore", stderr: "ignore" });
    await proc.exited;
  }
}
