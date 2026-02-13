import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "state-diagram",
  title: "State machines and lifecycles",
  content: `STYLE: Clean rounded rectangles for states, labeled arrows for transitions, distinct colors for initial/final/error states, white background, no decorative elements.

WHEN TO USE: Documenting state machines, workflow lifecycles, or status progressions — "what states can this be in, and what moves it between them?"

COGNITIVE PRINCIPLES:
- Distinct colors for initial, final, and error states — viewer instantly finds start and end
- Label every transition with the trigger event — "what causes this?" must be explicit
- Arrange to minimize crossing arrows — crossings create visual confusion
- Happy path in a clear line, error states branched to the side — separates normal from exceptional
- Limit to 8-10 states — more needs sub-diagrams or hierarchical decomposition

PROMPT STRUCTURE:
"State diagram of [entity]. States: [list]. Transitions: [from→to with triggers]. Initial: [start]. Final: [ends]. Error: [error states]."

EXAMPLE:
"State diagram of an order lifecycle. States: Draft, Submitted, Processing, Shipped, Delivered, Cancelled, Refunded. Transitions: Draft→Submitted (user confirms), Submitted→Processing (payment clears), Processing→Shipped (dispatched), Shipped→Delivered (carrier confirms), any→Cancelled (before shipped), Delivered→Refunded (return approved). Initial: Draft. Final: Delivered. Error: Cancelled and Refunded in red."`,
};
