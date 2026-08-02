import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';

const meta = {
  title: 'Forms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Get in touch',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary CTA — orange pill with a navy label, as used on the live site. */
export const Default: Story = {
  args: { variant: 'default' },
};

/** Outlined CTA — 1px navy hairline on a transparent fill. */
export const Outline: Story = {
  args: { variant: 'outline' },
};

/** For placing on navy or over imagery. */
export const Inverse: Story = {
  args: { variant: 'inverse' },
  decorators: [
    (Story) => (
      <div className="rounded bg-wpp-navy p-6">
        <Story />
      </div>
    ),
  ],
};

export const Navy: Story = {
  args: { variant: 'navy' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
};

export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Delete' },
};

export const Link: Story = {
  args: { variant: 'link' },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

/** All CTA variants side by side, matching the site's button family. */
export const BrandSet: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button>Get in touch</Button>
        <Button variant="outline">Find out more</Button>
        <Button variant="navy">Discover more</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3 rounded bg-wpp-navy p-6">
        <Button variant="inverse">Get in touch</Button>
      </div>
    </div>
  ),
};
