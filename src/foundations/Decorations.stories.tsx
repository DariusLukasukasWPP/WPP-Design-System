import type { Meta, StoryObj } from '@storybook/react-vite';

import pattern1 from '@/assets/decorations/decoration-pattern-1.svg';
import pattern2 from '@/assets/decorations/decoration-pattern-2.svg';
import patternMobile1 from '@/assets/decorations/decoration-pattern-mobile-1.svg';
import patternMobile2 from '@/assets/decorations/decoration-pattern-mobile-2.svg';

const meta = {
  title: 'Foundations/Decorations',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChallengePatterns: Story = {
  render: () => (
    <div className="flex flex-col gap-12 bg-background p-8 text-foreground">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl text-primary">Decorations</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Orange halftone flecks used on Client Challenge cards (
          <code className="rounded bg-muted px-1 text-xs">
            decoration-pattern-1/2.svg
          </code>
          ), taken from expertise pages. Pattern 1 and 2 alternate; each has a
          mobile crop. Consumed via{' '}
          <code className="rounded bg-muted px-1 text-xs">
            ChallengeDecoration
          </code>
          .
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <figure className="flex flex-col gap-3 bg-wpp-cream p-6">
          <figcaption className="text-sm font-medium text-primary">
            Pattern 1 — desktop
          </figcaption>
          <img src={pattern1} alt="" className="h-auto w-full max-w-md" />
          <figcaption className="text-sm font-medium text-primary">
            Pattern 1 — mobile
          </figcaption>
          <img src={patternMobile1} alt="" className="h-auto w-32" />
        </figure>
        <figure className="flex flex-col gap-3 bg-wpp-cream p-6">
          <figcaption className="text-sm font-medium text-primary">
            Pattern 2 — desktop
          </figcaption>
          <img src={pattern2} alt="" className="h-auto w-full max-w-md" />
          <figcaption className="text-sm font-medium text-primary">
            Pattern 2 — mobile
          </figcaption>
          <img src={patternMobile2} alt="" className="h-auto w-32" />
        </figure>
      </div>
    </div>
  ),
};
