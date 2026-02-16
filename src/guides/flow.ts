import type { Guide } from "../types.js";

export const guide: Guide = {
  name: "flow",
  title: "Process and workflow diagrams",
  content: `Create a process flow diagram with the clarity and craft of a well-written product spec from a team that ships beautiful software — Figma's internal docs or Linear's feature specs. Not a whiteboard sketch. Not a BPMN export. Something a designer and engineer both reach for.

CANVAS: A warm, faintly textured surface — matte paper with the slightest grain, not flat white. Think warm cream (#F5F0EB) with a barely-there dot grid in a muted stone tone that gives spatial reference without competing with the diagram.

NODES: Shape encodes meaning, and every node earns its visual weight. Start and end points are pill shapes — the start filled in a confident emerald (#10B981), the end in deep slate, both with white text. Process steps are rounded rectangles with white fills and a left accent border in indigo (#6366F1), giving them a quiet card-like presence with soft shadows. Decision diamonds use a warm amber fill with dark text — keep labels to a few words so they breathe inside the shape. Subprocess callouts get a dashed violet border with the lightest wash behind them, signaling "there's more here" without pulling focus.

CONNECTORS: Smooth bezier curves, not rigid right angles. The happy path is visually dominant — slightly bolder weight and the primary connector color. Alternate and error paths are thinner or dashed, with error paths in a muted red (#E05252). Every decision branch diverges at a visible angle so paths never overlap. Arrowheads are small, filled, precise. Every branch label — "Yes," "No," "Error" — sits on a tiny pill background so it stays legible where lines cross.

TYPOGRAPHY: The diagram title anchors the top in a dark, confident weight. Node labels are medium weight, centered, sized to fit comfortably inside their shapes. Connector labels are smaller, quieter in tone — they annotate without shouting. Numbers are set in monospace where they appear to keep alignment clean.

LAYOUT: The primary flow reads top to bottom. When the diagram runs wide, an S-curve pattern — left-to-right on one row, right-to-left on the next — keeps the reading order obvious. Generous white space between nodes, at least a third of the canvas breathing. If the flow exceeds ten steps, group related actions into labeled swim lanes or shaded regions rather than letting the diagram sprawl.

The overall feel: the map of how things actually work, drawn by someone who cares.`,
};
