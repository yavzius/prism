import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "architecture",
  title: "System architecture diagrams",
  content: `STYLE: Clean flat vector, white background, bounded regions with subtle fills, directional arrows, high-contrast labels, no 3D effects.

WHEN TO USE: Visualizing system components, their boundaries, and how they communicate. Best for showing the big picture of a system to orient viewers before diving into details.

COGNITIVE PRINCIPLES:
- Group related components into bounded regions — spatial proximity signals relatedness (Gestalt)
- Use directional arrows for data/control flow — label each with protocol or data type
- Limit to 5-7 top-level components — exceeding this forces the viewer to chunk mentally
- Color-code by concern (blue compute, green storage, orange external) — pre-attentive color is instant
- Place the entry point (user/client) at top-left — follows natural reading direction

PROMPT STRUCTURE:
"Architecture diagram of [system]. Components: [list]. Show [data/request] flow from [source] to [sink]. Label connections with [protocols]. Group by [concern]."

EXAMPLE:
"Architecture diagram of a real-time chat app. Components: React client, WebSocket gateway, message service, PostgreSQL, Redis pub/sub, S3 uploads. Show message flow from client through gateway to database and back via pub/sub. Label connections with WebSocket, gRPC, SQL. Group by frontend, backend services, data layer."`,
};
