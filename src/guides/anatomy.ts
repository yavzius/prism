import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "anatomy",
  title: "Labeled component breakdowns",
  content: `STYLE: Clean labeled diagram, white background, thin leader lines with dot endpoints, numbered callouts, grouped regions with subtle fills, no decorative elements.

WHEN TO USE: Showing the internal parts of a system, UI, or structure with labeled callouts — when the viewer needs to understand "what's inside this thing."

COGNITIVE PRINCIPLES:
- Subject in center, labels radiating outward — center-out scanning is natural
- Number callouts with brief descriptions — dual encoding (number + text) aids memory
- Group related parts with subtle background fills — spatial grouping signals relatedness
- Keep labels outside the diagram — separation preserves clarity of both label and subject
- Consistent leader line style — visual consistency reduces parsing effort

PROMPT STRUCTURE:
"Anatomy of [subject]. Components: [numbered list with descriptions]. Group by [regions]. Highlight [key component]."

EXAMPLE:
"Anatomy of an HTTP/2 request frame. Components: 1. Length (3 bytes) — payload size, 2. Type (1 byte) — DATA/HEADERS/SETTINGS, 3. Flags (1 byte) — END_STREAM/END_HEADERS, 4. Reserved bit, 5. Stream ID (31 bits) — multiplexing key, 6. Payload (variable). Group by header region and payload. Highlight Stream ID."`,
};
