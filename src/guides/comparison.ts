import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "comparison",
  title: "Side-by-side comparisons",
  content: `STYLE: Clean grid layout, white background, color-coded cells (green advantage, red disadvantage, gray neutral), bold headers, high-contrast text.

WHEN TO USE: Comparing two or more options across shared criteria where the viewer needs to make a decision or understand trade-offs.

COGNITIVE PRINCIPLES:
- Consistent grid: columns for options, rows for criteria — spatial alignment enables rapid scanning
- Highlight differences with color (green/red) — color is processed before text
- Limit to 5-8 criteria — pick the ones that actually differentiate
- Most important differentiators at the top — viewers read top-down
- Include a verdict row at bottom — gives closure and reduces re-scanning

PROMPT STRUCTURE:
"Comparison of [items]. Criteria: [list]. Highlight: [what matters most]. Include verdict for [context]."

EXAMPLE:
"Comparison of PostgreSQL vs MySQL vs SQLite. Criteria: concurrent writes, JSON support, full-text search, hosting ease, ecosystem. Highlight concurrent writes and JSON as most important. Include verdict for a startup SaaS with 1000 daily users."`,
};
