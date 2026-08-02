import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Foundations/Mobile',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Breakpoint and mobile behaviour notes (header sheet below lg, partner snap scroller, etc.).',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const BREAKPOINTS = [
  { name: 'sm', px: '640px', use: 'Rare — prefer md/lg for layout splits' },
  { name: 'md', px: '768px', use: 'Hero media aspect swap (9/16 → video)' },
  { name: 'lg', px: '1024px', use: 'Primary chrome split — desktop nav appears' },
  { name: 'xl', px: '1440px', use: 'max-w-layout / large type steps' },
  { name: '2xl', px: '1920px', use: 'Full-bleed marketing canvases' },
];

const RULES = [
  {
    title: 'Navigation',
    body: 'Below lg, hide the horizontal nav and header CTA. Offer a 44×44 dot-grid control that opens a full-bleed navy sheet with stacked links + CTA. Desktop mega-menus are not collapsed into the same sheet — keep Solutions expansion as a follow-up.',
  },
  {
    title: 'Gutters',
    body: 'Keep px-6 (24px) at all breakpoints inside max-w-layout. Do not shrink the page gutter on small screens.',
  },
  {
    title: 'Type',
    body: 'Display headlines step down on small screens (roughly text-4xl → md:text-5xl → xl:text-6xl). Do not lock marketing headlines to a single desktop size.',
  },
  {
    title: 'Hero media',
    body: 'Expertise heroes use separate mobile art when provided, framed at aspect 9/16 below md and aspect-video from md up. Home media heroes stay full-bleed min-h-svh with a bottom-locked headline.',
  },
  {
    title: 'CTAs',
    body: 'Primary CTAs may go full-width on the smallest screens (w-full md:w-auto) so the 40px pill stays tappable. Inverse CTAs on imagery stay opaque.',
  },
  {
    title: 'Touch targets',
    body: 'Icon-only controls (menu open/close) are 44×44 (size-11). Accordion rows keep py-5. Do not pack hit areas under ~40px.',
  },
];

export const Rules: Story = {
  render: () => (
    <div className="flex flex-col gap-12 bg-background p-8 text-foreground">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl text-primary">Mobile</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Breakpoints and behaviour measured from enterprisesolutions.wpp.com.
          The critical split for chrome is <strong>lg (1024px)</strong> — not
          md.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium text-primary">Breakpoints</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-lg text-left text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="py-2 pr-4 font-medium">Token</th>
                <th className="py-2 pr-4 font-medium">Width</th>
                <th className="py-2 font-medium">Use on this site</th>
              </tr>
            </thead>
            <tbody>
              {BREAKPOINTS.map((b) => (
                <tr key={b.name} className="border-b border-border">
                  <td className="py-3 pr-4 font-mono text-primary">{b.name}</td>
                  <td className="py-3 pr-4 font-mono text-muted-foreground">
                    {b.px}
                  </td>
                  <td className="py-3 text-primary">{b.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-lg font-medium text-primary">Rules</h2>
        {RULES.map((rule) => (
          <div key={rule.title} className="flex max-w-2xl flex-col gap-1">
            <h3 className="text-base font-medium text-primary">{rule.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {rule.body}
            </p>
          </div>
        ))}
      </section>

      <p className="max-w-2xl text-sm text-muted-foreground">
        In Storybook, resize the canvas below 1024px (or use the viewport
        toolbar) to exercise <code className="rounded bg-muted px-1 text-xs">Patterns/Site Header</code> mobile nav and page-hero aspect swaps.
      </p>
    </div>
  ),
};
