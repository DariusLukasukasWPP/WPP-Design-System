# WPP Enterprise Solutions — Design System

Component library and design tokens for [WPP Enterprise Solutions](https://enterprisesolutions.wpp.com), built with React, Vite, Tailwind CSS v4, and shadcn/ui (Base UI primitives). The living catalogue is Storybook.

Brand values are taken from the live site and cross-checked against WPP brand assets. Tokens and components follow those measurements — not stock shadcn defaults.

## Stack

| Layer | Choice |
|---|---|
| UI | React 19 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS v4 |
| Primitives | shadcn/ui on Base UI |
| Catalogue | Storybook 10 |
| Icons | Lucide + WPP service icons |
| Font | WPP (local woff2) |

## Quick start

```bash
npm install
npm run storybook   # catalogue on http://localhost:6006
```

Other scripts:

```bash
npm run dev              # Vite app shell
npm run build            # production build
npm run build-storybook  # static Storybook
npx vitest --project storybook run  # stories as tests
```

## What’s in the catalogue

### Foundations

Colour, typography, spacing, radius, links, mobile rules, logos, iconography.

### Patterns

Page compositions measured from the live site:

| Pattern | Notes |
|---|---|
| Site Header | Desktop nav + CTA; below `lg`, dot-grid → full-bleed navy sheet |
| Site Footer | Navy CTA band, cream contact strip, sitemap |
| Media Hero | Full-bleed home hero (`min-h-svh`) |
| Page Hero | Expertise title + subtitle; media `9/16` → `aspect-video` |
| Section Band | White / cream / navy content bands |
| Partner Grid | Square logo grid + orange “Discover more” tile |
| Insight Card | Editorial insight / featured tile |

### Components

Forms, overlays, feedback, and layout primitives (button, input, select, dialog, sheet, tabs, table, accordion, and more), each with a Storybook story.

Use the Storybook **Theme** toolbar to switch light / dark before signing off a component. Resize below **1024px** to exercise mobile header behaviour.

## Token architecture

All styling flows through `src/index.css`. Do not hardcode colours in components.

1. **Brand palette** (`--wpp-*`) — raw WPP values; not used directly in components
2. **Semantic tokens** (`--primary`, `--muted`, `--border`, …) — what components consume; defined for light (`:root`) and dark (`.dark`)
3. **`@theme inline`** — maps semantic tokens to Tailwind utilities (`bg-primary`, `text-muted-foreground`)

Changing a Layer 2 token restyles every component at once.

### Brand highlights

- **Navy `#000050`** → `--primary` (flips to Tint 600 in dark mode)
- **CTA** is orange with a navy label (`--cta` / `--cta-foreground`) — buttons are pills
- **Cream `#fafaf0`** for warm neutrals / sidebar in light mode
- **Destructive** is brand red `#bc0113`
- **Radius**: pills `9999px`, cards `4px` (`--radius: 0.25rem`)
- **Layout**: `max-w-layout` = 1440px; page gutter `px-6`; header height 85px

## Project layout

```
src/
  assets/fonts/          # WPP typeface (woff2)
  assets/logos/          # Parent + sub-brand marks
  assets/partners/       # Partner attribution logos (local SVG)
  assets/icons/          # Service icons
  components/ui/         # Primitives + co-located *.stories.tsx
  components/patterns/   # Page compositions (header, footer, heroes, …)
  foundations/           # Token / brand documentation stories
  index.css              # Token layers + base styles + layout utilities
.storybook/              # Storybook config + theme toolbar
```

Import with the `@/` alias (e.g. `@/components/ui/button`).

## Adding a component

```bash
npx shadcn@latest add <name>
```

The CLI writes source only — add a matching `*.stories.tsx` beside it and place the story under the right sidebar category (`Foundations/`, `Patterns/`, `Forms/`, `Overlays/`, `Feedback/`, `Layout/`).

Page compositions go in `src/components/patterns/`, not `ui/`.

Use semantic Tailwind classes (`bg-primary`, `border-input`), never raw hex values.

## Source of truth

Agent-oriented brand and contribution rules live in [`CLAUDE.md`](./CLAUDE.md). When brand CSS exports disagree with the live site, the live site wins — resolve with the brand team if it matters.
