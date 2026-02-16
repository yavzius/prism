import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "pie-chart",
  title: "Proportional breakdowns",
  content: `Create a donut chart in the spirit of a Stripe annual report — minimal, precise, with one beautiful insight sitting at its center. Not a pie chart. A donut. The hollow center is the whole point.

CANVAS: A warm, lightly textured off-white (#F5F2ED). The donut occupies the center of the composition at a comfortable scale — roughly half the frame — with ample room for labels to breathe around it. No borders, no framing boxes. The shape defines itself.

THE RING: A generous inner void — the center opening should feel spacious, not pinched. This void is prime real estate: place the total value or key metric there in bold type with a one-word descriptor beneath it. This center label is the anchor that gives every segment its meaning. The ring itself has clean separation between segments — thin warm-white gaps that let each slice stand alone.

COLOR: A curated palette of four to six tones that avoid adjacent clashes. Lead with a deep, confident anchor — charcoal blue (#1E3A5F) for the largest segment. Then a warm accent (#D4885C), a muted teal, and a soft stone gray for the remainder. The "Other" catch-all gets the most muted tone. No two adjacent segments should be close in hue. The palette should feel considered, not algorithmic. Segments proceed clockwise from 12 o'clock, largest first.

LABELS: Each segment gets an external label connected by a thin leader line angling outward from the segment midpoint. The label carries the category name and its percentage — name in regular weight, percentage in bold. Position them so they never overlap, fanning outward with enough clearance. The labels are doing real work here; they are not decoration.

TYPOGRAPHY: The chart title sits above or to the side in a bold face with character. The center metric is the largest text element — it should be the first thing the eye finds. Segment labels are compact and precise. Keep everything to six segments maximum; anything under five percent gets grouped.

The overall feel: effortlessly clear — a single glance tells the whole story.`,
};
