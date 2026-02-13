import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "mockup",
  title: "High-fidelity UI concepts",
  content: `STYLE: Polished UI design, specific color palette, real typography, realistic component styling, subtle shadows and depth, production-quality fidelity.

WHEN TO USE: Creating a high-fidelity UI concept to evaluate visual design, branding, and the feel of an interface before building it. Design ideation, not documentation.

COGNITIVE PRINCIPLES:
- Clear visual hierarchy through size, weight, and contrast — the most important action should be unmissable
- Consistent spacing rhythm — irregular spacing creates subconscious unease
- 1 primary color + 1 accent + neutrals — more colors fragment attention
- 3 type sizes max (heading, body, caption) — more sizes dilute hierarchy
- White space is not empty — it provides breathing room and separates concerns

PROMPT STRUCTURE:
"UI mockup of [screen]. Style: [aesthetic]. Palette: [colors]. Key elements: [list]. Highlight [primary action]. Typography: [style]."

EXAMPLE:
"UI mockup of a project management task detail panel. Style: modern minimal, dark sidebar with light content. Palette: indigo primary, amber accent, neutral grays. Key elements: task title, assignee avatar, status dropdown, due date, description, subtask checklist, comment thread. Highlight status dropdown as primary action. Typography: clean sans-serif."`,
};
