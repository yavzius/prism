import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "funnel",
  title: "Conversion and pipeline funnels",
  content: `Create a conversion funnel with the analytical clarity of Amplitude's product dashboards or a McKinsey slide on pipeline attrition — the story of progressive narrowing, where each stage is tighter, more focused, more valuable than the last.

CANVAS: A warm off-white (#F4F1EC) with the faintest grain. The funnel sits centered with generous margins. The right side is reserved for drop-off annotations; the left breathes. About a third of the canvas is open space.

THE FUNNEL: Vertically stacked horizontal trapezoid segments, widest at the top and narrowing proportionally toward the bottom. Each segment is a distinct stage, separated by slim warm-white gaps. The color progression shifts from a cool, muted tone at the wide top to a deep, saturated tone at the narrow bottom — think pale stone at the entry through a confident mid-blue (#3568A6) to a rich deep indigo (#1E2952) at the final stage. The narrowing is proportional to the actual drop-off, so the shape itself encodes the data. No decorative gradients on individual segments — solid fills that darken as you descend.

LABELS: Each segment carries two pieces of information: the stage name on the left side and the count or percentage on the right. Light text on dark segments, dark text on the lighter top stages. Between each pair of adjacent stages, a small floating badge shows the drop-off rate — a compact pill shape with a warm rose tint and muted red text (something like "−68%"). These badges sit to the right of the funnel, connected by thin dotted lines. They are the editorial layer — they tell the story of where users fall away.

THE PAYOFF: Below the final stage, the overall conversion rate in a bold accent green (#2A8B5E). This is the number the viewer came for. Give it prominence and breathing room.

TYPOGRAPHY: The funnel title sits top-left in a bold face with character. Stage labels inside segments are clean and readable. Drop-off annotations are compact. The conversion rate at the bottom is the largest number on the canvas.

Maximum six stages to keep the bottom segment readable. The overall feel: you feel the attrition — each step tighter, more focused, more valuable.`,
};
