import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Foundations/Spacing',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const STEPS = [
  { name: '1', rem: '0.25rem', px: '4px', use: 'Tight chrome (icon gaps)' },
  { name: '2', rem: '0.5rem', px: '8px', use: 'Default stack gap — most common on the site' },
  { name: '3', rem: '0.75rem', px: '12px', use: 'Compact groups' },
  { name: '4', rem: '1rem', px: '16px', use: 'Nav link padding, card spacing' },
  { name: '5', rem: '1.25rem', px: '20px', use: 'Accordion row padding (py-5)' },
  { name: '6', rem: '1.5rem', px: '24px', use: 'Page gutter (px-6), section stacks' },
  { name: '8', rem: '2rem', px: '32px', use: 'Larger section gaps' },
  { name: '10', rem: '2.5rem', px: '40px', use: 'Footer / band vertical rhythm' },
  { name: '14', rem: '3.5rem', px: '56px', use: 'Contact strip column gap' },
  { name: '16', rem: '4rem', px: '64px', use: 'Section breathing room' },
  { name: '20', rem: '5rem', px: '80px', use: 'Footer band top padding' },
];

export const Scale: Story = {
  render: () => (
    <div className="flex flex-col gap-12 bg-background p-8 text-foreground">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl text-primary">Spacing</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          The live site uses Tailwind&apos;s default spacing scale. These are
          the steps that show up most often in a census of home + expertise
          pages — prefer them over one-off values.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium text-primary">Page chrome</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <ChromeToken
            name="Page gutter"
            value="px-6 (24px)"
            note="Horizontal inset inside max-w-layout"
          />
          <ChromeToken
            name="Content width"
            value="max-w-layout"
            note="1440px — matches --breakpoint-xl"
          />
          <ChromeToken
            name="Header height"
            value="85px"
            note="--header-height / fixed top bar"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium text-primary">Scale</h2>
        <div className="flex flex-col gap-3">
          {STEPS.map((s) => (
            <div key={s.name} className="flex items-center gap-4">
              <div
                className="shrink-0 bg-primary"
                style={{ width: s.rem, height: '1.5rem' }}
              />
              <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-3 gap-y-0.5">
                <code className="text-sm font-medium text-primary">
                  {s.name}
                </code>
                <span className="font-mono text-xs text-muted-foreground">
                  {s.rem} / {s.px}
                </span>
                <span className="text-sm text-muted-foreground">{s.use}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium text-primary">Gutter demo</h2>
        <div className="border border-border bg-wpp-cream">
          <div className="mx-auto flex max-w-layout items-center justify-between px-6 py-5">
            <span className="text-sm text-primary">max-w-layout + px-6</span>
            <span className="text-xs text-muted-foreground">
              Same shell as header / footer
            </span>
          </div>
        </div>
      </section>
    </div>
  ),
};

function ChromeToken({
  name,
  value,
  note,
}: {
  name: string;
  value: string;
  note: string;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-sm border border-border p-4">
      <span className="text-sm font-medium text-primary">{name}</span>
      <code className="font-mono text-xs text-primary">{value}</code>
      <span className="text-xs text-muted-foreground">{note}</span>
    </div>
  );
}
