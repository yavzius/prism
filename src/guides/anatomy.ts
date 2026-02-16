import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "anatomy",
  title: "Labeled anatomy and breakdowns",
  content: `Create an anatomy diagram with the precision of a Dyson product teardown or an Apple component breakdown — the kind of labeled cutaway you'd find in a premium technical manual where every callout feels like it was placed by an engineer who also studied typography.

CANVAS: A warm off-white surface (#FAFAF7) with the faintest paper grain. Not sterile, not cold — the warmth of a well-printed reference book. The subject needs room to breathe, so a third of the canvas stays empty.

SUBJECT: The subject commands the center, rendered large enough to reveal internal structure. For physical objects, show a clean cross-section, cutaway, or exploded view. For abstract subjects — data structures, protocols, system architectures — render as a structured diagram with clear boundaries and subtle fills differentiating regions. The subject itself uses naturalistic or gently stylized colors appropriate to what it is.

ANNOTATION SYSTEM: All callout elements — leader lines, number badges, highlight outlines — share a single accent color. A confident teal (#0D9488) or deep blue (#2563EB) works well, but pick one and commit. Leader lines are thin and precise, routing with gentle single-bend paths from a small filled dot on the component out to the label in the margin. No crossing, no tangling. The lines have the quiet confidence of hand-drafted technical illustration.

CALLOUTS: Each callout pairs a small numbered badge (filled circle in the accent color, white number) with a bold component name and a single-line description in muted gray beneath it. Arrange them vertically in the margins, evenly spaced on an invisible grid — left-side labels right-aligned toward the subject, right-side mirrored. Five to eight callouts total. More than eight gets crowded; combine minor components rather than cramming.

TYPOGRAPHY: The title sits in the top-left corner — bold, dark, and authoritative. Component names are bold and crisp in dark charcoal (#1F2937). Descriptions below each name are lighter weight, smaller, in a warm gray that recedes. Number badges use the accent color with white numerals. The hierarchy is immediate: title, then subject, then callouts scanned in number order.

OPTIONAL ELEMENTS: Dashed lines for hidden or internal boundaries. A small legend in the bottom corner if color-coded regions are used. Dimension lines or a scale indicator if physical scale matters. These earn their space or they don't appear.

The overall sensibility: someone who deeply understands this subject made this visible. Every line is deliberate. Every label is earned. The diagram teaches without lecturing.`,
};
