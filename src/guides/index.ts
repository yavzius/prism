import type { Guide } from "../types.js";

// ── Data & Charts ───────────────────────────────────────────────────────────
import { guide as barChart } from "./bar-chart.js";
import { guide as lineChart } from "./line-chart.js";
import { guide as pieChart } from "./pie-chart.js";
import { guide as heatmap } from "./heatmap.js";

// ── Tables & Grids ──────────────────────────────────────────────────────────
import { guide as table } from "./table.js";
import { guide as dashboard } from "./dashboard.js";

// ── Structure & Relationships ───────────────────────────────────────────────
import { guide as architecture } from "./architecture.js";
import { guide as hierarchy } from "./hierarchy.js";
import { guide as erDiagram } from "./er-diagram.js";
import { guide as conceptMap } from "./concept-map.js";
import { guide as venn } from "./venn.js";

// ── Process & Flow ──────────────────────────────────────────────────────────
import { guide as flow } from "./flow.js";
import { guide as sequence } from "./sequence.js";
import { guide as timeline } from "./timeline.js";
import { guide as stateDiagram } from "./state-diagram.js";
import { guide as funnel } from "./funnel.js";

// ── Comparison & Decision ───────────────────────────────────────────────────
import { guide as comparison } from "./comparison.js";
import { guide as beforeAfter } from "./before-after.js";
import { guide as quadrant } from "./quadrant.js";

// ── Explanation & Teaching ──────────────────────────────────────────────────
import { guide as explainer } from "./explainer.js";
import { guide as anatomy } from "./anatomy.js";
import { guide as infographic } from "./infographic.js";
import { guide as mindMap } from "./mind-map.js";

// ── Design & Ideation ───────────────────────────────────────────────────────
import { guide as wireframe } from "./wireframe.js";
import { guide as mockup } from "./mockup.js";
import { guide as landingPage } from "./landing-page.js";
import { guide as component } from "./component.js";

// ── Planning ────────────────────────────────────────────────────────────────
import { guide as roadmap } from "./roadmap.js";

// ── Registry ────────────────────────────────────────────────────────────────

const GUIDES: Guide[] = [
  // Data & Charts
  barChart, lineChart, pieChart, heatmap,
  // Tables & Grids
  table, dashboard,
  // Structure & Relationships
  architecture, hierarchy, erDiagram, conceptMap, venn,
  // Process & Flow
  flow, sequence, timeline, stateDiagram, funnel,
  // Comparison & Decision
  comparison, beforeAfter, quadrant,
  // Explanation & Teaching
  explainer, anatomy, infographic, mindMap,
  // Design & Ideation
  wireframe, mockup, landingPage, component,
  // Planning
  roadmap,
];

// ── Exports ─────────────────────────────────────────────────────────────────

export function getAllGuides(): Array<{ name: string; title: string }> {
  return GUIDES.map(({ name, title }) => ({ name, title }));
}

export function getGuide(name: string): Guide | undefined {
  return GUIDES.find((g) => g.name === name);
}
