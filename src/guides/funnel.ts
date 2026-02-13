import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "funnel",
  title: "Conversion and pipeline funnels",
  content: `STYLE: Tapered funnel (wide top, narrow bottom), white background, labeled stages with counts, color gradient light-to-dark as funnel narrows, drop-off annotations.

WHEN TO USE: Showing progressive narrowing — conversion pipelines, recruitment, CI/CD stages — where drop-off at each stage is the key insight.

COGNITIVE PRINCIPLES:
- Width represents volume — the visual metaphor is immediate and intuitive
- Label each stage with name AND metric — "Visited: 10,000" not just "Visited"
- Show drop-off rates between stages — this is the actionable insight
- Color gradient light (top) to dark (bottom) — reinforces narrowing progression
- Maximum 6-7 stages — more makes the funnel too thin to label at bottom

PROMPT STRUCTURE:
"Funnel showing [process]. Stages: [list with counts/percentages]. Highlight [biggest drop-off]. Show overall conversion [rate]."

EXAMPLE:
"Funnel showing SaaS signup conversion. Stages: Landing visits 10,000, Signup page 3,200 (32%), Email verified 2,400 (75%), Onboarding started 1,800 (75%), First project 900 (50%), Paid 180 (20%). Highlight biggest drop-off between landing and signup. Overall conversion 1.8%."`,
};
