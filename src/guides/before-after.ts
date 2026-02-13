import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "before-after",
  title: "Transformation comparisons",
  content: `STYLE: Clean split layout (left/right or top/bottom), white background, matching structure in both halves, accent color on changes, gray for unchanged, annotation between halves.

WHEN TO USE: Showing a transformation — refactoring, migration, redesign — where the viewer needs to see what changed and by how much.

COGNITIVE PRINCIPLES:
- Identical structure in both halves — differences pop only when the frame is constant
- Accent color on what changed, gray for unchanged — directs attention to the delta
- "Before" on left/top, "After" on right/bottom — follows reading direction and time convention
- Brief annotation between halves naming the key change — saves the viewer from inferring it
- Quantitative metrics when available — "450ms → 12ms" is more powerful than "faster"

PROMPT STRUCTURE:
"Before/after of [subject]. Before: [state]. After: [state]. Key change: [what]. Metrics: [before → after]."

EXAMPLE:
"Before/after of a database query refactoring. Before: 3 sequential queries with N+1 problem, 450ms. After: single query with JOINs, 12ms. Key change: N+1 replaced with eager loading. Metrics: 450ms → 12ms, 52 queries → 1, 3 round trips → 1."`,
};
