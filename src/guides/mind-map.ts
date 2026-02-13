import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "mind-map",
  title: "Brainstorming and idea exploration",
  content: `STYLE: Radial organic layout, white background, central node largest, branches radiating outward with decreasing sizes, color-coded branches, curved connectors.

WHEN TO USE: Brainstorming, exploring ideas, or mapping a domain — when the goal is divergent thinking and seeing the full landscape of a topic.

COGNITIVE PRINCIPLES:
- Central node is the topic — everything radiates from the question being explored
- Branch color = theme — lets the viewer process one theme at a time
- Decreasing node size from center outward — creates hierarchy without numbering
- Curved organic connectors — signals "exploratory, not rigid" (unlike straight-line diagrams)
- Leave visual room to grow — mind maps are inherently incomplete

PROMPT STRUCTURE:
"Mind map exploring [topic]. Central node: [core question]. Branches: [3-5 themes]. Sub-nodes: [details per branch]. Colors: [theme colors]."

EXAMPLE:
"Mind map exploring API design decisions. Central node: API Design. Branches: Auth (JWT, OAuth, API keys), Versioning (URL path, headers, query params), Rate limiting (per-user, per-endpoint, sliding window), Response format (JSON:API, GraphQL, REST), Errors (HTTP codes, error objects, retry headers). Colors: blue auth, green versioning, orange rate limiting, purple format, red errors."`,
};
