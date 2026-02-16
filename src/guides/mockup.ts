import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "mockup",
  title: "High-fidelity UI mockups",
  content: `Design a UI mockup with the visual quality of a top Dribbble shot or a Linear/Raycast product screenshot. This should look like a real product, not a design exercise.

APPROACH: Think about what makes Linear, Raycast, Arc Browser, and Vercel screenshots feel premium. It's restraint — dark surfaces with very few colors, precise spacing, typography that breathes, and just enough depth to feel layered without being theatrical.

CANVAS: Choose a foundation:
- Dark mode: Deep warm charcoal (#18181B) with subtle warmth. Not blue-black.
- Light mode: Warm off-white (#FAFAF8) with a hint of cream. Not sterile white.
Add a very subtle noise texture (2-3% opacity) to the background. If showing a device frame, place it on a dark surface with soft ambient lighting — not floating in space.

COMPONENTS: Render real UI components with real data. Text inputs with actual placeholder text. Buttons with actual labels. Lists with actual items. Avatars with actual faces. Nothing lorem ipsum.
- Buttons: pill-shaped or softly rounded. One accent color for primary, ghost/outline for secondary
- Cards: subtle border or shadow, never both. 8-12px radius
- Inputs: thin bottom-border or subtle fill, not heavy outlines
- Icons: monoline, consistent 1.5px stroke, matching text color
- Spacing: rigorous 8px grid. Generous padding inside cards (16-24px)

COLOR: One accent color maximum. Pick something with personality — not blue. Warm coral (#E06C4F), deep violet (#6E56CF), rich amber (#D4943A), or teal (#2A9D8F). The accent appears on the primary button, active nav item, and key data — nowhere else. Everything else is the neutral palette.

TYPOGRAPHY: A clean geometric or humanist sans-serif. Three sizes: 22-28px bold for the main heading, 14-16px medium for section labels, 13px regular for body content. Tight line-height for headings (1.1), comfortable for body (1.5). Monospace for code, numbers, or IDs.

DEPTH: Create depth through subtle means — not heavy drop shadows. Use: faint card borders that catch light, a slightly darker sidebar, overlapping elements where panels layer naturally. One frozen interaction state adds life: a tooltip mid-hover, a dropdown partially open, or a context menu visible.

DEVICE FRAME: If appropriate, present in a minimal device frame (MacBook or iPhone) at a very slight angle (2-3 degrees). The frame should be a thin, dark bezel — not the focus. Screen content is the star.

The overall feel: this looks like a shipping product that cost millions to build. Confident, quiet, real.`,
};
