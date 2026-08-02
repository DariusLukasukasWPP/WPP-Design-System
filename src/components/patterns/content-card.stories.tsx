import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContentCard } from './content-card';

const meta = {
  title: 'Patterns/Content Card',
  component: ContentCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof ContentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const INSIGHT_IMAGE =
  'https://images.eu.ctfassets.net/mfx1q9pxijyb/1kR7kCk6EBcY80chUf1u5N/fbc2b28258c20e8d38b6cffc825e67bf/1._HERO_growth_systems_final.png?w=900&q=75';

const CASE_IMAGE =
  'https://images.eu.ctfassets.net/mfx1q9pxijyb/3RanSwiQcSsMXHDs3R0K5H/7dfcbdf460a1ab84572e26cb71241c0b/ikea-casestudy-hero.png?w=900&q=75';

export const Insight: Story = {
  args: {
    kind: 'insight',
    href: '#',
    title: 'Why Enterprise Transformations Fail to Produce Growth',
    description:
      'Growth isn’t stalling because of bad strategy. Jeff Geheb on why ownership is the real problem, and what to do about it.',
    imageSrc: INSIGHT_IMAGE,
    imageAlt: 'Abstract geometric glass and copper shapes',
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export const CaseStudy: Story = {
  args: {
    kind: 'case-study',
    href: '#',
    title: 'IKEA',
    description:
      "Multiple platforms, markets and 100M+ customers. Find out how we unified IKEA's global data to boost marketing effectiveness in just 18 months.",
    imageSrc: CASE_IMAGE,
    imageAlt: "Person carrying an IKEA FRAKTA tote bag",
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export const Feed: Story = {
  args: {
    kind: 'insight',
    title: 'Feed',
    imageSrc: INSIGHT_IMAGE,
  },
  render: () => (
    <div className="grid gap-8 p-8 sm:grid-cols-2 lg:grid-cols-3">
      <ContentCard
        kind="insight"
        href="#"
        title="Why Enterprise Transformations Fail to Produce Growth"
        description="Growth isn’t stalling because of bad strategy."
        imageSrc={INSIGHT_IMAGE}
      />
      <ContentCard
        kind="case-study"
        href="#"
        title="IKEA"
        description="Multiple platforms, markets and 100M+ customers."
        imageSrc={CASE_IMAGE}
      />
      <ContentCard
        kind="insight"
        href="#"
        title="You Need AI to Grow. And Your AI Needs Better Systems"
        description="AI won't fix a broken system. This is how to build one that works."
        imageSrc={INSIGHT_IMAGE}
      />
    </div>
  ),
};
