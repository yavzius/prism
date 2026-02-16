import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "table",
  title: "Structured data tables",
  content: `Create a data table with the clarity of Notion databases, the density of Linear issue lists, or the precision of Stripe billing tables — structured data as interface, not just display.

CANVAS: A warm off-white surface (#F4F1EB). The table sits as a floating card with soft rounded corners and the faintest shadow — contained, clean, lifted just slightly off the canvas. Generous padding around the outer edge gives the table room to exist without crowding.

HEADER ROW: A warm light fill that separates clearly from the data beneath it. Column headers in bold, uppercase, with generous letter-spacing — small type, but confident. Dark charcoal (#2D2D2D) text. This row is structural: it tells the eye where the data begins.

DATA ROWS: Alternating fills — warm white and the palest warm gray — create horizontal banding that guides the eye across wide tables without needing heavy gridlines. Row height is generous for comfortable reading. Each row has a hairline bottom border in warm light gray, subtle enough to guide without cluttering. Text columns align left, numbers align right. Numbers use a tabular monospaced variant so digits stack cleanly in columns — this matters more than any other single typographic choice in a table.

CONDITIONAL FORMATTING: Soft background tints, never harsh blocks of color. A pale warm green for positive values, pale amber for warnings, pale rose for critical items. These tints whisper context while the data itself stays in dark, readable text. The emphasis comes from the tint, not from the font weight or color of the numbers.

TYPOGRAPHY: The table title sits above in a bold face with breathing room beneath it. Column headers are small and structural. Cell values are the primary reading size — clear, regular weight, dark enough to scan quickly. If there is a summary or total row, give it a slightly darker fill and bold text to set it apart from the data rows.

Keep to a maximum of seven columns and twelve rows for visual comfort. The overall feel: data you can think with, not just look at.`,
};
