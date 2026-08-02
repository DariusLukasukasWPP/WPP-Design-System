import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatsStrip } from './stats-strip';

const meta = {
  title: 'Patterns/Stats Strip',
  component: StatsStrip,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof StatsStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stats: [
      {
        value: '50–60%',
        label:
          'faster regional Adobe website rollouts for a global automotive client',
      },
      {
        value: '70%',
        label: 'asset production reduction in early Google AI pilots',
      },
      {
        value: '6',
        label: 'weeks typical Shopify launch versus 6-month industry norm',
      },
      {
        value: '55%',
        label:
          'QSR campaign timeline reduction after 56-day migration to Braze',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-layout px-6 py-8">
        <Story />
      </div>
    ),
  ],
};
