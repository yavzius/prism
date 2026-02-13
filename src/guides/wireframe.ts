import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "wireframe",
  title: "Low-fidelity UI layouts",
  content: `STYLE: Grayscale sketch, light gray background, placeholder boxes for images, wavy lines for text, clean layout grid, no color, no real content — structure only.

WHEN TO USE: Exploring UI layout and information architecture before committing to visual design. Shows WHAT goes WHERE without getting distracted by aesthetics.

COGNITIVE PRINCIPLES:
- Grayscale only — color triggers aesthetic judgment, which is premature at this stage
- Placeholder shapes: boxes for images, lines for text, rectangles for buttons — signals "structure, not design"
- Show the grid and spacing system — makes layout logic visible and debatable
- Annotate interactive elements (clickable, scrollable, expandable) — communicates behavior invisible in static images
- Include device frame if relevant — anchors viewport assumptions

PROMPT STRUCTURE:
"Wireframe of [screen/page]. Layout: [structure]. Sections: [list top to bottom]. Interactive elements: [list]. Device: [viewport]."

EXAMPLE:
"Wireframe of a SaaS dashboard. Layout: sidebar nav left, main content right. Sections: top bar with search and avatar, metrics row with 4 stat cards, data table with filters, pagination. Interactive: sidebar collapsible, table rows clickable, filter dropdowns. Device: desktop 1440px."`,
};
