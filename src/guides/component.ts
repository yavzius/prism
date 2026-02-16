import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "component",
  title: "UI component design sheets",
  content: `A component specification sheet with the precision of Shopify Polaris documentation or Apple's Human Interface Guidelines — systematic, considered, the kind of reference that makes a developer reach for their editor. One UI component, every state, every variant, laid out on a structured grid that treats design as engineering.

CANVAS: A warm off-white surface (#F7F6F3) with a faint dot grid at low opacity to convey alignment rigor without sterility. The layout follows a bento-style composition: a large hero cell at top showing the component at double scale in its default state, with smaller cells below arranged in neat rows for each variant category. Generous gutters between cells. The whole thing breathes.

HEADER: The component name in bold dark type (#1A1A1A), top-left, with a single-line description in muted gray beneath it. Top-right: a compact color legend — three or four small circles with their hex labels. A thin warm-gray divider separates the header from the grid.

STATE VARIANTS: A horizontal row showing the component in each interaction state, left to right in flow order — default, hover, active, focused, disabled, loading, error. Each sits in a clearly bounded cell with a small uppercase label centered below in muted type. The error state carries a warm red border. The disabled state drops to low opacity. The focused state shows a visible accent-colored ring. These read as a story: the component's full behavioral range at a glance.

SIZE VARIANTS: Below the states, the component at small, medium, and large scales, vertically centered so the proportional difference is immediately obvious. Each labeled with its size name.

ANATOMY CALLOUT: One cell holds an enlarged version of the component with thin leader lines pointing to each sub-element — icon area, label, padding zones, border radius, shadow offset. Callout labels in small monospace type with the actual values. Leader lines are thin and warm gray with small circular endpoints. This is the cell a developer photographs and pins above their monitor.

COLOR AND TYPE SPEC: A compact reference block in the bottom-right showing fill colors for each state as small swatches, the type styles used, and spacing tokens as labeled bars. Dense but scannable.

VISUAL STYLE: The component itself is styled in a confident neutral palette — one accent color (a clear blue or a saturated violet) against warm grays. Rounded corners, subtle shadows, restrained everywhere. The overall feel: a spec sheet that makes a developer excited to build.`,
};
