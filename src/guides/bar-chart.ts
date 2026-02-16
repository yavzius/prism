import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "bar-chart",
  title: "Bar charts and comparisons",
  content: `Create a bar chart with the quiet authority of The Economist's data pages or a Financial Times Big Read visualization — charts where every element exists because it earns its place, and the data speaks without decoration.

CANVAS: A warm off-white surface (#F4F1EC) with the faintest grain, like good paper stock. Not sterile, not distracting. The chart sits within generous margins — a third of the canvas is breathing room. The whole composition floats on a soft card with barely-there rounded corners and the gentlest shadow.

BARS: Vertical columns, sorted by value descending unless the categories have a natural order. Rounded tops, flat bottoms — polished but not playful. The primary series uses a confident dark tone (#2B3A4E), a deep blue-charcoal that reads as serious without being severe. If one bar needs emphasis — a record, a threshold breach, an outlier — give it a warm red-orange accent (#D4553A). Every other bar stays in the dark neutral. No gradients on the bars themselves. Solid fills. The color difference between the highlighted bar and the rest should feel like a sentence in bold within quiet prose.

GRIDLINES AND AXES: Faint horizontal gridlines in warm gray sit behind the bars — visible enough to read values against, invisible enough to forget they're there. The Y-axis has no visible line; the gridlines do that work. The X-axis is a single clean rule. Axis labels in a small, muted weight. Value labels sit directly above each bar so the reader never needs to trace sideways to the axis — this is the single biggest readability improvement a bar chart can make.

TYPOGRAPHY: The chart title sits top-left in a bold serif or a sans-serif with real character — not generic, not decorative. Below it, a one-line subtitle in lighter weight gives context. Axis labels are small and stay out of the way. Value labels above bars use a monospaced variant so the digits stack cleanly.

Limit to eight bars maximum. If there are remainders, group them into an "Other" bar distinguished by a subtle hatch pattern. If a target or threshold exists, render it as a dashed horizontal line with a small inline label. The overall feel: the quiet authority of a well-edited chart in a financial publication.`,
};
