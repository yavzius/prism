import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "heatmap",
  title: "Density and intensity grids",
  content: `STYLE: Clean grid, white background, sequential color gradient (cool→warm or light→dark), labeled axes, value annotations in key cells, legend with scale.

WHEN TO USE: Showing density, intensity, or frequency across two dimensions — when the viewer needs to spot patterns, clusters, or outliers in a matrix.

COGNITIVE PRINCIPLES:
- Sequential color gradient (blue→red or white→dark) — intuitive mapping for low→high
- Avoid rainbow palettes — they create false boundaries between adjacent values
- Label both axes — without labels the colors are uninterpretable
- Include a legend with min/max scale — calibrates the viewer's perception
- Annotate extreme cells with values — makes outliers immediately actionable

PROMPT STRUCTURE:
"Heatmap of [metric] across [X] and [Y]. Data: [describe patterns or values]. Scale: [min to max with colors]. Highlight [outliers]."

EXAMPLE:
"Heatmap of API error rates by endpoint and hour. X: hours 0-23. Y: /auth, /users, /products, /search, /checkout. Higher errors during 9-17, spike on /search at 14:00. Scale: 0% white to 5%+ dark red. Highlight the /search 14:00 hotspot."`,
};
