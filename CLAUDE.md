# WPP Enterprise Solutions — Design System

React + Vite + Tailwind v4 + shadcn/ui (Base UI primitives), catalogued in Storybook.

## Architecture: three token layers

All styling flows through `src/index.css`. Never hardcode a colour in a component.

1. **Layer 1 — brand palette** (`--wpp-*`): the raw WPP values. Never referenced
   directly by a component.
2. **Layer 2 — semantic tokens** (`--primary`, `--muted`, `--border`, …): what
   components consume. Defined twice — `:root` for light, `.dark` for dark.
3. **Layer 3 — `@theme inline`**: maps semantic tokens to Tailwind utilities
   (`bg-primary`, `text-muted-foreground`).

Changing a Layer 2 value restyles every component at once. That is the point —
do not patch individual components to change appearance.

## Brand rules

- **Navy `#000050` is the primary brand colour.** It maps to `--primary`. In dark
  mode `--primary` flips to Tint 600 `#aa96ff` because navy is unreadable on a
  dark ground.
- **Cream `#fafaf0`** is the warm neutral — used for `--sidebar` in light mode.
- **Tertiary colours** (orange, teal, blue, purple, …) are for accents and data
  visualisation only. They are not UI state colours.
- **`--destructive`** is brand red `#bc0113`, not an arbitrary red.
- **Typeface is WPP**, loaded locally from `src/assets/fonts` as woff2 across six
  weights plus italics, bound to `--font-sans`. Do not introduce another font.
- Radius scale follows WPP: `lg` = 8px, and `--radius` is `0.5rem`.

## Writing components

- Components live in `src/components/ui/`, added via
  `npx shadcn@latest add <name>`. The CLI writes source only — **it does not
  create stories**. Every new component needs a `*.stories.tsx` beside it.
- Use semantic Tailwind classes (`bg-primary`, `border-input`). Never
  `bg-[#000050]`.
- Use the `@/` alias for imports, not relative paths across directories.

## Storybook conventions

Sidebar order is pinned in `.storybook/preview.tsx`. Set `title` to the right
category:

| Category | For |
|---|---|
| `Foundations/` | Colour, typography, token documentation |
| `Forms/` | Inputs and controls |
| `Overlays/` | Dialogs, popovers, menus, tooltips |
| `Feedback/` | Alerts, badges, progress, skeletons |
| `Layout/` | Structural components |

A **Theme toolbar toggle** switches light/dark by putting `.dark` on the root —
check both before considering a component done.

## Commands

```bash
npm run storybook              # dev catalogue on :6006
npx vitest --project storybook run   # run every story as a test
npm run build-storybook        # static build
```

## Source of truth

Brand tokens were extracted from the live WPP Enterprise Solutions site and
cross-checked against `Workspace/WPP/Brand Assets/`. Note the local
`Colour Palettes/css` export defines a **different orange ramp**
(`#ff7800`) than the live site (`#ff6400`) — the live values are used here.
Resolve with the brand team if it matters.
