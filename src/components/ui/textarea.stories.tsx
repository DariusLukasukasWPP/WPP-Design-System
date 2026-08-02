import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';

const meta = {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component:
          'Multi-line text field. Match Input styling for form consistency.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'Type your message here.',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { defaultValue: 'This is some sample content in the textarea.' },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'Read-only content.' },
};
