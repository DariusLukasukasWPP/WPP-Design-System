import type { Meta, StoryObj } from '@storybook/react-vite';
import { InsightCard } from './insight-card';

const meta = {
  title: 'Patterns/Insight Card',
  component: InsightCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof InsightCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const SAMPLE_IMAGE =
  'https://images.eu.ctfassets.net/mfx1q9pxijyb/7BFI7To1yEeN6C941q34o1/79b071892ec49933478225949a4354ec/HERO_AI_treated.png?w=1200&q=75';

export const Default: Story = {
  args: {
    label: 'Insight',
    title: 'You Need AI to Grow. And Your AI Needs Better Systems',
    description:
      "AI won't fix a broken system. This is how to build one that works.",
    imageSrc: SAMPLE_IMAGE,
    imageAlt: 'Abstract AI systems graphic',
    href: '#',
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export const Grid: Story = {
  args: {
    title: 'You Need AI to Grow. And Your AI Needs Better Systems',
    imageSrc: SAMPLE_IMAGE,
  },
  render: () => (
    <div className="grid gap-8 p-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: 'You Need AI to Grow. And Your AI Needs Better Systems',
          description:
            "AI won't fix a broken system. This is how to build one that works.",
        },
        {
          title: 'Marketing transformation starts with the operating model',
          description:
            'How CMOs redesign people, platforms and process for growth.',
        },
        {
          title: 'From experiments to enterprise AI',
          description:
            'Governance and workflows that turn pilots into capability.',
        },
      ].map((item) => (
        <InsightCard
          key={item.title}
          href="#"
          imageSrc={SAMPLE_IMAGE}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  ),
};
