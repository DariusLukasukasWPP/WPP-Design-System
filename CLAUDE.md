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

### Shape and type — measured from the live site

Audited against `enterprisesolutions.wpp.com` — do not "fix" these back to
stock shadcn values:

- **Buttons are pills.** Every designed CTA on the site is `border-radius:
  9999px`, 40px tall, 14px / weight 500 / `-0.4px` tracking / capitalised.
  There is no 8px-radius button anywhere on the site.
- **The primary CTA is orange with a NAVY label** (`--cta` / `--cta-foreground`),
  not navy-with-white. `Button` variants map to the site's family:
  `default` = orange pill, `outline` = 1px navy hairline, `navy` = solid navy,
  `inverse` = white pill for navy/imagery backgrounds.
- **`--primary` stays navy.** It drives component states (checkbox checked,
  switch on, slider range, progress). Only the CTA is orange.
- **Cards and panels are 4px** — `--radius` is `0.25rem`. The site's radius
  census is 9999px (pills), 4px (cards), 2px (small chrome). No 8px.
- **Display type is WPP Light (300)** with tight negative tracking and ~1.0
  leading, set in `@layer base`: h1 48/48 `-2.16px`, h2 32/32 `-0.4px`,
  h3 24/26.4 `-0.4px`, h4 20/24 `-0.4px`. Headings are not Medium.

### Logos

`src/components/ui/logo.tsx` — `WppLogo` (the parent wordmark) and
`SubBrandLogo` (eight sub-brands: barrows, bottle-rocket, diff, dti, map,
marketdata-match, the-cocktail, verticurl).

- Logos are fixed artwork, **not** tokens. `tone` is a closed `navy | white`
  set on purpose — never tint a logo with a palette colour.
- Size by **height** (`h-8`, `h-10`); width is `w-auto` so each mark keeps its
  intrinsic ratio. Ratios run from about 5:1 to 12:1, so never set both.
- Below ~32px tall the dot pattern stops resolving.
- **Verticurl has no white master** — `tone="white"` falls back to navy and
  will disappear on a navy surface. Needs requesting from the brand team.
- Favicon lives at `public/favicon.svg` (referenced by `index.html`, and by
  Storybook via `staticDirs` + `.storybook/manager-head.html`).

### Underlines — dotted on hover is INTENTIONAL

Read the live header link classes before changing anything here:

```
decoration-current underline-offset-12
hover:underline hover:decoration-dotted hover:decoration-2
```

A **dotted 2px underline on hover** is the brand's navigation-link treatment —
it echoes the dot motif that runs through the whole identity. It is not a
rendering artefact. Do **not** "fix" it to a solid rule, and do not pin
`decoration-1`. The `Button` `link` variant reproduces this recipe.

`text-decoration-skip-ink: none` on `html` keeps the rule continuous across
descenders.

### Interaction states — orange is the hover colour

From the live CTA class lists:

| Variant | Rest | Hover |
|---|---|---|
| `default` | orange fill, navy label | **orange-800** `#e55a00` |
| `outline` | navy hairline, transparent | **fills orange**, border to transparent |
| `inverse` | white fill, navy label | **fills orange** |

Disabled CTAs use explicit greys — `bg` grey-4, text grey-3, border transparent
— not opacity. Non-CTA variants (secondary/ghost/destructive) keep shadcn's
opacity-based disabled state.

### Icons

Two separate systems — do not conflate:

- **`lucide-react`** for all interface affordances (chevron, close, search,
  check). This is the UI icon set.
- **`WppIcon`** (`src/components/ui/wpp-icon.tsx`) for the six service-line
  marks. Keys follow the **live site's** service names, which differ from the
  older brand-asset filenames: `consulting`, `customer-experience`,
  `commerce`, `content-transformation` (was "Content"), `crm-and-loyalty`
  (labelled "1PD, CRM & Loyalty"), `engineering-and-platforms` (was
  "Technology & Data"). There are exactly six marks — the 48 files in the brand
  folder are these six across eight colourways. These are halftone dot
  illustrations on a 500&times;500 grid with ~50 circles each — they only read
  at 48px and up. Rendered via CSS mask, so they recolour with any text
  colour token (`text-primary`, `text-wpp-orange`). Never use them as UI icons.

## Writing components

- Components live in `src/components/ui/`, added via
  `npx shadcn@latest add <name>`. The CLI writes source only — **it does not
  create stories**. Every new component needs a `*.stories.tsx` beside it.
- Use semantic Tailwind classes (`bg-primary`, `border-input`). Never
  `bg-[#000050]`.
- Use the `@/` alias for imports, not relative paths across directories.
- **`npx shadcn add form` is a no-op stub in this shadcn generation** — it
  resolves to zero files. Use `npx shadcn add field` instead; `Field`/
  `FieldGroup`/`FieldSet`/`FieldLabel`/`FieldError` are the current
  react-hook-form-agnostic replacement for the old `Form` wrapper.

## Storybook conventions

Sidebar order is pinned in `.storybook/preview.tsx`. Set `title` to the right
category:

| Category | For |
|---|---|
| `Foundations/` | Colour, typography, spacing, radius, links, mobile, logos, icons |
| `Patterns/` | Page compositions (header, footer, heroes, insight card, …) |
| `Forms/` | Inputs and controls |
| `Overlays/` | Dialogs, popovers, menus, tooltips |
| `Feedback/` | Alerts, badges, progress, skeletons |
| `Layout/` | Structural components |

A **Theme toolbar toggle** switches light/dark by putting `.dark` on the root —
check both before considering a component done.

## Mobile rules

Measured from `enterprisesolutions.wpp.com` — see `Foundations/Mobile` in Storybook.

- **Chrome splits at `lg` (1024px)**, not `md`. Below that: hide desktop nav +
  header CTA; show the 44×44 dot-grid control → full-bleed navy sheet.
- **Page gutter stays `px-6`** at every breakpoint inside `max-w-layout`.
- **Expertise hero media**: `aspect-[9/16]` below `md`, `aspect-video` from
  `md` up; supply a separate mobile image when the art direction needs it.
- **Touch targets** for icon controls are `size-11` (44px). CTA pills stay
  40px tall; full-width (`w-full md:w-auto`) is fine on the smallest screens.

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
