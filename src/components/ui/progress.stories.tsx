import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './progress';

const meta = {
  title: 'Feedback/Progress',
  component: Progress,
  parameters: {
    docs: {
      description: {
        component:
          'Determinate progress bar. Fill uses the brand CTA orange.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    value: 40,
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-64">
      <Progress {...args} />
    </div>
  ),
};

export const Complete: Story = {
  args: { value: 100 },
  render: (args) => (
    <div className="w-64">
      <Progress {...args} />
    </div>
  ),
};
