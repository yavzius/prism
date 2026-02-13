import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "flow",
  title: "Process and data flow charts",
  content: `STYLE: Clean flat vector, white background, distinct shapes per node type, single-direction flow, labeled arrows, no decorative elements.

WHEN TO USE: Showing step-by-step processes, decision trees, or data transformations where the viewer needs to follow a path from start to finish.

COGNITIVE PRINCIPLES:
- Maintain single-direction flow (top-to-bottom or left-to-right) — mixed directions force mental rotation
- Distinct shapes: diamonds for decisions, rectangles for actions, rounded for start/end — shape is pre-attentive
- Label every arrow with the condition or data being passed — unlabeled arrows create ambiguity
- Limit path splits to 2-3 branches — each branch doubles cognitive tracking cost
- Number steps when sequence matters — gives the viewer a progress anchor

PROMPT STRUCTURE:
"Flowchart showing [process]. Start with [trigger]. Decision points: [list]. End states: [list]. Show [data] at each step."

EXAMPLE:
"Flowchart showing HTTP request lifecycle in a web framework. Start with incoming request. Decision points: route match?, auth required?, authorized?. End states: 200 OK, 404 not found, 401 unauthorized, 403 forbidden. Show request object transformations at each step."`,
};
