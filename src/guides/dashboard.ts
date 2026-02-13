import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "dashboard",
  title: "KPI overview panels",
  content: `STYLE: Card-based panel layout (dark or light), floating sections with subtle shadows, consistent grid, large headline numbers, sparklines or micro-charts within cards.

WHEN TO USE: Creating a multi-metric status board — designed to be scanned, not studied. Different from infographic (which tells a story); a dashboard is a live pulse.

COGNITIVE PRINCIPLES:
- Large headline numbers in each card — primary data is scanned, not read
- Sparklines or micro-charts provide trend context without demanding attention
- Consistent card sizing creates a scannable grid — irregular sizes force prioritization
- Group related metrics spatially — revenue together, usage together
- Semantic color: green positive, red negative, gray neutral — instant status encoding

PROMPT STRUCTURE:
"Dashboard showing [domain]. Metrics: [list with values]. Layout: [grid]. Style: [dark/light]. Include [micro-charts or trends]."

EXAMPLE:
"Dashboard showing SaaS product health. Metrics: MRR $48K (+12%), Active users 3,400 (+8%), Churn 2.1% (-0.3%), Avg session 14m, Support tickets 23 open, Deploys 4/day. Layout: 2x3 card grid. Style: dark mode with card shadows. Include 30-day sparkline trends in each card."`,
};
