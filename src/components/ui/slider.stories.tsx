import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './slider';

const meta = {
  title: 'Forms/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component:
          'Range input for numeric values. Provide a visible value label when precision matters.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <Slider defaultValue={[50]} />
    </div>
  ),
};

export const Range: Story = {
  render: () => (
    <div className="w-64">
      <Slider defaultValue={[25, 75]} />
    </div>
  ),
};

export const Stepped: Story = {
  render: () => (
    <div className="w-64">
      <Slider defaultValue={[20]} step={10} />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-64">
      <Slider defaultValue={[40]} disabled />
    </div>
  ),
};
