import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  WppLogo,
  SubBrandLogo,
  SUB_BRAND_LOGOS,
  type SubBrandName,
} from '@/components/ui/logo';

const meta = {
  title: 'Foundations/Logos',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const NAMES = Object.keys(SUB_BRAND_LOGOS) as SubBrandName[];

export const Logos: Story = {
  render: () => (
    <div className="flex flex-col gap-12 bg-background p-8 text-foreground">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl">Logos</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Logos are fixed artwork, not tokens. Set a <strong>height</strong> and
          let the width follow — never set both, and never stretch, redraw or
          re-space a mark. Only two treatments are approved, so tone is a closed{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            navy | white
          </code>{' '}
          prop rather than a colour class: a logo must never be tinted orange,
          teal or any other palette colour.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg">Primary wordmark</h2>
        <div className="flex flex-col gap-4">
          <div className="rounded border p-8">
            <WppLogo />
          </div>
          <div className="rounded bg-wpp-navy p-8">
            <WppLogo tone="white" />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg">Sub-brands — navy on light</h2>
        <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {NAMES.map((name) => (
            <div key={name} className="flex flex-col items-start gap-2">
              <SubBrandLogo name={name} className="h-10" />
              <code className="text-[10px] text-muted-foreground">{name}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg">Sub-brands — white on navy</h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Verticurl is supplied in navy only, so it falls back to the navy
          lock-up here — it needs a white master from the brand team.
        </p>
        <div className="grid grid-cols-2 items-center gap-8 rounded bg-wpp-navy p-8 sm:grid-cols-3 lg:grid-cols-4">
          {NAMES.map((name) => (
            <div key={name} className="flex flex-col items-start gap-2">
              <SubBrandLogo name={name} tone="white" className="h-10" />
              <code className="text-[10px] text-wpp-cream/70">{name}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg">Sizing</h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          These are detailed dot-pattern marks — they stop being legible below
          roughly 32px tall.
        </p>
        <div className="flex flex-wrap items-end gap-8">
          {['h-8', 'h-10', 'h-12', 'h-16'].map((h) => (
            <div key={h} className="flex flex-col items-start gap-2">
              <SubBrandLogo name="diff" className={h} />
              <code className="text-[10px] text-muted-foreground">{h}</code>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
