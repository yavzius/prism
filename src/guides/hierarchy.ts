import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "hierarchy",
  title: "Tree and org-chart structures",
  content: `A well-designed org chart in a McKinsey deck or a clean technical taxonomy from a design system's documentation — structure that communicates authority without stiffness.

CANVAS: A warm light surface — not sterile gray, but something with a hint of warmth (#F5F3EF or similar). A faint texture at low opacity keeps it from feeling digital-flat.

NODES: Every node is a floating card with white fill, soft rounded corners, and the gentlest shadow. The root node anchors the diagram: larger than everything else, set in white text on a deep indigo (#312E81) fill, unmistakably the origin. Level-one children are medium cards, each wearing a colored top-border that identifies its branch — one in blue, one in emerald (#10B981), one in violet, one in amber. That branch color propagates downward to all descendants, fading in saturation at each level, so you can trace any leaf back to its family in a glance. Deeper nodes shrink progressively: lighter fills, thinner borders, quieter text. When a node has too many children to show cleanly, collapse the overflow into a single card reading "+N more" in italic.

CONNECTIONS: Straight vertical and horizontal line segments — not arrows. Arrows imply flow; lines imply belonging. A vertical drop from each parent meets a horizontal rail, and from that rail, verticals descend to each child. The classic clean tree connector. Lines are thin and muted, receding behind the cards they connect. Where segments meet, small rounded joints soften the geometry.

TYPOGRAPHY: The diagram title sits top-center in a bold, dark weight — the eye's first stop. The root label is semibold and white against its dark fill. Level-one labels are semibold and dark. Each level below gets progressively lighter and smaller, the hierarchy legible in the type itself. Metadata — role titles, counts, types — appears as a second line inside the card in a quiet muted tone.

LAYOUT: Top-down, rooted at center. Children fan out evenly below their parent. The tree should feel balanced — give wider branches more room rather than cramming them. Four visible depth levels maximum; anything deeper gets collapsed. Generous vertical and horizontal spacing between nodes. Thirty percent of the canvas is breathing room.

The overall feel: structure you can trust at a glance — every node knows its place.`,
};
