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
  parameters: {
    docs: {
      description: {
        story:
          'Homepage partner attribution from enterprisesolutions.wpp.com. Resize below md for the horizontal snap scroller + pill CTA.',
      },
    },
  },
};
