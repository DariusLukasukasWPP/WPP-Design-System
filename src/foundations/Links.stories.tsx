import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '@/components/ui/link';
import { WppArrow } from '@/components/ui/wpp-icon';

const meta = {
  title: 'Foundations/Links',
  component: Link,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Catalogue: Story = {
  render: () => (
    <div className="flex flex-col gap-12 bg-background p-8 text-foreground">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl text-primary">Links</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Two hover treatments from the live site. The dotted underline is
          intentional brand styling — do not “fix” it to a solid rule.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium text-primary">Nav</h2>
        <p className="max-w-xl text-sm text-muted-foreground">
          Header links (Work / Insights / Partners / About). Large
          underline-offset, decoration-2 dotted on hover.
        </p>
        <div className="flex flex-wrap gap-1 bg-wpp-cream p-4">
          {['Solutions', 'Work', 'Insights', 'Partners', 'About us'].map(
            (label) => (
              <Link key={label} href="#" variant="nav" className="px-4 py-2">
                {label}
              </Link>
            )
          )}
        </div>
        <div className="flex flex-wrap gap-1 bg-primary p-4">
          {['Solutions', 'Work', 'Insights', 'Partners', 'About us'].map(
            (label) => (
              <Link
                key={label}
                href="#"
                variant="nav"
                tone="white"
                className="px-4 py-2"
              >
                {label}
              </Link>
            )
          )}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium text-primary">Inline</h2>
        <p className="max-w-xl text-sm text-muted-foreground">
          Footer sitemap and text CTAs. Uses{' '}
          <code className="rounded bg-muted px-1 text-xs">hover-dotted</code>.
        </p>
        <div className="flex flex-col gap-4 bg-wpp-cream p-6">
          <Link href="#">
            Let&apos;s connect
            <WppArrow className="size-3" />
          </Link>
          <Link href="#">Consulting</Link>
          <Link href="#">Customer Experience</Link>
        </div>
      </section>
    </div>
  ),
};
