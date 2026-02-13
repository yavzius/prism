import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "concept-map",
  title: "Relationship networks",
  content: `STYLE: Clean radial or network layout, white background, labeled connections, sized nodes, 2-3 cluster colors, no decorative elements.

WHEN TO USE: Showing how concepts relate non-hierarchically — when relationships between ideas matter more than any order or ranking.

COGNITIVE PRINCIPLES:
- Central concept in the middle — draws the eye to the anchor point first
- Label every connection with the relationship verb — unlabeled links are meaningless
- Size nodes by importance — pre-attentive size processing creates instant hierarchy
- Limit to 2-3 colors for clusters — more colors create visual noise
- Keep total nodes under 12 — dense networks become unreadable; combine minor concepts

PROMPT STRUCTURE:
"Concept map centered on [main concept]. Related: [list]. Relationships: [A relates-to B]. Clusters: [groups with colors]."

EXAMPLE:
"Concept map centered on microservices. Related: API gateway, service mesh, containers, event sourcing, CQRS, circuit breaker, distributed tracing. Relationships: gateway routes-to services, mesh manages communication, event sourcing enables CQRS, circuit breaker protects services. Clusters: infrastructure (blue), patterns (green)."`,
};
