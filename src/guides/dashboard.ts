import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "dashboard",
  title: "Data dashboard layouts",
  content: `Design an analytics dashboard with the visual authority of Bloomberg Terminal meets the polish of Linear's product UI. Dark mode, data-dense, but every pixel considered.

CANVAS: Deep charcoal base (#111116) with subtle warm undertone — not cold blue-black. A barely visible noise texture (2% opacity) prevents the dead-screen look. No radial gradients or glowing orbs in the background — restraint is premium here.

LAYOUT: Left sidebar (narrow, ~220px) with the product name and icon navigation. Main area uses a grid:
- Top strip: 3-4 KPI tiles in a row
- Middle: one large chart card (60% width) + one list/table card (40%)
- Bottom: 2-3 smaller cards

All cards: very subtle border (#ffffff at 6% opacity), 12px rounded corners, no heavy shadows. Cards are distinguished by content, not decoration.

KPI TILES: Each tile shows a metric label (11px uppercase, #6B7280), the number large and white (28px bold), a delta indicator (small pill — muted green for up, muted rose for down), and a tiny sparkline in the bottom corner. Each metric has its own accent color, but desaturated — not neon. Think: dusty blue (#6B8CAE), sage green (#7C9A82), warm amber (#C49A5C), muted violet (#8B7EAE).

MAIN CHART: Area chart or multi-line chart with smooth curves. Line colors match the desaturated accent palette. Area fills fade to transparent. Grid lines at #ffffff06 — barely there. Axis labels in 10px monospace, #5B5F67. Show one frozen tooltip: a small dark card with the exact value, connected to the data point by a thin dashed vertical line.

LIST CARD: Rows with icon, label, value right-aligned. Subtle alternating row tints. Thin bottom borders. Compact, scannable.

TYPOGRAPHY: Monospace for all numbers (gives technical authority). Sans-serif for labels. Three sizes only — 28px for hero metrics, 14px for card titles, 11px for everything else. White for primary data, #6B7280 for secondary.

DATA: Use plausible real-world numbers with appropriate units ($, K, M, %). Real date ranges. Realistic trend directions. This should feel like it's monitoring a live product.

The overall feel: quiet authority. Not flashy — authoritative. The kind of dashboard a CTO trusts implicitly.`,
};
