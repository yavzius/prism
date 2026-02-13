import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "hierarchy",
  title: "Tree structures and org charts",
  content: `STYLE: Clean tree, white background, connecting lines (not arrows), level-coded colors, consistent node sizing, no decorative elements.

WHEN TO USE: Showing parent-child relationships, inheritance, or organizational structures where containment and nesting are the primary relationships.

COGNITIVE PRINCIPLES:
- Root at top, leaves at bottom — matches "general to specific" mental model
- Connecting lines, not arrows — arrows imply flow, lines imply belonging
- Color-code by level or category — helps orient within the depth
- Limit visible depth to 4 levels — deeper needs collapsing or a different visual
- Annotate collapsed groups with counts ("[+12 more]") — signals hidden complexity

PROMPT STRUCTURE:
"Hierarchy of [structure]. Root: [top node]. Levels: [describe each]. Highlight [branches]. Collapse [large groups]."

EXAMPLE:
"Hierarchy of a React component tree for e-commerce. Root: App. Level 1: Layout, AuthProvider, CartProvider. Under Layout: Header, MainContent, Footer. Under MainContent: ProductGrid, ProductDetail, Checkout. Highlight Checkout branch: CheckoutForm, PaymentStep, ConfirmationStep. Collapse ProductGrid children as [+15 cards]."`,
};
