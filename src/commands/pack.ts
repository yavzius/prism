import { mkdirSync, existsSync, copyFileSync, writeFileSync, readFileSync } from "fs";
import { join, resolve } from "path";
import type { ParsedArgs, Page } from "../types.js";
import { getGuide } from "../guides/index.js";
import { status } from "../lib/output.js";
import {
  generatePageId,
  imageExtForMimeType,
  pageImagePath,
  savePage,
} from "../lib/pages.js";
import { detectImageMimeType } from "../lib/mime.js";
import * as gemini from "../providers/gemini.js";

const VARIATIONS_PREFIX = `Four distinct variations, arranged in a 2x2 grid and labeled A, B, C, D:`;
const VALID_LETTERS = new Set(["A", "B", "C", "D"]);

type PackType = "frontend";

type PackItem =
  | { kind: "wireframe_grid"; page: Page }
  | { kind: "wireframe_pick"; letter: string; page: Page }
  | { kind: "mockup_grid"; page: Page }
  | { kind: "mockup_pick"; letter: string; page: Page }
  | { kind: "component_sheet"; page: Page };

interface FrontendPackResult {
  packId: string;
  type: PackType;
  brief: string;
  createdAt: number;
  items: PackItem[];
  outDir?: string;
}

function resolveSize(flag?: string): string {
  if (!flag) return "1024x1024";
  if (flag === "wide") return "1536x1024";
  if (flag === "tall") return "1024x1536";
  if (flag === "square") return "1024x1024";
  if (/^\d+x\d+$/.test(flag)) return flag;
  return "1024x1024";
}

function requireLetter(value: unknown, flagName: string): string {
  if (value === undefined) return "";
  const s = String(value).toUpperCase();
  if (!VALID_LETTERS.has(s)) {
    throw new Error(`Invalid ${flagName}: ${value}. Use A, B, C, or D.`);
  }
  return s;
}

function expandVariationPrompt(letter: string, brief: string): string {
  return `Here is a 2x2 grid of four design variations labeled A, B, C, D. Expand variation ${letter} into a full, detailed standalone image. Keep its creative direction, style, and layout — but fill in all the detail and fidelity that the small quadrant couldn't show.\n\nOriginal brief: ${brief}`;
}

async function generatePage(
  basePrompt: string,
  opts: {
    brief: string;
    guideName?: string;
    variations?: boolean;
    thinking: boolean;
    size: string;
    referenceImage?: { data: Buffer; mimeType: string };
    // If set, the guide content is prepended but the "Now create this visualization" section uses this prompt instead.
    overrideVisualizationPrompt?: string;
  },
): Promise<Page> {
  const guideName = opts.guideName;
  let fullPrompt: string;

  if (guideName) {
    const guide = getGuide(guideName);
    if (!guide) throw new Error(`Unknown guide: ${guideName}. Run 'prism guides' to see available guides.`);
    const vizPrompt = opts.overrideVisualizationPrompt ?? basePrompt;
    fullPrompt = `${guide.content}\n\n---\n\nNow create this visualization:\n${vizPrompt}`;
  } else {
    fullPrompt = opts.overrideVisualizationPrompt ?? basePrompt;
  }

  if (opts.variations) {
    fullPrompt = `${VARIATIONS_PREFIX}\n\n${fullPrompt}`;
  }

  const result = await gemini.generateImage(fullPrompt, { thinking: opts.thinking, referenceImage: opts.referenceImage });

  const id = generatePageId();
  const imagePath = pageImagePath(id, imageExtForMimeType(result.mimeType));

  const page: Page = {
    id,
    prompt: fullPrompt,
    basePrompt: opts.brief,
    guideName,
    size: opts.size,
    starred: false,
    timestamp: Date.now(),
    imagePath,
    mimeType: result.mimeType,
  };

  savePage(page, result.imageData);
  return page;
}

function copyIntoOutDir(outDir: string, items: PackItem[]): void {
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  const copy = (page: Page, name: string): string => {
    const ext = page.imagePath.split(".").pop() ?? "img";
    const dst = join(outDir, `${name}.${ext}`);
    copyFileSync(page.imagePath, dst);
    return dst;
  };

  const manifest: Record<string, unknown> = { items: [] as unknown[] };

  for (const item of items) {
    if (item.kind === "wireframe_grid") {
      (manifest.items as unknown[]).push({ kind: item.kind, id: item.page.id, image: copy(item.page, "wireframe-grid") });
    } else if (item.kind === "wireframe_pick") {
      (manifest.items as unknown[]).push({
        kind: item.kind,
        letter: item.letter,
        id: item.page.id,
        image: copy(item.page, `wireframe-pick-${item.letter}`),
      });
    } else if (item.kind === "mockup_grid") {
      (manifest.items as unknown[]).push({ kind: item.kind, id: item.page.id, image: copy(item.page, "mockup-grid") });
    } else if (item.kind === "mockup_pick") {
      (manifest.items as unknown[]).push({
        kind: item.kind,
        letter: item.letter,
        id: item.page.id,
        image: copy(item.page, `mockup-pick-${item.letter}`),
      });
    } else if (item.kind === "component_sheet") {
      (manifest.items as unknown[]).push({
        kind: item.kind,
        id: item.page.id,
        image: copy(item.page, "component-sheet"),
      });
    }
  }

  writeFileSync(join(outDir, "pack.json"), JSON.stringify(manifest, null, 2));
}

export async function run(type: string, brief: string, args: ParsedArgs): Promise<void> {
  const json = args.flags.json === true;
  const thinking = args.flags.thinking === true;
  const size = resolveSize(args.flags.size as string | undefined);

  if (type !== "frontend") {
    throw new Error(`Unknown pack type: ${type}. Available: frontend`);
  }

  const wireframePick = requireLetter(args.flags["wireframe-pick"], "--wireframe-pick");
  const mockupPick = requireLetter(args.flags["mockup-pick"], "--mockup-pick");
  const outDirFlag = args.flags.out as string | undefined;
  const outDir = outDirFlag ? resolve(outDirFlag) : undefined;

  const packId = `${Date.now().toString(36)}-${generatePageId()}`;
  const createdAt = Date.now();
  const items: PackItem[] = [];

  try {
    // 1) Wireframe variations
    status(`\n📦 pack[frontend] (${packId})`);
    status(`\n✎ Wireframes (variations)`);
    const wireframeGrid = await generatePage(brief, {
      brief,
      guideName: "wireframe",
      variations: true,
      thinking,
      size,
    });
    items.push({ kind: "wireframe_grid", page: wireframeGrid });

    let wireframePickPage: Page | undefined;
    if (wireframePick) {
      status(`\n✎ Wireframe pick ${wireframePick} (expand)`);
      const refData = Buffer.from(readFileSync(wireframeGrid.imagePath));
      const refMime = wireframeGrid.mimeType ?? detectImageMimeType(refData);
      const prompt = expandVariationPrompt(wireframePick, brief);
      wireframePickPage = await generatePage(prompt, {
        brief,
        guideName: "wireframe",
        thinking,
        size,
        referenceImage: { data: refData, mimeType: refMime },
        overrideVisualizationPrompt: prompt,
      });
      items.push({ kind: "wireframe_pick", letter: wireframePick, page: wireframePickPage });
    }

    // 2) Mockup variations (optionally guided by picked wireframe)
    status(`\n🎛 Mockups (variations)`);
    let mockupReference: { data: Buffer; mimeType: string } | undefined;
    let mockupBrief = brief;

    if (wireframePickPage) {
      const refData = Buffer.from(readFileSync(wireframePickPage.imagePath));
      const refMime = wireframePickPage.mimeType ?? detectImageMimeType(refData);
      mockupReference = { data: refData, mimeType: refMime };
      mockupBrief = `Hi-fi UI mockup for: ${brief}\nUse the attached wireframe as the layout. Preserve its information architecture and spacing.`;
    }

    const mockupGrid = await generatePage(mockupBrief, {
      brief,
      guideName: "mockup",
      variations: true,
      thinking,
      size,
      referenceImage: mockupReference,
      overrideVisualizationPrompt: mockupBrief,
    });
    items.push({ kind: "mockup_grid", page: mockupGrid });

    let mockupPickPage: Page | undefined;
    if (mockupPick) {
      status(`\n🎛 Mockup pick ${mockupPick} (expand)`);
      const refData = Buffer.from(readFileSync(mockupGrid.imagePath));
      const refMime = mockupGrid.mimeType ?? detectImageMimeType(refData);
      const prompt = expandVariationPrompt(mockupPick, brief);
      mockupPickPage = await generatePage(prompt, {
        brief,
        guideName: "mockup",
        thinking,
        size,
        referenceImage: { data: refData, mimeType: refMime },
        overrideVisualizationPrompt: prompt,
      });
      items.push({ kind: "mockup_pick", letter: mockupPick, page: mockupPickPage });
    }

    // 3) Component sheet (optionally guided by chosen mockup)
    status(`\n🧩 Components`);
    let componentReference: { data: Buffer; mimeType: string } | undefined;
    if (mockupPickPage) {
      const refData = Buffer.from(readFileSync(mockupPickPage.imagePath));
      const refMime = mockupPickPage.mimeType ?? detectImageMimeType(refData);
      componentReference = { data: refData, mimeType: refMime };
    }

    const componentPrompt = `Component sheet for: ${brief}\nInclude variants + states: default/hover/active/focus/disabled/loading/error.\nIf a reference UI is provided, match its visual language (type scale, radii, spacing, colors).`;

    const componentSheet = await generatePage(componentPrompt, {
      brief,
      guideName: "component",
      thinking,
      size,
      referenceImage: componentReference,
      overrideVisualizationPrompt: componentPrompt,
    });
    items.push({ kind: "component_sheet", page: componentSheet });

    const result: FrontendPackResult = {
      packId,
      type: "frontend",
      brief,
      createdAt,
      items,
      ...(outDir ? { outDir } : {}),
    };

    if (outDir) {
      copyIntoOutDir(outDir, items);
    }

    if (json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }

    console.log(`\npack[frontend] ${packId}`);
    for (const item of items) {
      if (item.kind === "wireframe_grid") console.log(`  wireframe grid:     [${item.page.id}] ${item.page.imagePath}`);
      if (item.kind === "wireframe_pick") console.log(`  wireframe pick ${item.letter}:  [${item.page.id}] ${item.page.imagePath}`);
      if (item.kind === "mockup_grid") console.log(`  mockup grid:        [${item.page.id}] ${item.page.imagePath}`);
      if (item.kind === "mockup_pick") console.log(`  mockup pick ${item.letter}:     [${item.page.id}] ${item.page.imagePath}`);
      if (item.kind === "component_sheet") console.log(`  component sheet:    [${item.page.id}] ${item.page.imagePath}`);
    }
    if (outDir) console.log(`\noutput: ${outDir}`);
    console.log();
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);

    // Best-effort: still write whatever we have so far.
    if (outDir && items.length > 0) {
      try {
        copyIntoOutDir(outDir, items);
      } catch {
        // ignore
      }
    }

    if (json) {
      console.log(JSON.stringify({
        packId,
        type: "frontend",
        brief,
        createdAt,
        items,
        ...(outDir ? { outDir } : {}),
        error: message,
      }, null, 2));
    } else {
      console.error(`Error: ${message}`);
      if (items.length) {
        console.error("\nGenerated so far:");
        for (const item of items) {
          if (item.kind === "wireframe_grid") console.error(`  wireframe grid:     [${item.page.id}] ${item.page.imagePath}`);
          if (item.kind === "wireframe_pick") console.error(`  wireframe pick ${item.letter}:  [${item.page.id}] ${item.page.imagePath}`);
          if (item.kind === "mockup_grid") console.error(`  mockup grid:        [${item.page.id}] ${item.page.imagePath}`);
          if (item.kind === "mockup_pick") console.error(`  mockup pick ${item.letter}:     [${item.page.id}] ${item.page.imagePath}`);
          if (item.kind === "component_sheet") console.error(`  component sheet:    [${item.page.id}] ${item.page.imagePath}`);
        }
        if (outDir) console.error(`\noutput: ${outDir}`);
        console.error();
      }
    }

    process.exit(1);
  }
}
