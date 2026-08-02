import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './toggle';
import { BoldIcon } from 'lucide-react';

const meta = {
  title: 'Forms/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component:
          'Pressed / unpressed button toggle. Prefer Switch for settings that take effect immediately.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    children: <BoldIcon />,
    'aria-label': 'Toggle bold',
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: 'default' },
};

export const Outline: Story = {
  args: { variant: 'outline' },
};

export const WithText: Story = {
  args: { children: 'Bold', 'aria-label': undefined },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle size="sm" aria-label="Small">
        <BoldIcon />
      </Toggle>
      <Toggle size="default" aria-label="Default">
        <BoldIcon />
      </Toggle>
      <Toggle size="lg" aria-label="Large">
        <BoldIcon />
      </Toggle>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
};
