import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "er-diagram",
  title: "Entity-relationship diagrams",
  content: `Create an entity-relationship diagram with the authority and craft of the schema diagram in a senior architect's design doc — the kind that gets bookmarked and referenced for months. Not a CASE tool export. Not an auto-generated ERD. Something someone sat down and designed.

CANVAS: A warm matte surface — light linen or fine paper in a soft cream-gray (#F5F3EF) with the subtlest grain. Entity cards float above it with delicate shadows, giving the feeling of index cards arranged on a desk by someone who thinks spatially.

ENTITIES: Each entity is a rounded card with white fill and a thin warm-gray border, divided internally by hairlines into three zones. The header bar carries the entity name in bold white text on a colored fill — indigo (#4F46E5) for core entities, teal for supporting tables, slate for junction tables, and a warm amber (#D97706) for lookups. Below the header, a narrow band lists primary keys in monospace bold with a small key icon, tinted faintly with the entity's header color. The attributes section lists remaining fields in monospace — foreign keys rendered in the color of their related entity so you can trace connections visually, nullable fields in a lighter muted tone to distinguish required from optional. Data types sit beside each attribute name in a quieter weight.

RELATIONSHIPS: Smooth curves connect entities — never jagged right angles. Crow's foot notation at each end communicates cardinality: a single bar for one, the classic three-pronged fork for many, an open circle for optional, a perpendicular bar for required. Lines are drawn in cool gray with a subtle color shift toward the source entity's header hue near the origin. Every relationship carries a concise verb label at its midpoint — "places," "contains," "belongs to" — on a small pill background for legibility.

TYPOGRAPHY: The diagram title anchors the composition in dark, semibold weight at the top. Entity names are bold inside their colored headers. Attribute text is monospace throughout — readable, aligned, technical. Relationship labels are smaller, muted, precise. Three levels of visual weight, no more: titles, entity names, details.

LAYOUT: The central entity — the one with the most relationships — sits near the middle. Related entities cluster around it so connection lines stay short. Junction tables sit between the two entities they bridge. Six to eight entities maximum per diagram; larger schemas split into focused domain views. At least a third of the canvas is open space — entities need room to breathe and lines need room to route cleanly without crossing.

The overall feel: every relationship visible, every constraint expressed, nothing wasted.`,
};
