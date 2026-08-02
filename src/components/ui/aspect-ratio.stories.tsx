import type { Meta, StoryObj } from '@storybook/react-vite';
import { AspectRatio } from './aspect-ratio';

const meta = {
  title: 'Layout/AspectRatio',
  component: AspectRatio,
  parameters: {
    docs: {
      description: {
        component:
          'Locks child media to a ratio (e.g. 16/9). Useful in cards and heroes so images don’t jump layout.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    ratio: 16 / 9,
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Widescreen: Story = {
  render: () => (
    <div className="w-80">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
        <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
          16:9
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  render: () => (
    <div className="w-60">
      <AspectRatio ratio={1} className="overflow-hidden rounded-lg bg-muted">
        <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
          1:1
        </div>
      </AspectRatio>
    </div>
  ),
};
