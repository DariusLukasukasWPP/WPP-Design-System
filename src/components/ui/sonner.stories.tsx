import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from 'sonner';
import { Toaster } from './sonner';
import { Button } from './button';

const meta = {
  title: 'Feedback/Sonner',
  component: Toaster,
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <Toaster />
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => toast('Event has been created')}>
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success('Changes saved successfully')}
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.error('Something went wrong')}
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.warning('This action cannot be undone')}
        >
          Warning
        </Button>
      </div>
    </div>
  ),
};
