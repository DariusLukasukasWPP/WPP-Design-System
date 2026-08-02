import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ClientChallengeCard,
  ClientChallengeSection,
} from './client-challenge';

const meta = {
  title: 'Patterns/Client Challenge',
  component: ClientChallengeCard,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof ClientChallengeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const SAMPLE = {
  quote:
    'Our digital estate has grown by acquisition — now we’re stuck with overlapping platforms, inconsistent experiences, and rising costs.',
  help: 'We rationalize complex platform estates into a modern, scalable architecture that supports CX, commerce, CRM, and content as one system. By consolidating redundant platforms, standardizing patterns, and designing for reuse, we reduce complexity and cost while creating a stable foundation for future growth and AI.',
  capabilities: [
    'Platform Rationalization',
    'Architecture',
    'Consolidation',
    'Scalability',
    'Cost Reduction',
    'CX and Commerce Foundation',
  ],
} as const;

export const Card: Story = {
  args: {
    ...SAMPLE,
    pattern: 1,
  },
  decorators: [
    (Story) => (
      <div className="bg-wpp-cream p-8">
        <div className="mx-auto max-w-5xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

export const Stack: Story = {
  args: { ...SAMPLE },
  render: () => (
    <ClientChallengeSection
      challenges={[
        { ...SAMPLE, pattern: 1 },
        {
          pattern: 2,
          quote:
            'We want to personalize and use AI, but our data is scattered across systems and no one fully trusts it.',
          help: 'We build the data backbone your growth system runs on unifying customer, product and interaction data into governed analytics and AI‑ready structures.',
          capabilities: [
            'Data Unification',
            'Identity',
            'AI-readiness',
            'Data Governance',
            'Customer Data',
            'Product Data',
          ],
        },
        {
          pattern: 1,
          quote:
            'Every change to our digital platforms feels risky. Releases are slow, outages are common and teams are afraid to ship.',
          help: 'We modernize your engineering practices and operating model so platforms can evolve quickly without compromising stability.',
          capabilities: [
            'DevOps',
            'CI/CD',
            'Platform Reliability',
            'Observability',
            'Engineering Squads',
            'Continuous Delivery',
          ],
        },
      ]}
    />
  ),
};
