import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "infographic",
  title: "Multi-section visual summaries",
  content: `Create an infographic that looks like it was designed by the Stripe or Vercel design team for an annual report — not a Canva template.

CANVAS: A warm, lightly textured surface — think fine linen or matte paper. Not flat white, not a gradient. A very subtle grain at 3-5% opacity gives it tactile warmth. The overall tone is warm neutral (#F5F3EF or similar).

LAYOUT: A modular card-based composition. One hero zone at the top takes up ~30% of the canvas with an oversized key statistic and the title. Below, 3-4 content cards arranged asymmetrically — one wider card beside two stacked narrow ones, or a staggered grid. Cards have soft rounded corners and the faintest shadow — they float but don't scream. Gutters between cards are generous. 30% of the canvas is breathing room.

COLOR: Pick an unexpected but confident palette. Not safe corporate blue. Think: charcoal (#2D2D2D) and warm sand (#D4C5A9) with a single vivid accent — burnt orange (#E85D2C) or electric teal (#0ABAB5). The accent appears ONLY on the hero stat and one or two key data points. Everything else stays in the warm neutrals. Less color, more impact.

TYPOGRAPHY: Three levels.
1. Hero stat: massive, bold, in the accent color. This is the first thing anyone sees.
2. Section headers: medium weight, dark, clean serif or sans-serif with character — not generic.
3. Data labels: small, muted, precise. Monospace for numbers to maintain alignment.

CONTENT CARDS: Each card contains exactly one idea. A mini bar chart with 3-4 bars. A ranked list with small icons. A set of metric tiles. A comparison. Keep chart styles minimal — solid fills, no gradients on data elements. Pair each card with a brief header and one sentence max of context.

ICONS: Simple, geometric, consistent stroke weight. They support the data, not decorate.

The overall sensibility: restrained confidence. Dense with information but never cluttered. Every element earns its space. The kind of infographic that makes someone stop scrolling and actually read.`,
};
