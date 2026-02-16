import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "architecture",
  title: "System architecture diagrams",
  content: `Create a system architecture diagram with the visual quality of a senior engineer's conference talk slide or a well-designed technical blog post on the Vercel or Cloudflare engineering blog.

CANVAS: Light warm gray (#F3F1ED) with a faint dot grid at 4% opacity — enough to suggest precision without visual noise. The subtle texture prevents the flat-digital look.

COMPONENTS: Each system component is a rounded rectangle card (10px radius) with a clean white fill, thin border (#E0DDD6), and the lightest shadow. Inside each card: a small monoline icon representing the component type (database cylinder, server box, cloud shape, message queue, etc.) in a muted color, the component name in 14px medium weight, and a brief role description in 11px muted text beneath.

GROUPING: Related components cluster inside larger bounded regions — lightweight dashed borders with a label in the top-left corner ("Client Layer", "Application", "Data", "External"). These regions have no fill or an extremely subtle warm tint. Group arrangement flows top-to-bottom: client at top, services in the middle, data at the bottom.

CONNECTIONS: Smooth curved lines (not right-angle connectors) with small arrowheads. Each line is labeled at its midpoint with the protocol or data type in 10px monospace on a tiny white pill background ("REST", "gRPC", "SQL", "WebSocket", "pub/sub"). Lines use a muted color-coding system:
- Request/response flows: warm charcoal (#4A4A4A)
- Async/event flows: muted teal (#5B9A8B)
- Data writes: muted blue (#6B8CAE)
Lines do not cross where avoidable. Where they must, one line dips under the other with a small bridge gap.

COLOR: Restrained. The diagram reads primarily in warm grays and charcoal. Each architectural layer gets one subtle accent — just enough to visually separate layers without turning it into a rainbow. A small legend in the bottom-right maps these accents.

TYPOGRAPHY: Title in 24px medium weight, top-left, dark. Component names in 14px. Descriptions in 11px muted. Protocol labels in 10px monospace. All text perfectly legible.

COMPOSITION: Maximum 6-8 top-level components. 30% breathing room. The viewer should understand the system's structure in under 10 seconds. Every arrow has a label. Every component has a purpose.

The overall feel: the architectural clarity of a well-drawn whiteboard sketch, rendered with the polish of a published technical diagram.`,
};
