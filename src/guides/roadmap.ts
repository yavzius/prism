import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "roadmap",
  title: "Product and project roadmaps",
  content: `A product roadmap that belongs in a board deck and a team wiki simultaneously — Linear's public roadmap meets a McKinsey strategy slide. Polished enough that a VP of Product presents it without apology, detailed enough that an engineering lead actually references it on Monday morning. Horizontal swim lanes, a clear time axis, and color-coded feature cards that make the plan legible at a glance.

CANVAS: Landscape orientation on a warm, barely-tinted surface (#F8F7F4) — not sterile white, but close. A thin warm-gray border frames the composition with generous margins. Top-left: the roadmap title in bold dark type (#1A1A1A) with a subtitle showing the date range. Top-right: a compact color legend mapping workstream colors to labels.

TIME AXIS: A horizontal axis runs below the title block with evenly spaced columns labeled in small semibold uppercase — "JAN", "FEB", "MAR" for monthly, or "Q1", "Q2" for quarterly. Thin vertical gridlines extend down through all swim lanes, faint enough to guide the eye without creating a cage. A "NOW" marker cuts vertically across all lanes: a dashed line in a confident accent blue with a small downward triangle and "TODAY" label at the top.

SWIM LANES: Three to five horizontal lanes, one per workstream. Each lane header sits on the far left — the workstream name in semibold type with a small colored dot. Alternate lanes carry an almost imperceptible warm tint to create visual separation without hard borders. The lanes span the full time axis horizontally.

COLOR: Each workstream gets a distinct, muted-yet-clear hue — a slate blue for engineering, a warm violet for design, an amber for product, a teal for infrastructure. No more than five workstream colors total. The palette reads as coordinated, not carnival.

FEATURE CARDS: Within each lane, features appear as horizontal rounded rectangles positioned along the time axis by their start and end dates. Each card is filled with its workstream color at low opacity, with a solid left border in the full color. The feature name sits inside in small medium-weight dark type. Width corresponds to duration. Completed cards carry a subtle checkmark and slightly muted styling. In-progress cards show a thin accent line along the bottom edge. Upcoming cards use a lighter fill with a dashed border. When work runs concurrent within a lane, cards stack vertically with small gaps — the lane expands to fit.

MILESTONES: Key milestones appear as diamond shapes on the time axis at the top of their relevant lane, filled with the workstream color and outlined in white. Labels above in small bold type: "Beta Launch", "API Freeze", "GA Release." Critical milestones get a larger diamond with a subtle glow treatment.

DEPENDENCIES: Where one feature blocks another, a thin curved arrow connects the end of the blocking card to the start of the blocked card. Gentle bezier curves, not straight lines — they route through whitespace and avoid crossing other cards where possible. Arrowheads are small, clean chevrons.

PHASE MARKERS: If the roadmap has named phases — "Discovery", "Build", "Launch" — they appear as extremely subtle tinted bands spanning the relevant time columns behind everything else. Phase names centered in the band at very low opacity. Just enough color to group time periods visually.

TYPOGRAPHY: The title is bold and dark. Lane headers match their workstream color. Card labels are small and precise. Axis labels are small semibold uppercase in muted tone. Everything is set in a typeface with personality — geometric, slightly warm, not the default. The type hierarchy creates three distinct levels of reading: scan the lanes, read the cards, study the details.

The overall feel: the plan made visible — confidence without rigidity.`,
};
