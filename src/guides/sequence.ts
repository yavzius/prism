import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "sequence",
  title: "Step-by-step sequences",
  content: `STYLE: Numbered steps with arrow connectors, white background, color-coded actors, brief labels, horizontal for 3-5 steps, vertical for 6+.

WHEN TO USE: Showing ordered steps where the viewer needs both the order and what happens at each step. Unlike flow (which branches), this is a straight path.

COGNITIVE PRINCIPLES:
- Number every step prominently — gives progress tracking and reference points
- Horizontal for short, vertical for long — prevents cramped labels
- Arrow connectors between steps — reinforces directionality
- 3-5 word labels with optional subtitle — forces clarity
- Color-code by actor if multi-party — enables tracking "who does what"

PROMPT STRUCTURE:
"Sequence showing [process] in [N] steps. Steps: [numbered list]. Actors: [list with colors]. Highlight [critical step]."

EXAMPLE:
"Sequence showing OAuth 2.0 auth code flow in 6 steps. Steps: 1. User clicks login, 2. Redirect to auth server, 3. User grants permission, 4. Server returns code, 5. App exchanges code for token, 6. App accesses resource. Actors: User (blue), App (green), Auth Server (orange). Highlight step 5 as security-critical."`,
};
