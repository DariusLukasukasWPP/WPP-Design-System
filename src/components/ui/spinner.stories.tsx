import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './spinner';
import { Button } from './button';

const meta = {
  title: 'Feedback/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component:
          'Indeterminate loading indicator for actions and compact slots.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <Button disabled>
      <Spinner />
      Please wait
    </Button>
  ),
};
