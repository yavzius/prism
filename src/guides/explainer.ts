import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "explainer",
  title: "Visual concept explanations",
  content: `STYLE: Educational illustration, white background, clean sections with labeled callouts, directional arrows for cause-and-effect, numbered steps where applicable, flat vector.

WHEN TO USE: Creating a visual answer to "how does X work?" — combining labeled parts, process steps, and spatial relationships into a single teaching image. This is Gemini's strongest visual mode.

COGNITIVE PRINCIPLES:
- Lead with the central subject, then layer in detail — mirrors how understanding builds
- Combine visual modes: labels for structure, arrows for flow, numbers for sequence — different aspects need different encodings
- Limit scope to ONE concept per image — "how does TLS work?" not "how does the internet work?"
- Add a title or question at the top — frames what the viewer should learn
- Use annotations, not paragraphs — text should label, not explain

PROMPT STRUCTURE:
"Visual explanation of [concept]. Show [structural parts]. Illustrate [process or mechanism]. Label [key terms]. Frame as answer to: [question]."

EXAMPLE:
"Visual explanation of how garbage collection works in a runtime. Show the heap divided into young and old generation. Illustrate objects being allocated, marked as reachable, and swept. Label: root set, mark phase, sweep phase, promotion. Frame as answer to: How does the GC decide what to free?"`,
};
