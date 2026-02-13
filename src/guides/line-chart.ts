import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "line-chart",
  title: "Trend lines and time series",
  content: `STYLE: Clean lines on white background, labeled inflection points, clear axis labels, distinct line styles for multi-series, no decorative fills. Results are illustrative, not data-precise.

WHEN TO USE: Showing change over time or continuous trends where the shape of the curve — growth, decline, inflection — is the primary insight.

COGNITIVE PRINCIPLES:
- X-axis is always time or continuous variable — horizontal time matches mental model
- Label inflection points (peaks, drops, crossovers) — these are what the viewer needs to find
- Max 4 lines — beyond this, lines overlap and become indistinguishable
- Distinct styles (solid, dashed, dotted) alongside color — supports colorblind viewers
- Mark significant events with vertical reference lines — provides causal context

PROMPT STRUCTURE:
"Line chart of [metric] over [period]. Key points: [list]. Events: [list with dates]. Compare with [series]."

EXAMPLE:
"Line chart of monthly active users Jan to Dec 2024. Key points: Jan 1200, Mar 1800, Aug 3100, Dec 4000. Events: Mar 'mobile launch', Aug 'viral moment', Oct 'competitor launch'. Compare with daily active users at ~40% of MAU."`,
};
