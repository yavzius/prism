import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "table",
  title: "Structured data tables",
  content: `STYLE: Clean bordered grid, white background, alternating row shading, bold headers, right-aligned numbers, left-aligned text, conditional highlighting. Results are illustrative.

WHEN TO USE: Presenting structured data where exact values matter and viewers need to look up specific intersections of row and column.

COGNITIVE PRINCIPLES:
- Bold column headers — establishes the frame before data is processed
- Alternating row shading — prevents the eye from drifting across rows (Gestalt continuity)
- Right-align numbers, left-align text — enables decimal alignment for quick comparison
- Limit to 6-8 columns and 10-12 rows — wider or taller tables overwhelm working memory
- Highlight key cells with background color — draws attention to actionable values

PROMPT STRUCTURE:
"Table of [subject]. Columns: [list]. Rows: [list]. Highlight [cells matching condition]. Sort by [column]."

EXAMPLE:
"Table comparing JS bundlers. Columns: Bundler, Build Time, Bundle Size, HMR Speed, Config Complexity, Tree Shaking. Rows: Webpack, Vite, esbuild, Turbopack, Rollup. Highlight build times under 500ms green and over 5s red. Sort by build time ascending."`,
};
