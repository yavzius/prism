import type { Guide } from "../types.js";

const GUIDES: Guide[] = [
  {
    name: "architecture",
    title: "System architecture diagrams",
    content: `WHEN TO USE: Visualizing system components, their boundaries, and how they communicate.

PRINCIPLES:
- Group related components into bounded regions with clear labels
- Use directional arrows for data/control flow — label each arrow with protocol or data type
- Keep to 5-7 top-level components max; nest details inside boxes
- Color-code by concern: blue for compute, green for storage, orange for external services
- Include a legend only if you use more than 3 colors

PROMPT STRUCTURE:
"Architecture diagram of [system]. Components: [list]. Show [data/request] flow from [source] to [sink]. Label connections with [protocols/formats]. Group by [concern]."

EXAMPLE PROMPT:
"Architecture diagram of a real-time chat application. Components: React client, WebSocket gateway, message service, PostgreSQL database, Redis pub/sub, S3 for file uploads. Show message flow from client through gateway to database and back via pub/sub. Label connections with WebSocket, gRPC, SQL, and S3 API. Group by frontend, backend services, and data layer."`,
  },
  {
    name: "flow",
    title: "Process and data flow charts",
    content: `WHEN TO USE: Showing step-by-step processes, decision trees, or data transformations.

PRINCIPLES:
- Top-to-bottom or left-to-right flow — never mix directions
- Diamond shapes for decisions, rectangles for actions, rounded rectangles for start/end
- Label every arrow with the condition or data being passed
- Keep to one path per branch — avoid crossing arrows
- Number steps if sequence matters

PROMPT STRUCTURE:
"Flowchart showing [process]. Start with [trigger]. Decision points: [list]. End states: [list]. Show [data] at each step."

EXAMPLE PROMPT:
"Flowchart showing HTTP request lifecycle in a web framework. Start with incoming request. Decision points: route match found?, authentication required?, authorization passes?. End states: 200 response, 404 not found, 401 unauthorized, 403 forbidden. Show request object transformations at each step."`,
  },
  {
    name: "comparison",
    title: "Side-by-side comparisons",
    content: `WHEN TO USE: Comparing two or more options, technologies, or approaches across shared criteria.

PRINCIPLES:
- Use a clear grid layout with items as columns and criteria as rows
- Highlight differences with color: green for advantages, red for disadvantages, gray for neutral
- Include a summary row or verdict at the bottom
- Keep criteria to 5-8 rows max — pick the ones that actually differentiate
- Use icons or checkmarks for boolean comparisons

PROMPT STRUCTURE:
"Comparison chart of [items]. Criteria: [list]. Highlight: [what matters most]. Include verdict row showing [recommendation context]."

EXAMPLE PROMPT:
"Comparison chart of PostgreSQL vs MySQL vs SQLite for a new web project. Criteria: concurrent writes, JSON support, full-text search, hosting ease, ecosystem maturity, license. Highlight: concurrent writes and JSON support as most important. Include verdict row showing best fit for a startup SaaS with 1000 daily users."`,
  },
  {
    name: "timeline",
    title: "Chronological progressions",
    content: `WHEN TO USE: Showing events, milestones, or evolution over time.

PRINCIPLES:
- Horizontal layout for short timelines (5-8 events), vertical for longer ones
- Equal visual spacing does NOT mean equal time — add date labels to every event
- Color-code event categories if mixed (releases, incidents, milestones)
- Add a "now" marker if the timeline extends to the present
- Brief description under each event (1 line max)

PROMPT STRUCTURE:
"Timeline of [subject] from [start] to [end]. Events: [list with dates]. Highlight [key moments]. Category colors for [types]."

EXAMPLE PROMPT:
"Timeline of JavaScript framework evolution from 2010 to 2025. Events: Backbone.js 2010, Angular.js 2010, React 2013, Vue 2014, Svelte 2016, Next.js 2016, Solid 2021, Qwik 2023. Highlight React 2013 and Next.js 2016 as inflection points. Category colors for full frameworks vs view libraries vs meta-frameworks."`,
  },
  {
    name: "hierarchy",
    title: "Tree structures, org charts",
    content: `WHEN TO USE: Showing parent-child relationships, inheritance, or organizational structure.

PRINCIPLES:
- Root at top, leaves at bottom — consistent top-down flow
- Use connecting lines (not arrows) for parent-child relationships
- Color-code by level or category
- Limit depth to 4 levels — collapse deeper nodes into summary boxes
- Show count annotations when a node has many children ("[+12 more]")

PROMPT STRUCTURE:
"Hierarchy diagram of [structure]. Root: [top node]. Levels: [describe each level]. Highlight [specific branches]. Collapse [areas with many children]."

EXAMPLE PROMPT:
"Hierarchy diagram of a React component tree for an e-commerce app. Root: App. Level 1: Layout, AuthProvider, CartProvider. Level 2 under Layout: Header, MainContent, Footer. Level 2 under MainContent: ProductGrid, ProductDetail, Checkout. Highlight the Checkout branch showing CheckoutForm, PaymentStep, ConfirmationStep. Collapse ProductGrid children as [+15 product cards]."`,
  },
  {
    name: "concept-map",
    title: "Relationship networks",
    content: `WHEN TO USE: Showing how concepts relate to each other in a non-hierarchical way.

PRINCIPLES:
- Central concept in the middle, related concepts radiating outward
- Label every connection with the relationship type (uses, enables, conflicts with)
- Size nodes by importance or frequency
- Use 2-3 colors max to group related clusters
- Keep total nodes under 12 — combine minor concepts into group nodes

PROMPT STRUCTURE:
"Concept map centered on [main concept]. Related concepts: [list]. Relationships: [list of A→B with label]. Group by [clusters]."

EXAMPLE PROMPT:
"Concept map centered on 'microservices'. Related concepts: API gateway, service mesh, container orchestration, event sourcing, CQRS, circuit breaker, distributed tracing, saga pattern. Relationships: API gateway routes-to microservices, service mesh manages microservices communication, event sourcing enables CQRS, circuit breaker protects microservices, distributed tracing observes microservices. Group by infrastructure (blue) and patterns (green)."`,
  },
  {
    name: "bar-chart",
    title: "Bar/column charts",
    content: `WHEN TO USE: Comparing quantities across categories.

PRINCIPLES:
- Label every bar with its exact value directly on or above the bar
- Sort bars by value (descending) unless categories have natural order
- Use a single color for single-series; distinct colors only for multi-series
- Include axis labels with units
- Limit to 8-10 bars — group smaller values into "Other" if needed

PROMPT STRUCTURE:
"Bar chart comparing [metric] across [categories]. Data: [category: value pairs]. Sort by [value/natural order]. Unit: [unit]. Highlight [specific bar if relevant]."

EXAMPLE PROMPT:
"Bar chart comparing average response time in milliseconds across API endpoints. Data: /users: 45ms, /products: 120ms, /search: 340ms, /checkout: 89ms, /analytics: 560ms, /auth: 23ms. Sort by value descending. Unit: milliseconds. Highlight /search and /analytics as above 200ms threshold with a red dashed line at 200ms."`,
  },
  {
    name: "line-chart",
    title: "Trend lines, time series",
    content: `WHEN TO USE: Showing change over time or continuous data trends.

PRINCIPLES:
- X-axis is always time or continuous variable; label intervals clearly
- Label data points at key inflection points (peaks, drops, crossovers)
- Use distinct line styles (solid, dashed) for multiple series — max 4 lines
- Include a clear legend if more than 1 series
- Mark significant events with vertical reference lines

PROMPT STRUCTURE:
"Line chart showing [metric] over [time period]. Data points: [list]. Mark events: [list with dates]. Compare with [other series if any]."

EXAMPLE PROMPT:
"Line chart showing monthly active users from Jan 2024 to Dec 2024. Data: Jan 1200, Feb 1350, Mar 1800, Apr 2100, May 1950, Jun 2400, Jul 2800, Aug 3100, Sep 3400, Oct 3200, Nov 3600, Dec 4000. Mark events: Mar 'launched mobile app', Aug 'viral tweet', Oct 'competitor launched'. Compare with a second line for daily active users at roughly 40% of MAU."`,
  },
  {
    name: "pie-chart",
    title: "Proportional breakdowns",
    content: `WHEN TO USE: Showing parts of a whole — use sparingly, only when proportions are the main insight.

PRINCIPLES:
- Maximum 6 slices — group small slices into "Other"
- Label each slice with category name AND percentage directly on the slice
- Start the largest slice at 12 o'clock position
- Use distinct, high-contrast colors for adjacent slices
- Consider a donut chart variant if there's a key total number to show in the center

PROMPT STRUCTURE:
"Pie chart showing [what the whole represents]. Slices: [category: percentage pairs]. Highlight [specific slice]. Show total [number] in center if donut."

EXAMPLE PROMPT:
"Pie chart showing cloud infrastructure cost breakdown for Q4 2024. Slices: Compute (EC2) 42%, Storage (S3) 18%, Database (RDS) 15%, Networking 12%, ML/AI services 8%, Other 5%. Highlight Compute as the largest cost driver. Show total $47,000/month in center as donut chart."`,
  },
  {
    name: "table",
    title: "Structured data tables",
    content: `WHEN TO USE: Presenting precise data where exact values matter more than visual patterns.

PRINCIPLES:
- Clear column headers with bold text
- Alternate row shading for readability
- Right-align numeric columns, left-align text columns
- Limit to 6-8 columns and 10-12 rows — summarize if more
- Highlight key cells with background color (green for good, red for bad)

PROMPT STRUCTURE:
"Data table showing [subject]. Columns: [list]. Rows: [list or describe]. Highlight [cells/conditions]. Sort by [column]."

EXAMPLE PROMPT:
"Data table showing JavaScript bundler comparison. Columns: Bundler, Build Time, Bundle Size, HMR Speed, Config Complexity, Tree Shaking. Rows: Webpack, Vite, esbuild, Turbopack, Rollup. Highlight cells where build time is under 500ms in green and over 5s in red. Sort by build time ascending."`,
  },
  {
    name: "infographic",
    title: "Multi-section visual summaries",
    content: `WHEN TO USE: Combining multiple data types (stats, charts, lists) into a single visual overview.

PRINCIPLES:
- Clear visual hierarchy: title at top, key stat prominently, supporting sections below
- Use 3-4 sections max — each section is one idea
- Large numbers for key metrics (48pt+ equivalent)
- Consistent color palette across all sections
- Brief labels — no paragraphs of text

PROMPT STRUCTURE:
"Infographic summarizing [topic]. Key stat: [number + label]. Sections: [list of section titles with their data type]. Color palette: [colors]."

EXAMPLE PROMPT:
"Infographic summarizing 2024 developer survey results. Key stat: 73% use TypeScript. Sections: top 5 languages as horizontal bar chart, remote vs office vs hybrid as pie chart, median salary by experience level as stepped bar chart, most wanted tools as ranked list. Color palette: blue (#2563EB) primary, slate gray (#64748B) secondary, green (#16A34A) accent."`,
  },
  {
    name: "sequence",
    title: "Step-by-step sequences",
    content: `WHEN TO USE: Showing ordered steps in a process, recipe, or workflow.

PRINCIPLES:
- Number every step prominently
- Horizontal layout for 3-5 steps, vertical for 6+
- Arrow connectors between steps showing direction
- Brief label per step (3-5 words) with optional subtitle for detail
- Color-code by actor/role if multiple participants

PROMPT STRUCTURE:
"Sequence diagram showing [process] in [N] steps. Steps: [numbered list]. Actors: [if multi-party]. Highlight [critical step]."

EXAMPLE PROMPT:
"Sequence showing OAuth 2.0 authorization code flow in 6 steps. Steps: 1. User clicks login, 2. Redirect to auth server, 3. User grants permission, 4. Auth server returns code, 5. App exchanges code for token, 6. App accesses protected resource. Actors: User (blue), Client App (green), Auth Server (orange), Resource Server (purple). Highlight step 5 as the security-critical exchange."`,
  },
  {
    name: "anatomy",
    title: "Labeled component breakdowns",
    content: `WHEN TO USE: Showing the internal parts of a system, UI, or concept with labeled callouts.

PRINCIPLES:
- Show the subject in the center, labels pointing inward with leader lines
- Number callouts and include a brief description for each
- Group related parts with subtle background regions
- Keep labels outside the diagram to avoid clutter
- Use consistent leader line style (thin, straight, with dot endpoints)

PROMPT STRUCTURE:
"Anatomy diagram of [subject]. Components: [numbered list with descriptions]. Group by [regions]. Highlight [key component]."

EXAMPLE PROMPT:
"Anatomy diagram of an HTTP/2 request frame. Components: 1. Length field (3 bytes) — frame payload size, 2. Type field (1 byte) — DATA, HEADERS, SETTINGS etc, 3. Flags field (1 byte) — END_STREAM, END_HEADERS, 4. Reserved bit (1 bit), 5. Stream identifier (31 bits) — which stream this belongs to, 6. Payload (variable) — actual data. Group by header region (bytes 1-9) and payload region. Highlight stream identifier as key to multiplexing."`,
  },
  {
    name: "before-after",
    title: "Transformation comparisons",
    content: `WHEN TO USE: Showing a change, refactoring, migration, or improvement between two states.

PRINCIPLES:
- Clear left/right or top/bottom split with "Before" and "After" labels
- Use identical layout structure in both halves so differences pop
- Highlight what changed with accent color; keep unchanged parts in gray
- Add a brief annotation between the halves explaining the key change
- Include metrics if quantifiable (performance, LOC, complexity)

PROMPT STRUCTURE:
"Before/after comparison of [subject]. Before state: [description]. After state: [description]. Key change: [what's different]. Metrics: [before → after numbers]."

EXAMPLE PROMPT:
"Before/after comparison of a database query refactoring. Before state: 3 sequential queries with N+1 problem, 450ms total, loading users then looping to load posts then comments. After state: single query with JOINs and eager loading, 12ms total. Key change: replaced N+1 with a single optimized query using LEFT JOIN. Metrics: 450ms → 12ms, 52 queries → 1 query, 3 round trips → 1 round trip."`,
  },
];

// ── Exports ──────────────────────────────────────────────────────────────────

export function getAllGuides(): Array<{ name: string; title: string }> {
  return GUIDES.map(({ name, title }) => ({ name, title }));
}

export function getGuide(name: string): Guide | undefined {
  return GUIDES.find((g) => g.name === name);
}
