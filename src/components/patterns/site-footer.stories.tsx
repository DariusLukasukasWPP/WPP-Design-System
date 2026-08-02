import type { Meta, StoryObj } from '@storybook/react-vite';
import { SiteFooter } from './site-footer';

const meta = {
  title: 'Patterns/Site Footer',
  component: SiteFooter,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Site footer with navy CTA band, cream contact strip, and sitemap columns — matches the live ES footer.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SiteFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="bg-background">
        <div className="flex h-32 items-end justify-center bg-muted text-sm text-muted-foreground">
          Page content
        </div>
        <Story />
      </div>
    ),
  ],
};
