import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "concept-map",
  title: "Concept and relationship maps",
  content: `An O'Reilly architecture diagram redesigned by an editorial illustrator — relationships as narrative, not a raw graph dump. Every node placement, connection, and color choice should communicate meaning. The kind of figure you'd pause on in a well-made technical book.

CANVAS: A soft warm gray (#F5F3F0) with a faint grid visible at very low opacity — suggesting precision without imposing rigidity. The surface has warmth; it feels like quality paper, not a screen.

NODES: Softly rounded rectangles with subtle fills and thin borders. The central concept is the largest node on the canvas — roughly half again the size of everything else — with the boldest border, the most saturated color, and a gentle shadow that establishes it as the gravitational center. Primary concepts orbit in a first ring at consistent radius, each wearing a cluster color: a light tint fill with a deeper border shade. Two or three cluster colors maximum — blue for one family, a warm green for another, amber for a third. Secondary concepts extend further out, attached to their parent primaries, smaller and lighter with each step from center. Ten to twelve total nodes maximum. Combine minor concepts rather than cluttering.

CONNECTIONS: Every line carries a relationship label — a short verb phrase like "enables," "depends on," or "produces" — displayed on a small white pill badge at the curve's midpoint. Lines are thin and use gentle bezier curves that arc slightly to avoid overlapping. Where connections must cross, one line visually bridges over the other. Connection lines stay a neutral mid-gray so they recede behind the nodes. No unlabeled connections — if two concepts are linked, the diagram says how.

LAYOUT: Radial-organic composition. The central concept commands the middle. Primary concepts orbit. Secondary concepts fan outward from their primaries. The overall shape should feel balanced but not rigidly symmetric — slight asymmetry reads as organic and intentional. The eye starts at the center and traces outward along any branch to follow a specific relationship thread.

TYPOGRAPHY: The central label is bold and dark — the diagram's headline. Primary labels are medium-weight, sized to read clearly. Relationship labels on edges are small and muted, sitting on their white pills. Optional cluster labels in small caps hover near the periphery of their group, barely there. Thirty percent of the canvas is breathing room.

The overall feel: a map of ideas you can trace with your finger.`,
};
