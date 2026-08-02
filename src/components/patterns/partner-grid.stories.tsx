import type { Meta, StoryObj } from '@storybook/react-vite';
import { PartnerGrid } from './partner-grid';

const meta = {
  title: 'Patterns/Partner Grid',
  component: PartnerGrid,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnerGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Attribution (homepage)',
  args: { variant: 'attribution' },
  parameters: {
    docs: {
      description: {
        story:
          'Homepage: cream band, white cells, orange CTA. Resize below md for the snap scroller + pill CTA.',
      },
    },
  },
};

export const Directory: Story = {
  name: 'Directory (/partners)',
  args: { variant: 'directory' },
  parameters: {
    docs: {
      description: {
        story:
          'Partners page: white band, cream cells, outline Load more — no orange CTA tile.',
      },
    },
  },
};
