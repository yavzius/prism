import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "roadmap",
  title: "Project and product roadmaps",
  content: `STYLE: Horizontal timeline with parallel swim lanes, white background, phase markers, color-coded workstreams, milestone diamonds, connecting dependency lines.

WHEN TO USE: Planning timelines with multiple parallel workstreams — when the viewer needs to see what's happening when, across teams or tracks. Different from timeline (which shows events, not concurrent work).

COGNITIVE PRINCIPLES:
- Horizontal time axis with labeled intervals — time flows left-to-right
- Parallel swim lanes for workstreams — shows concurrency and resource allocation
- Color-code by team or workstream — enables selective scanning
- Milestone diamonds at key dates — distinct shape draws attention to commitments
- Show dependencies with lines — reveals which delays cascade

PROMPT STRUCTURE:
"Roadmap for [project] over [timeframe]. Workstreams: [list with phases]. Milestones: [list with dates]. Dependencies: [list]. Current: [now marker]."

EXAMPLE:
"Roadmap for v2.0 launch, Q1-Q2. Workstreams: Backend (auth rewrite Jan-Feb, API migration Mar, perf tuning Apr), Frontend (design system Feb, components Mar-Apr, integration May), Infra (CI/CD Jan, staging Feb, prod deploy Jun). Milestones: design system Mar 1, API freeze Apr 15, beta May 1, GA Jun 15. Dependencies: frontend blocked by design system, integration blocked by API. Current: Feb 15."`,
};
