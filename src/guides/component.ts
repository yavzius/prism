import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "component",
  title: "UI component design and states",
  content: `STYLE: Isolated components on clean background, all states shown (default, hover, active, disabled, error), consistent spacing, labeled state variants.

WHEN TO USE: Designing or documenting a single UI component across its states and variations — buttons, cards, forms, modals, navigation elements.

COGNITIVE PRINCIPLES:
- Show all states in one view — prevents missing edge cases
- Arrange states in interaction order (default → hover → active → disabled) — tells the interaction story
- Label each state explicitly — "hover" and "active" are visually subtle and easy to confuse
- Consistent sizing across states — size changes suggest importance, misleading for states
- Include spacing and dimension annotations — makes the component implementable

PROMPT STRUCTURE:
"Component design of [element]. States: [list]. Variations: [list]. Style: [aesthetic]. Show [annotations]."

EXAMPLE:
"Component design of a primary action button. States: default, hover, active/pressed, disabled, loading with spinner. Variations: small, medium, large. Style: rounded corners, indigo fill, white text, subtle shadow on hover. Show padding and border-radius annotations."`,
};
