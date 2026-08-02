import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertCircleIcon, CheckCircle2Icon } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from './alert';

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          'Inline status message with optional icon, title, and description. Use for page-level notices, not transient toasts.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert className="w-96">
      <CheckCircle2Icon />
      <AlertTitle>Success! Your changes have been saved.</AlertTitle>
      <AlertDescription>
        This is an alert with an icon, title and description.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-96">
      <AlertCircleIcon />
      <AlertTitle>Unable to process your payment.</AlertTitle>
      <AlertDescription>
        Please verify your billing information and try again.
      </AlertDescription>
    </Alert>
  ),
};
