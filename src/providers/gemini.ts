import type { GeminiImageResponse } from "../types.js";
import { geminiKey } from "../lib/config.js";

const BASE_URL = "https://generativelanguage.googleapis.com/v1beta";
const MODEL = "gemini-3-pro-image-preview";

const SYSTEM_PROMPT = `You are a visual explanation engine. You create clear, precise technical visualizations — charts, diagrams, architecture maps, infographics — designed for engineers reviewing them in a terminal-adjacent workflow.

Rules:
- Clean white or light backgrounds for terminal readability
- High-contrast text, minimum 14pt equivalent
- Data labels directly on elements, not in separate legends
- Technical vocabulary in labels, no dumbing down
- Maximum 7 elements per grouping (Miller's law)
- No decorative elements, gradients, or 3D effects
- Arrows and flow direction must be unambiguous`;

export interface GenerateResult {
  imageData: Buffer;
}

export async function generateImage(
  prompt: string,
  options: { thinking: boolean },
): Promise<GenerateResult> {
  const apiKey = geminiKey;
  if (!apiKey) {
    throw new Error("Gemini API key not set. Run 'prism setup' for instructions.");
  }

  const response = await fetch(`${BASE_URL}/models/${MODEL}:generateContent?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{
        parts: [
          { text: SYSTEM_PROMPT },
          { text: prompt },
        ],
      }],
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

  const parts = data.candidates?.[0]?.content?.parts;
  if (!parts) {
    throw new Error("Gemini returned an empty response.");
  }

  const imagePart = parts.find((p) => p.inlineData?.mimeType?.startsWith("image/"));
  if (!imagePart?.inlineData) {
    throw new Error("Generation produced text only, no image returned.");
  }

  const imageData = Buffer.from(imagePart.inlineData.data, "base64");
  return { imageData };
}
