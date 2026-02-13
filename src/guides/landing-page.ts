import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "landing-page",
  title: "Full-page web design concepts",
  content: `STYLE: Full-page web design, polished and modern, clear section breaks, strong hero area, consistent brand palette, professional typography, responsive-aware layout.

WHEN TO USE: Designing the full vertical scroll experience of a marketing or product page — from hero to footer. Optimizing for both comprehension and conversion.

COGNITIVE PRINCIPLES:
- Follow proven IA: hero → problem → solution → proof → CTA → footer — matches decision psychology
- Hero answers "what is this?" in under 3 seconds — largest type, clearest statement
- One primary CTA per viewport — competing actions create choice paralysis
- Social proof reduces skepticism — logos, testimonials, or metrics build trust
- Progressive disclosure: each scroll reveals the next layer — don't front-load everything

PROMPT STRUCTURE:
"Landing page for [product]. Hero: [headline + subline + CTA]. Sections: [list in order]. Style: [aesthetic]. Palette: [colors]."

EXAMPLE:
"Landing page for a developer CLI tool. Hero: 'Ship faster from the terminal' / 'AI-powered code review in your workflow' / 'Get started free'. Sections: 3-column feature grid with icons, code snippet demo, testimonials from 3 devs, pricing with 2 tiers, FAQ accordion, footer. Style: dark with code-editor aesthetic. Palette: slate background, green accent, white text."`,
};
