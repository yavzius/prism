import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "timeline",
  title: "Chronological timelines",
  content: `A vertical timeline with the editorial authority of a New York Times interactive feature or the centerfold of a beautifully produced annual report. Not a project management artifact — a narrative. Each event placed with the same intention a magazine designer brings to a feature spread.

CANVAS: Tall and narrow, portrait orientation, built to be read top-to-bottom. The background is a warm, lightly textured surface — not flat white, but something with the faintest grain, like uncoated stock (#F5F3EF). Generous margins on both sides — at least 15% of the width — so the timeline breathes rather than crowds the edges.

THE SPINE: A thin vertical line in warm gray runs down the center of the canvas, top to bottom. It begins at the top with a small filled circle in the accent color and fades to transparent at the bottom, implying continuation. This is the structural backbone — everything hangs from it.

DATE MARKERS: At each event, a circular node sits centered on the spine. The fill color matches the event's category. For the single most significant event, the node is noticeably larger with a soft radial glow. Date labels sit adjacent to the node in small bold monospace — formatted consistently, like "MAR 2024."

EVENT CARDS: Cards alternate left and right of the spine. Each is a softly rounded rectangle on a warm white surface with the faintest shadow and a colored left border matching its category. A thin connector line links each card back to its spine node. Inside: a small category pill at the top ("LAUNCH", "MILESTONE", "PIVOT"), the event title in semibold dark type, and two to three lines of concise description in muted gray. Optionally, a small inline metric or image thumbnail. Cards maintain consistent width and comfortable internal padding.

RHYTHM AND SPACING: The vertical distance between events reflects the actual time gap — six months gets more space than one month — but with minimum and maximum bounds so the design stays balanced. If the timeline spans distinct phases, horizontal rules with centered era labels in muted uppercase create chapter breaks in the narrative.

COLOR: Three to five muted but identifiable category colors — a warm blue, a forest green, an amber, a violet, a dusty rose. A small color legend at the top maps categories. The palette is restrained enough that the accent colors feel meaningful when they appear.

TYPOGRAPHY: Card titles in a confident dark sans-serif with character. Body text in the same family, lighter weight, warm gray. Date labels in small monospace. The type treatment is editorial and restrained — nothing decorative, nothing generic.

NOW MARKER: If the timeline reaches the present, a horizontal dashed line crosses the full width with a small accent-colored "NOW" pill centered on it. Events below this line carry dashed card borders to signal future or planned status.

The overall feel: history rendered as visual narrative — each moment placed with intention.`,
};
