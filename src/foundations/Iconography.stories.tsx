import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ServiceIcon,
  ServiceIllustration,
  WppArrow,
  WppDotGrid,
  SERVICE_ICONS,
  type ServiceName,
} from '@/components/ui/wpp-icon';

const meta = {
  title: 'Foundations/Iconography',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const NAMES = Object.keys(SERVICE_ICONS) as ServiceName[];

export const Iconography: Story = {
  render: () => (
    <div className="flex flex-col gap-12 bg-background p-8 text-foreground">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl">Iconography</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          The identity is built on dots, and there are three separate icon
          systems. Picking the wrong one is the most common mistake.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg">Service icons</h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          The six service-line icons the live site uses on expertise cards.
          Small, sparse, authored for UI at 18–24px. Orange on cream is the
          site's treatment.
        </p>
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {NAMES.map((name) => (
            <div
              key={name}
              className="flex flex-col gap-3 bg-wpp-cream p-4 text-wpp-navy"
            >
              <ServiceIcon name={name} className="text-wpp-orange" />
              <span className="text-xs font-medium">
                {SERVICE_ICONS[name].label}
              </span>
              <code className="text-[10px] text-muted-foreground">{name}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg">Service illustrations</h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          The large halftone marks from the brand-asset folder — roughly 50
          circles on a 500×500 grid. Display artwork: they need 48px or more and
          are <strong>not</strong> a substitute for the service icons above.
        </p>
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {NAMES.map((name) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <ServiceIllustration name={name} className="text-primary" />
              <code className="text-center text-[10px] text-muted-foreground">
                {name}
              </code>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg">Brand UI icons</h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Two marks lifted from the site's own inline SVG. Everything else —
          chevrons, close, check, search — comes from{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            lucide-react
          </code>
          .
        </p>
        <div className="flex flex-wrap items-end gap-10">
          <div className="flex flex-col items-center gap-2">
            <WppArrow className="text-primary" />
            <code className="text-[10px] text-muted-foreground">WppArrow</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <WppArrow className="rotate-[-45deg] text-primary" />
            <code className="text-[10px] text-muted-foreground">
              rotate-[-45deg]
            </code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <WppDotGrid className="text-primary" />
            <code className="text-[10px] text-muted-foreground">
              WppDotGrid
            </code>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg">Size — service icons</h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          The site uses these at 18–24px. They stay legible smaller than the
          illustrations below, since each is only ~16 dots rather than ~50.
        </p>
        <div className="flex flex-wrap items-end gap-8">
          {['size-4', 'size-6', 'size-8', 'size-10', 'size-12'].map((s) => (
            <div key={s} className="flex flex-col items-center gap-1.5">
              <ServiceIcon name="consulting" className={`${s} text-wpp-orange`} />
              <code className="text-[10px] text-muted-foreground">{s}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg">Size — service illustrations</h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          These stop resolving below roughly 48px (<code className="rounded bg-muted px-1 py-0.5 text-xs">size-12</code>) —
          the individual dots merge into noise.
        </p>
        <div className="flex flex-wrap items-end gap-6">
          {['size-10', 'size-12', 'size-16', 'size-20', 'size-24'].map((s) => (
            <div key={s} className="flex flex-col items-center gap-1.5">
              <ServiceIllustration name="consulting" className={`${s} text-primary`} />
              <code className="text-[10px] text-muted-foreground">{s}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg">Colour</h2>
        <div className="flex flex-wrap items-end gap-8">
          {(['text-primary', 'text-wpp-orange', 'text-wpp-teal'] as const).map(
            (c) => (
              <div key={c} className="flex flex-col items-center gap-1.5">
                <ServiceIcon name="commerce" className={`size-10 ${c}`} />
                <code className="text-[10px] text-muted-foreground">{c}</code>
              </div>
            )
          )}
          <div className="flex flex-col items-center gap-1.5 bg-wpp-navy p-3">
            <ServiceIcon name="commerce" className="size-10 text-wpp-cream" />
            <code className="text-[10px] text-wpp-cream">text-wpp-cream</code>
          </div>
        </div>
      </section>
    </div>
  ),
};
