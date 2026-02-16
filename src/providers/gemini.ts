import type { GeminiImageResponse } from "../types.js";
import { geminiKey } from "../lib/config.js";

const BASE_URL = "https://generativelanguage.googleapis.com/v1beta";
const MODEL = "gemini-3-pro-image-preview";

const SYSTEM_PROMPT = `You are a world-class visual designer with the sensibility of the best modern design studios — Stripe, Linear, Vercel, Bloomberg Graphics, the New York Times data team. Your work has warmth, texture, and depth. It never looks like generic AI output.

Design sensibility:
- Warm and tactile — subtle paper grain, soft noise textures, or matte surfaces. Never sterile or plasticky.
- Cinematic lighting — soft gradients that guide the eye toward key information, not flat color fills.
- Interesting color choices — unexpected but harmonious combinations with depth. Earth tones with a luminous accent, desaturated palettes with one vivid pop.
- Typography with character — choose serif for warmth and authority, monospace for technical precision, bold sans-serif for modern impact. Never default to generic.
- Generous breathing room — whitespace is a design element, not empty space. Let compositions breathe.
- Every label and text element must be perfectly legible and precisely placed.`;

export interface GenerateResult {
  imageData: Buffer;
  mimeType: string;
}

function parseRetries(): number {
  const raw = Bun.env.PRISM_RETRIES?.trim();
  if (!raw) return 2;
  const n = Number(raw);
  if (!Number.isFinite(n) || n < 0) return 2;
  return Math.floor(n);
}

function isRetryableError(err: unknown): boolean {
  const message = err instanceof Error ? err.message : String(err);
  if (message.includes("Gemini returned an empty response")) return true;
  if (message.includes("Generation produced text only, no image returned")) return true;
  if (message.includes("Unable to connect")) return true;

  const m = message.match(/Gemini API error \\((\\d{3})\\):/);
  if (m) {
    const status = Number(m[1]);
    if (Number.isFinite(status) && status >= 500) return true;
  }

  return false;
}

async function generateImageOnce(
  prompt: string,
  options: { thinking: boolean; referenceImage?: { data: Buffer; mimeType: string } },
): Promise<GenerateResult> {
  const apiKey = geminiKey;
  if (!apiKey) {
    throw new Error("Gemini API key not set. Run 'prism setup' for instructions.");
  }

  const parts: Array<Record<string, unknown>> = [
    { text: SYSTEM_PROMPT },
  ];

  if (options.referenceImage) {
    parts.push({
      inlineData: {
        mimeType: options.referenceImage.mimeType,
        data: options.referenceImage.data.toString("base64"),
      },
    });
  }

  parts.push({ text: prompt });

  const response = await fetch(`${BASE_URL}/models/${MODEL}:generateContent?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts }],
      generationConfig: {
        responseModalities: ["TEXT", "IMAGE"],
        ...(options.thinking ? { thinkingConfig: { thinkingBudget: 8192 } } : {}),
      },
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    if (response.status === 429) {
      throw new Error("Rate limited by Gemini API. Wait a moment and try again.");
    }
    throw new Error(`Gemini API error (${response.status}): ${text}`);
  }

  const data = (await response.json()) as GeminiImageResponse;

  if (data.error) {
    throw new Error(`Gemini API error (${data.error.code}): ${data.error.message}`);
  }

  const responseParts = data.candidates?.[0]?.content?.parts;
  if (!responseParts) {
    throw new Error("Gemini returned an empty response.");
  }

  const imagePart = responseParts.find((p) => p.inlineData?.mimeType?.startsWith("image/"));
  if (!imagePart?.inlineData) {
    throw new Error("Generation produced text only, no image returned.");
  }

  const mimeType = imagePart.inlineData.mimeType;
  const imageData = Buffer.from(imagePart.inlineData.data, "base64");
  return { imageData, mimeType };
}

export async function generateImage(
  prompt: string,
  options: { thinking: boolean; referenceImage?: { data: Buffer; mimeType: string } },
): Promise<GenerateResult> {
  const retries = parseRetries();
  let lastErr: unknown;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await generateImageOnce(prompt, options);
    } catch (err: unknown) {
      lastErr = err;
      if (attempt >= retries || !isRetryableError(err)) {
        throw err;
      }

      // 350ms, 700ms, 1400ms ...
      const backoffMs = 350 * Math.pow(2, attempt);
      await Bun.sleep(backoffMs);
    }
  }

  // Should be unreachable, but keeps TS happy.
  throw lastErr instanceof Error ? lastErr : new Error(String(lastErr));
}
