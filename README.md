# prism

Visual explanations from the terminal.

Prism generates charts, diagrams, infographics, and architecture maps using [Gemini](https://ai.google.dev)'s image generation. Each generation is archived with a short ID, so you can retrieve, star, and recall prompts later. 14 built-in prompt guides handle the structure — you just describe what you want to see.

```
$ prism "bar chart of JS bundler build times: Webpack 12s, Vite 0.4s, esbuild 0.1s, Turbopack 0.8s, Rollup 4s" --guide bar-chart

🎨 Generating with guide [bar-chart]...

══════════════════════════════════════════════════════════════════════════
[a7c] Generated (square)
══════════════════════════════════════════════════════════════════════════

~/.cache/prism/pages/a7c.png
```

Build a library over time:

```
$ prism list

[a7c] ★ "bar chart of JS bundler build times: Webpack 12..." (square) 2m ago
[f01]   "architecture diagram of a real-time chat app..." (wide) 1h ago
[3b9] ★ "before/after comparison of database query refac..." (square) 3h ago
[e44]   "OAuth 2.0 authorization code flow in 6 steps..." (tall) 1d ago
```

Recall what worked:

```
$ prism prompt a7c

[guide: bar-chart]

bar chart of JS bundler build times: Webpack 12s, Vite 0.4s, esbuild 0.1s, Turbopack 0.8s, Rollup 4s
```

## Install

Requires [Bun](https://bun.sh) (v1.0+).

```bash
git clone https://github.com/yavzius/prism.git
cd prism
bun install
bun run build
```

This compiles a standalone binary. Move it to your PATH:

```bash
cp prism ~/.local/bin/
# or
ln -s "$(pwd)/prism" ~/.local/bin/prism
```

Or run directly without compiling:

```bash
bun run src/cli.ts "your prompt"
```

## Setup

Prism requires one API key:

| Service | Purpose | Get a key |
|---------|---------|-----------|
| [Gemini](https://ai.google.dev) | Image generation | [aistudio.google.com](https://aistudio.google.com/apikey) |

Configure it:

```bash
prism setup gemini <your-key>
```

The key is saved to `~/.config/gemini/api_key` with `0600` permissions. The `GEMINI_API_KEY` environment variable takes precedence if set.

Check status anytime:

```bash
prism setup
```

## Usage

### Generate

```bash
prism "your prompt"                       # Generate image
prism "prompt" --guide architecture       # Use a prompt guide
prism "prompt" --size wide                # wide, tall, square (default), WxH
prism "prompt" --thinking                 # Enable thinking for complex layouts
prism "prompt" --open                     # Open image after generation
```

The default size is `square` (1024x1024). `wide` is 1536x1024, `tall` is 1024x1536, or pass a custom `WxH`.

### Retrieve

```bash
prism get <id>                            # Get image path by ID
prism get latest                          # Most recent generation
```

### History

```bash
prism list                                # All generations (newest first)
prism list --starred                      # Starred only
prism star <id>                           # Toggle star
prism prompt <id>                         # Print exact prompt used
```

### Guides

14 built-in guides that structure your prompts for specific visualization types:

```bash
prism guides                              # List all guides
prism guide <name>                        # Show full guide content
```

Available guides: `architecture`, `flow`, `comparison`, `timeline`, `hierarchy`, `concept-map`, `bar-chart`, `line-chart`, `pie-chart`, `table`, `infographic`, `sequence`, `anatomy`, `before-after`

Each guide contains when-to-use criteria, design principles, a prompt structure template, and an example prompt. When you pass `--guide`, the guide content is prepended to your prompt.

### JSON Output

Every command supports `--json` for piping into other tools:

```bash
prism list --json | jq '.[].id'
prism get latest --json | jq '.imagePath'
```

## Architecture

```
src/
├── cli.ts              ← Entry point, arg parsing, command routing
├── types.ts            ← All shared TypeScript interfaces
├── commands/
│   ├── generate.ts     ← Generate command: prompt → Gemini → archive
│   ├── retrieve.ts     ← Get, list, star, prompt recall
│   ├── guides.ts       ← Guide listing and display
│   └── setup.ts        ← API key configuration
├── providers/
│   └── gemini.ts       ← Gemini API client (typed request/response)
└── lib/
    ├── config.ts       ← API key loading, version constant
    ├── guides.ts       ← 14 embedded prompt guides
    ├── pages.ts        ← Page storage (ID generation, save/load)
    └── output.ts       ← Terminal + JSON output formatting
```

**Data flow:** CLI → Command → Provider → Output

- **Provider** is a pure API client handling Gemini's image generation endpoint with typed requests and responses.
- **Commands** orchestrate the workflow for each user action, composing the provider and lib utilities.
- **Lib** modules handle stateless concerns: prompt guides, page persistence, configuration, formatting.

No runtime dependencies. Compiles to a single binary via `bun build --compile`.

## License

MIT
