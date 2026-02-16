import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "state-diagram",
  title: "State machine diagrams",
  content: `A technical illustration from a well-edited systems design book — O'Reilly at its best, or the diagrams in Designing Data-Intensive Applications. Not a whiteboard sketch, not a UML export. A state machine drawn with editorial care.

CANVAS: A warm parchment surface — think unbleached paper (#F5F3EF) with the faintest grain. States sit as softly rounded rectangles with barely-there shadows that lift them off the page without shouting.

STATES: Color carries semantic weight. Active states wear a cool slate left-border on white fill. Success states get an emerald (#10B981) left-border with the palest green wash behind them. Error states use a warm rose (#E8636F) border with a blush fill. Waiting states take amber. The initial state is a small filled dark circle — the universal "start here" marker — and final states carry a double-circle glyph. State names are set in a confident semibold; descriptions sit below in a smaller, muted weight. Every state card contains exactly one idea: name above, brief description below, nothing else.

TRANSITIONS: Smooth curved arrows in a quiet mid-gray, with small filled arrowheads. Error paths use dashed strokes in a muted red so they read as exceptional without screaming. Every arrow carries a label — the trigger event in medium-weight text, with optional guard conditions in italic brackets and actions after a slash. Labels float on small white pill backgrounds so they stay legible against any crossing. Self-transitions loop gracefully above their state. No silent arrows — if it transitions, it says why.

LAYOUT: The happy path runs as a clear spine left-to-right or top-to-bottom through the diagram's center. This is the reader's highway. Error and exceptional states branch off to the side — visible but out of the main current. Related states can cluster inside a faint dashed enclosure with a small group label. Keep the diagram to eight or ten states maximum; larger machines need hierarchical decomposition, not more boxes.

TYPOGRAPHY: The diagram title anchors the top in a bold, dark weight — the first thing the eye finds. State names are semibold inside their cards. Transition labels are smaller and lighter, receding behind the structural rhythm of the nodes. Numbers and codes use a monospace face for alignment.

Thirty percent of the canvas is breathing room. Arrows reroute rather than cross. A small color legend in the corner maps border colors to state categories. The overall feel: the machine's behavior, made human-readable.`,
};
