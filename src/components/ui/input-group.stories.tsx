import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
  InputGroupText,
} from './input-group';
import { SearchIcon, EyeIcon, MailIcon } from 'lucide-react';

const meta = {
  title: 'Forms/InputGroup',
  component: InputGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Input with leading / trailing addons (icons, buttons, text). Password show/hide is a common trailing pattern.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLeadingIcon: Story = {
  render: () => (
    <InputGroup className="w-64">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithTrailingButton: Story = {
  render: () => (
    <InputGroup className="w-64">
      <InputGroupInput type="password" placeholder="Password" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton aria-label="Show password">
          <EyeIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithText: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupAddon>
        <MailIcon />
        <InputGroupText>@</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="username" />
    </InputGroup>
  ),
};
