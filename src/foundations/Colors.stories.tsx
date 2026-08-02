import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Foundations/Colors',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function Swatch({
  name,
  varName,
  hex,
  dark,
}: {
  name: string;
  varName: string;
  hex?: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-16 w-full rounded-lg ring-1 ring-foreground/10"
        style={{ background: `var(${varName})` }}
      />
      <div className="flex flex-col">
        <span className="text-xs font-medium">{name}</span>
        <span className="font-mono text-[11px] text-muted-foreground">
          {hex ?? varName}
        </span>
        {dark && (
          <span className="text-[10px] text-muted-foreground">
            inverts in dark
          </span>
        )}
      </div>
    </div>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-lg font-medium">{title}</h2>
        {description && (
          <p className="max-w-2xl text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {children}
      </div>
    </section>
  );
}

export const Palette: Story = {
  render: () => (
    <div className="flex flex-col gap-12 bg-background p-8 text-foreground">
      <header className="flex flex-col gap-2">
        <h1 className="font-heading text-3xl font-medium tracking-tight">
          Colour
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Layer 1 is the raw WPP brand palette — never reference these directly
          in a component. Layer 2 is the semantic set that components actually
          consume; those are the only tokens that respond to light/dark.
        </p>
      </header>

      <Section
        title="Primary"
        description="Navy is the signature WPP Enterprise Solutions colour and maps to --primary."
      >
        <Swatch name="Navy" varName="--wpp-navy" hex="#000050" />
        <Swatch name="Cream" varName="--wpp-cream" hex="#fafaf0" />
        <Swatch name="White" varName="--wpp-white" hex="#ffffff" />
      </Section>

      <Section title="Secondary tints">
        <Swatch name="Tint 900" varName="--wpp-tint-900" hex="#0a1e78" />
        <Swatch name="Tint 800" varName="--wpp-tint-800" hex="#323caa" />
        <Swatch name="Tint 700" varName="--wpp-tint-700" hex="#6464d2" />
        <Swatch name="Tint 600" varName="--wpp-tint-600" hex="#aa96ff" />
        <Swatch name="Tint 500" varName="--wpp-tint-500" hex="#d2beff" />
        <Swatch name="Tint 400" varName="--wpp-tint-400" hex="#8585b2" />
        <Swatch name="Tint 100" varName="--wpp-tint-100" hex="#f2f0ff" />
      </Section>

      <Section title="Neutrals">
        <Swatch name="Black" varName="--wpp-black" hex="#262626" />
        <Swatch name="Grey 5" varName="--wpp-grey-5" hex="#595959" />
        <Swatch name="Grey 4" varName="--wpp-grey-4" hex="#767676" />
        <Swatch name="Grey 3" varName="--wpp-grey-3" hex="#d9d9d9" />
        <Swatch name="Grey 2" varName="--wpp-grey-2" hex="#f3f3f3" />
        <Swatch name="Dark cream" varName="--wpp-dark-cream" hex="#eeeee4" />
      </Section>

      <Section
        title="Tertiary"
        description="Accent and data-visualisation colours. Each has a 900 (dark) and 500 (light) variant."
      >
        <Swatch name="Orange" varName="--wpp-orange" hex="#ff6400" />
        <Swatch name="Yellow" varName="--wpp-yellow" hex="#ffef00" />
        <Swatch name="Green" varName="--wpp-green" hex="#00c300" />
        <Swatch name="Teal" varName="--wpp-teal" hex="#00dcb4" />
        <Swatch name="Blue" varName="--wpp-blue" hex="#0091ff" />
        <Swatch name="Purple" varName="--wpp-purple" hex="#7800dc" />
        <Swatch name="Red" varName="--wpp-red" hex="#bc0113" />
        <Swatch name="Pink" varName="--wpp-pink" hex="#ff1aa6" />
      </Section>

      <Section
        title="Semantic tokens"
        description="What components consume. These are the only values that change between light and dark."
      >
        <Swatch name="background" varName="--background" dark />
        <Swatch name="foreground" varName="--foreground" dark />
        <Swatch name="primary" varName="--primary" dark />
        <Swatch name="secondary" varName="--secondary" dark />
        <Swatch name="muted" varName="--muted" dark />
        <Swatch name="muted-foreground" varName="--muted-foreground" dark />
        <Swatch name="accent" varName="--accent" dark />
        <Swatch name="destructive" varName="--destructive" dark />
        <Swatch name="border" varName="--border" dark />
        <Swatch name="ring" varName="--ring" dark />
        <Swatch name="card" varName="--card" dark />
        <Swatch name="sidebar" varName="--sidebar" dark />
      </Section>

      <Section
        title="Charts"
        description="Categorical sequence for data visualisation, drawn from the tertiary palette."
      >
        <Swatch name="chart-1" varName="--chart-1" />
        <Swatch name="chart-2" varName="--chart-2" />
        <Swatch name="chart-3" varName="--chart-3" />
        <Swatch name="chart-4" varName="--chart-4" />
        <Swatch name="chart-5" varName="--chart-5" />
      </Section>
    </div>
  ),
};
