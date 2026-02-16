import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "line-chart",
  title: "Trend lines and time series",
  content: `Create a line chart that sits at the intersection of Bloomberg's trend views and a New York Times interactive feature — precise enough for a trading desk, expressive enough to tell a story about change over time.

CANVAS: A warm pale surface (#F5F3EF) with subtle texture. The chart occupies the center with generous margins on all sides — at least a quarter of the canvas is breathing room. No harsh borders; the data defines its own space.

LINES: The primary trend is a smooth, confident curve in deep blue (#1A3A5C) with real weight to it — not hairline-thin, not clunky. Beneath it, a soft gradient fill fades from gentle opacity at the line down to transparent at the X-axis, anchoring the data without competing with it. For multiple series, use clearly distinct hues — the deep blue, a warm terracotta (#C4593B), a muted teal — and differentiate further with line styles: solid for primary, dashed for secondary, dotted for tertiary. Never more than three or four series. Directly label each line at its endpoint rather than using a separate legend — this eliminates the scanning cost entirely.

INFLECTION POINTS: Mark peaks, valleys, and crossover moments with small filled circles on the line. Each gets a floating annotation — a compact label with the value, sitting on a tiny rounded card with a warm white fill and the faintest shadow. These callouts are the editorial layer: they tell the reader what matters. If significant events drive the trend, render them as thin vertical dashed lines with a rotated label at the top margin.

GRID AND AXES: Horizontal gridlines in warm gray, barely there — visible enough to read values, invisible enough to disappear when you're following the line. The X-axis carries time labels in small, muted type. The Y-axis is implied by the gridlines alone, no visible axis rule needed.

TYPOGRAPHY: The chart title sits top-left in bold with character — a serif or a distinctive sans. A one-line subtitle beneath it in lighter weight provides context or source attribution. Axis labels stay small and recede. Annotation labels are compact and precise.

The overall feel: the kind of chart that makes a trend feel inevitable.`,
};
