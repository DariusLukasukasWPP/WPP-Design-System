import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './separator';

const meta = {
  title: 'Layout/Separator',
  component: Separator,
  parameters: {
    docs: {
      description: {
        component:
          'Horizontal or vertical rule for dividing content. Prefer semantic spacing when a line isn’t needed.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-64">
      <div className="text-sm">Section one</div>
      <Separator className="my-3" />
      <div className="text-sm">Section two</div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-3 text-sm">
      <span>Blog</span>
      <Separator orientation="vertical" />
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Source</span>
    </div>
  ),
};
