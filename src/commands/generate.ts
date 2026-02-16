import type { ParsedArgs, Page } from "../types.js";
import {
  generatePageId,
  imageExtForMimeType,
  savePage,
  pageImagePath,
  loadLatestPage,
  loadPage,
} from "../lib/pages.js";
import { readFileSync, existsSync } from "fs";
import { resolve as resolvePath } from "path";
import { detectImageMimeType } from "../lib/mime.js";
import { getGuide } from "../guides/index.js";
import { status, printGenerationResult, printInlineImage } from "../lib/output.js";
import * as gemini from "../providers/gemini.js";

const VARIATIONS_PREFIX = `Four distinct variations, arranged in a 2x2 grid and labeled A, B, C, D:`;

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
  const variations = args.flags.var === true;
  const size = resolveSize(args.flags.size as string | undefined);
  const guideName = args.flags.guide as string | undefined;
  const ref = args.flags.ref as string | undefined;

  let fullPrompt = prompt;

  if (guideName) {
    const guide = getGuide(guideName);
    if (!guide) {
      throw new Error(`Unknown guide: ${guideName}. Run 'prism guides' to see available guides.`);
    }
    fullPrompt = `${guide.content}\n\n---\n\nNow create this visualization:\n${prompt}`;
  }

  if (variations) {
    fullPrompt = `${VARIATIONS_PREFIX}\n\n${fullPrompt}`;
  }

  const tags = [
    guideName ? `guide: ${guideName}` : null,
    variations ? "variations" : null,
    thinking ? "thinking" : null,
  ].filter(Boolean);

  status(`\n🎨 Generating${tags.length ? ` [${tags.join("] [")}]` : ""}...`);

  let referenceImage: { data: Buffer; mimeType: string } | undefined;
  if (ref) {
    const page = ref === "latest" ? loadLatestPage() : loadPage(ref);
    if (page) {
      const data = Buffer.from(readFileSync(page.imagePath));
      referenceImage = { data, mimeType: page.mimeType ?? detectImageMimeType(data) };
    } else {
      const fsPath = resolvePath(process.cwd(), ref);
      if (!existsSync(fsPath)) {
        throw new Error(`Reference not found: ${ref} (not an ID, and no file at ${fsPath})`);
      }
      const data = Buffer.from(readFileSync(fsPath));
      referenceImage = { data, mimeType: detectImageMimeType(data) };
    }
  }

  const result = await gemini.generateImage(fullPrompt, { thinking, referenceImage });

  const id = generatePageId();
  const imagePath = pageImagePath(id, imageExtForMimeType(result.mimeType));

  const page: Page = {
    id,
    prompt: fullPrompt,
    basePrompt: prompt,
    guideName,
    size,
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
