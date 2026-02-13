import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "er-diagram",
  title: "Entity relationship diagrams",
  content: `STYLE: Clean box layout, white background, entity boxes with attribute lists, relationship lines with cardinality (1:1, 1:N, M:N), primary keys highlighted, no decorative elements.

WHEN TO USE: Documenting database schema or domain model relationships — when the viewer needs to understand what data exists and how it connects.

COGNITIVE PRINCIPLES:
- Entity boxes with attribute lists — each box is a self-contained unit of understanding
- Relationship lines with cardinality labels — "1:N" conveys the constraint without prose
- Highlight primary keys and foreign keys — these are the connection points viewers trace
- Group related entities spatially — user tables near each other, product tables together
- Limit to 6-8 entities per diagram — larger schemas need multiple focused views

PROMPT STRUCTURE:
"ER diagram of [domain]. Entities: [list with key attributes]. Relationships: [list with cardinality]. Highlight [central entity]."

EXAMPLE:
"ER diagram of an e-commerce platform. Entities: User (id, email, name), Order (id, status, total, created_at), OrderItem (id, quantity, price), Product (id, name, price, stock), Category (id, name). Relationships: User 1:N Orders, Order 1:N OrderItems, Product 1:N OrderItems, Category 1:N Products. Highlight Order as central entity."`,
};
