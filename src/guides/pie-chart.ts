import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "pie-chart",
  title: "Proportional breakdowns",
  content: `STYLE: Clean flat slices, white background, labels with percentages on each slice, high-contrast adjacent colors, no 3D, no explosion effects. Results are illustrative.

WHEN TO USE: Showing parts of a whole — ONLY when proportions relative to 100% are the insight. Use sparingly; bar charts are often clearer.

COGNITIVE PRINCIPLES:
- Maximum 6 slices — group small values into "Other" (humans can't compare small angles)
- Label each slice with name AND percentage directly on it — eliminates legend scanning
- Start largest slice at 12 o'clock — provides a consistent visual anchor
- High-contrast colors for adjacent slices — prevents merge perception
- Consider donut variant with key total in center — adds data without cost

PROMPT STRUCTURE:
"Pie chart of [whole]. Slices: [category: percentage pairs]. Highlight [driver]. Show total [value] in center as donut."

EXAMPLE:
"Pie chart of cloud cost breakdown Q4. Slices: Compute 42%, Storage 18%, Database 15%, Networking 12%, ML services 8%, Other 5%. Highlight Compute as largest driver. Show total $47K/month in center as donut."`,
};
