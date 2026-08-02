import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Foundations/Radius',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const VALUES = [
  {
    name: 'Pill',
    value: '9999px',
    utility: 'rounded-full',
    use: 'Every CTA button',
  },
  {
    name: 'Card / panel',
    value: '4px',
    utility: 'rounded-sm → --radius-md/lg/xl',
    use: 'Cards, menus, inputs, popovers',
  },
  {
    name: 'Small chrome',
    value: '2px',
    utility: 'rounded-xs / --radius-xs',
    use: 'Tight image crops, micro chrome',
  },
];

export const Scale: Story = {
  render: () => (
    <div className="flex flex-col gap-12 bg-background p-8 text-foreground">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl text-primary">Radius</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          A census of the live site found only three radii in use. Stock shadcn
          steps (<code className="rounded bg-muted px-1 text-xs">md/lg/xl</code>
          ) are collapsed onto 4px in{' '}
          <code className="rounded bg-muted px-1 text-xs">@theme</code> so
          components stay on-brand after <code className="rounded bg-muted px-1 text-xs">shadcn add</code>.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-3">
        {VALUES.map((v) => (
          <div key={v.name} className="flex flex-col gap-3">
            <div
              className="flex h-28 items-center justify-center bg-primary text-sm text-primary-foreground"
              style={{ borderRadius: v.value === '9999px' ? '9999px' : v.value }}
            >
              {v.value}
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium text-primary">{v.name}</span>
              <code className="font-mono text-xs text-muted-foreground">
                {v.utility}
              </code>
              <span className="text-xs text-muted-foreground">{v.use}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="max-w-2xl text-sm text-muted-foreground">
        Do not introduce 6 / 8 / 12px corners — they do not appear on the
        marketing site.
      </p>
    </div>
  ),
};
