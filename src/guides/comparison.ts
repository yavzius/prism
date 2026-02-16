import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "comparison",
  title: "Side-by-side feature comparisons",
  content: `Create a feature comparison with the decisive clarity of a Wirecutter recommendation matrix or Stripe's feature tables — the kind of layout where trade-offs become scannable in seconds, not minutes.

CANVAS: A warm, lightly textured surface (#F5F3EF) with a subtle paper grain. The comparison table floats on this as a single card with soft rounded corners and the gentlest shadow. The card should feel like a well-designed artifact resting on a desk, not a UI component trapped in a browser.

STRUCTURE: A clean grid — option names as bold column headers across the top, criteria as row labels down the left side. The body cells carry the verdict: small icons (checkmark, cross, or dash) with optional brief text. Order criteria with the most differentiating rows at the top, least at the bottom. Five to eight criteria — enough to be useful, few enough to stay scannable. This is a decision tool, not a spreadsheet.

COLOR: The canvas stays warm and neutral. Column headers each get a distinct but harmonious muted tint — a soft blue, a soft green, a soft amber — that gives each option its own identity without competing for attention. In the body, color appears only on status indicators: a soft green (#059669) for advantages, a muted red for disadvantages, warm gray for neutral. If one option is the recommended choice, its column gets a slightly stronger header and a "Recommended" badge — plus the faintest tinted wash running through all its cells. Charcoal (#1F2937) for primary text, warm gray for secondary.

STATUS INDICATORS: Each cell uses a small icon in a soft-colored circle — green checkmark for strength, red cross for weakness, gray dash for partial or not applicable. For more nuanced comparisons, replace icons with brief text ratings like "Excellent," "Good," or "Limited," each picking up the appropriate color. The icons are simple and geometric, consistent in stroke weight, never decorative.

TYPOGRAPHY: The title sits above the table — bold, dark, centered, with the confident weight of a headline that knows exactly what it's comparing. Column headers are bold and sized to anchor each column's identity. Row labels are semi-bold in charcoal, left-aligned, acting as the questions the table answers. Cell annotations stay small and muted, supporting the icons without crowding them.

VERDICT ROW: The bottom row is the payoff. A slightly darker background or a clean top border sets it apart. Each cell contains a three-to-five-word summary — "Best for scale," "Most cost-effective," "Easiest to start" — giving the viewer closure and a clear takeaway without re-reading the grid.

SPACING: Generous row height, clear padding in every cell, a third of the canvas as breathing room. Internal grid lines are the faintest warm gray — just enough structure to guide the eye without adding weight.

The overall sensibility: the trade-offs, laid bare — decide in seconds, not minutes. A comparison so well-organized it feels like the decision was already made for you.`,
};
