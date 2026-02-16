import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "sequence",
  title: "Sequence and interaction diagrams",
  content: `Create a sequence diagram with the precision and polish of Stripe's API documentation or a well-illustrated RFC — technical clarity that doesn't sacrifice visual craft.

CANVAS: A warm, matte surface — not pure white, but a soft parchment tone (#F7F5F2) with the faintest vertical rhythm of hairlines behind the lifelines. The grid gives structure without noise, like ruled paper seen from a distance.

ACTORS: Each participant sits at the top inside a rounded rectangle with a confident fill color and white text. Keep the palette disciplined — a blue, an emerald, an amber, a violet, and a slate, each distinct enough to trace visually across the full diagram. No more than six actors; beyond that, split the diagram. Below each header, a thin dashed lifeline in cool gray descends the full height. When an actor is actively processing, a narrow activation bar appears on its lifeline — filled at low opacity in the actor's color with a thin border of the full hue. This makes it immediately clear who is working at any moment.

MESSAGES: Arrow semantics carry meaning. Synchronous calls are solid lines with filled arrowheads, stroked in the sender's accent color. Asynchronous calls are dashed with open arrowheads. Return values are thin, quiet dashed lines pointing back — visually subordinate to the calls that triggered them. Every arrow has a label, always — no silent messages. Labels sit on small pill backgrounds so they stay legible where lines cross. The happy path flows straight down the center of the diagram; error or alternate flows branch to the right, annotated with a soft warm-red (#F87171) accent box.

TYPOGRAPHY: The diagram title anchors the top left in a dark, semibold weight. Actor names are bold inside their colored headers. Message labels are medium weight, placed just above or below the arrow line — concise, technical, readable at a glance. Annotations and notes sit in rounded boxes with a light warm-yellow wash and a thin golden border (#F59E0B), positioned beside the relevant lifeline in a smaller italic weight.

LAYOUT: Messages flow strictly top to bottom in chronological order. Consistent vertical spacing between exchanges — enough room for labels to breathe, not so much that the eye loses the thread. Actors spread evenly across the horizontal axis. When the sequence has distinct phases — authentication, data fetch, cleanup — separate them with thin horizontal dashed lines spanning the full width, labeled in small caps on the left margin. A third of the canvas is white space. Dense information, open composition.

The overall feel: a conversation between systems, made legible and almost elegant.`,
};
