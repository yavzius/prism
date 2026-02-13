import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "bar-chart",
  title: "Bar and column charts",
  content: `STYLE: Clean flat bars, white background, value labels on each bar, axis labels with units, single color for single-series, no 3D or gradients. Results are illustrative, not pixel-precise.

WHEN TO USE: Comparing quantities across categories where relative magnitude is the key insight. Viewers should grasp "which is biggest" instantly.

COGNITIVE PRINCIPLES:
- Label every bar with its value directly on or above — eliminates need to reference axes
- Sort by value descending unless categories have natural order — sorted data scans 40% faster
- Single color for one series — multiple colors without meaning create false groupings
- Limit to 8-10 bars — group small values into "Other"
- Add threshold lines for targets or limits — provides instant frame of reference

PROMPT STRUCTURE:
"Bar chart of [metric] across [categories]. Data: [pairs]. Sort by [criterion]. Highlight [condition with threshold]."

EXAMPLE:
"Bar chart of API response times in milliseconds. Data: /users 45ms, /products 120ms, /search 340ms, /checkout 89ms, /analytics 560ms, /auth 23ms. Sort descending. Highlight endpoints above 200ms with a red threshold line."`,
};
