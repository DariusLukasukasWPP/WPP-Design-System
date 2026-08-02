import type { Meta, StoryObj } from '@storybook/react-vite';
import { SiteHeader } from './site-header';

const meta = {
  title: 'Patterns/Site Header',
  component: SiteHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Global site header. Desktop: wordmark + nav + CTA. Below lg: dot-grid opens a full-bleed navy sheet. Use tone="dark" on navy / imagery.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SiteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnDark: Story = {
  args: { tone: 'dark' },
  parameters: {
    docs: {
      description: {
        story:
          'Resize the viewport below 1024px to reveal the dot-grid menu control.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-48 bg-primary">
        <Story />
      </div>
    ),
  ],
};

export const OnLight: Story = {
  args: { tone: 'light' },
  decorators: [
    (Story) => (
      <div className="min-h-48 bg-wpp-cream">
        <Story />
      </div>
    ),
  ],
};

export const WithPageChrome: Story = {
  name: 'With page (scroll)',
  args: { tone: 'dark' },
  decorators: [
    (Story) => (
      <div className="bg-background">
        <div className="sticky top-0 z-50">
          <Story />
        </div>
        <div className="flex min-h-[70vh] items-center justify-center bg-wpp-cream px-6 text-center text-sm text-muted-foreground">
          Resize below 1024px and open the menu — page content sits under the
          fixed header height.
        </div>
      </div>
    ),
  ],
};
