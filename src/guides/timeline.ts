import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "timeline",
  title: "Chronological progressions",
  content: `STYLE: Clean horizontal or vertical line, white background, evenly spaced markers, category-coded colors, date labels on every event, no 3D.

WHEN TO USE: Showing events, milestones, or evolution over time where chronological context matters for understanding.

COGNITIVE PRINCIPLES:
- Horizontal for 5-8 events, vertical for longer — prevents cramped labels
- Date labels on every event — visual spacing does NOT convey time proportionally
- Color-code categories (releases, incidents, milestones) — enables selective attention
- Add a "now" marker if the timeline extends to present — orients the viewer in time
- One-line descriptions under each event — forces concision, reduces reading load

PROMPT STRUCTURE:
"Timeline of [subject] from [start] to [end]. Events: [list with dates]. Highlight [key moments]. Categories: [types with colors]."

EXAMPLE:
"Timeline of JavaScript frameworks from 2010 to 2025. Events: Backbone 2010, Angular 2010, React 2013, Vue 2014, Svelte 2016, Next.js 2016, Solid 2021, Qwik 2023. Highlight React and Next.js as inflection points. Categories: full frameworks, view libraries, meta-frameworks."`,
};
