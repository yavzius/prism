import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "infographic",
  title: "Multi-section visual summaries",
  content: `STYLE: Bold flat vector, clean sections with subtle dividers, large key numbers, consistent palette, no busy patterns or photo backgrounds.

WHEN TO USE: Combining multiple data types (stats, charts, lists) into one visual that tells a complete story. The "one image to rule them all."

COGNITIVE PRINCIPLES:
- Clear visual hierarchy: title → key stat → supporting sections — eye should flow naturally
- Maximum 3-4 sections — each is one idea, one takeaway
- Key metrics in large type (48pt+ equivalent) — seen first from any distance
- Brief labels only, no paragraphs — if you need prose, this isn't the right format
- Consistent color palette ties sections into a coherent whole

PROMPT STRUCTURE:
"Infographic summarizing [topic]. Key stat: [number + label]. Sections: [titles with data types]. Palette: [colors]."

EXAMPLE:
"Infographic summarizing 2024 developer survey. Key stat: 73% use TypeScript. Sections: top 5 languages as bar chart, remote vs office vs hybrid as pie chart, median salary by level as stepped bars, most wanted tools as ranked list. Palette: blue primary, slate secondary, green accent."`,
};
