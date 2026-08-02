import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'WPP typeface (local woff2). Display type is Light (300) with tight tracking on headings — measured from the live site.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const WEIGHTS = [
  { name: 'Thin', weight: 100 },
  { name: 'Light', weight: 300 },
  { name: 'Regular', weight: 400 },
  { name: 'Medium', weight: 500 },
  { name: 'Bold', weight: 700 },
  { name: 'Black', weight: 900 },
];

const SCALE = [
  { name: 'xs', size: '0.75rem' },
  { name: 'sm', size: '0.875rem' },
  { name: 'base', size: '1rem' },
  { name: 'lg', size: '1.125rem' },
  { name: 'xl', size: '1.25rem' },
  { name: '2xl', size: '1.5rem' },
  { name: '4xl', size: '2rem' },
  { name: '5xl', size: '2.5rem' },
  { name: '6xl', size: '3rem' },
  { name: '8xl', size: '3.5rem' },
];

export const Typeface: Story = {
  render: () => (
    <div className="flex flex-col gap-12 bg-background p-8 text-foreground">
      <header className="flex flex-col gap-2">
        <h1 className="font-heading text-3xl font-medium tracking-tight">
          Typography
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          WPP is the single brand typeface, loaded locally as woff2 across six
          weights with matching italics. It is bound to{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            --font-sans
          </code>
          , so every component inherits it.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-lg font-medium">Weights</h2>
        <div className="flex flex-col gap-3">
          {WEIGHTS.map(({ name, weight }) => (
            <div
              key={weight}
              className="flex items-baseline gap-6 border-b pb-3"
            >
              <span className="w-28 shrink-0 font-mono text-xs text-muted-foreground">
                {name} {weight}
              </span>
              <span className="text-2xl" style={{ fontWeight: weight }}>
                Enterprise Solutions
              </span>
              <span
                className="text-2xl italic"
                style={{ fontWeight: weight }}
              >
                Italic
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-lg font-medium">Scale</h2>
        <div className="flex flex-col gap-3">
          {SCALE.map(({ name, size }) => (
            <div key={name} className="flex items-baseline gap-6 border-b pb-3">
              <span className="w-28 shrink-0 font-mono text-xs text-muted-foreground">
                {name} · {size}
              </span>
              <span style={{ fontSize: size, lineHeight: 1.2 }}>
                The quick brown fox
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
