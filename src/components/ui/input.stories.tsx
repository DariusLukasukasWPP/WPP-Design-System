import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';

const meta = {
  title: 'Forms/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Email',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { defaultValue: 'hello@example.com' },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'hello@example.com' },
};

export const Invalid: Story = {
  args: { 'aria-invalid': true, defaultValue: 'not-an-email' },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Password',
    defaultValue: 'supers3cret',
  },
};

export const FileInput: Story = {
  args: { type: 'file', placeholder: undefined },
};
