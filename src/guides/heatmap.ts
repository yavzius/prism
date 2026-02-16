import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "heatmap",
  title: "Density and intensity maps",
  content: `Create a heatmap with the immediacy of GitHub's contribution graph or a Bloomberg risk matrix — a dense grid where color is the data and pattern emerges from repetition. No decoration. Just density as revelation.

CANVAS: A warm off-white (#F3F0EB) with the faintest texture. The grid sits with generous margins — at least a third of the canvas is breathing room. The heatmap should feel like a considered object on a surface, not a spreadsheet filling a screen.

THE GRID: Rounded-rectangle cells with slim warm-white gaps between them. The gaps matter — they give each cell its own identity and prevent the grid from collapsing into a blurred mass. The grid should feel tight but not cramped.

COLOR SCALE: A single sequential gradient, chosen to match the data's meaning. For neutral metrics — activity, frequency, count — use a cool progression: pale warm gray at the floor, through a confident mid-blue (#3B72A4), landing at a deep navy (#1A2E44) for peak values. For intensity or urgency data — load, risk, heat — use a warm scale: pale cream through warm amber (#D4933C) to a deep burnt sienna (#8C3A1A). Avoid the rainbow trap. One hue family, varying in saturation and lightness. The gradient should feel continuous and natural, like a temperature shift.

OUTLIER TREATMENT: For cells with extreme values — the top five to ten percent — overlay the numeric value directly inside the cell in contrasting text. This makes hotspots immediately actionable without requiring the viewer to decode color back to number. For everything else, the color alone carries the data.

LEGEND: A compact horizontal gradient bar below the grid, showing min and max labels at each end and a midpoint reference. Centered, understated, occupying less than half the grid width.

TYPOGRAPHY: The chart title sits top-left in a bold face with character. Axis labels along the top and left edge in small, muted type — readable but receding. The grid is the star; everything else supports it.

The overall feel: the moment when pattern emerges from noise.`,
};
