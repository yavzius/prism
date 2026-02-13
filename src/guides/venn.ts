import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "venn",
  title: "Set overlaps and intersections",
  content: `STYLE: Clean overlapping circles, white background, labeled sections including overlaps, soft distinct colors with visible blending, centered text labels.

WHEN TO USE: Showing set relationships — what's shared, what's unique — when the viewer needs to see commonality and difference between 2-3 groups.

COGNITIVE PRINCIPLES:
- Maximum 3 circles — 4+ overlapping circles become impossible to parse
- Label every region including overlaps — unlabeled intersections waste the visual
- Soft colors that blend visibly in overlaps — the blend color IS information
- Size circles proportionally if possible — visual size should hint at set size
- Place the most interesting overlap centrally — usually the insight

PROMPT STRUCTURE:
"Venn diagram of [groups]. Sets: [list with members]. Overlaps: [shared items]. Unique: [per-set items]. Highlight [key overlap]."

EXAMPLE:
"Venn diagram of frontend framework capabilities. Sets: React (virtual DOM, JSX, huge ecosystem), Vue (reactivity, templates, gentle learning curve), Svelte (compile-time, no runtime, small bundles). Overlaps: React+Vue (component model, state mgmt), Vue+Svelte (reactivity, SFC), React+Svelte (strong typing). All three: component architecture, declarative UI. Highlight center overlap."`,
};
