import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "quadrant",
  title: "2x2 decision matrices",
  content: `STYLE: Clean 2x2 grid, white background, labeled axes with direction arrows, distinct quadrant colors, items as labeled dots or icons.

WHEN TO USE: Making decisions by mapping items across two dimensions — effort/impact, urgency/importance, risk/reward. Categorizing things into four actionable buckets.

COGNITIVE PRINCIPLES:
- Label both axes with direction (low→high) — axes without labels are meaningless
- Name each quadrant with an action verb ("Do first," "Schedule," "Delegate," "Drop") — makes the framework actionable
- Plot items as labeled points — position IS the insight
- Subtle quadrant background colors (green/yellow/orange/red) — too saturated overwhelms the data
- Under 5 items per quadrant — overcrowded quadrants defeat the purpose

PROMPT STRUCTURE:
"Quadrant for [decision]. X-axis: [dimension]. Y-axis: [dimension]. Quadrant labels: [four names]. Items: [list with positions]."

EXAMPLE:
"Quadrant for feature prioritization. X-axis: effort (low→high). Y-axis: user impact (low→high). Quadrants: Quick wins (low effort, high impact), Big bets (high effort, high impact), Fill-ins (low effort, low impact), Money pits (high effort, low impact). Items: dark mode (quick win), auth rewrite (big bet), rename button (fill-in), DB migration (money pit)."`,
};
