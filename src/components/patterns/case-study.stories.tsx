import type { Meta, StoryObj } from '@storybook/react-vite';
import { CaseStudySpotlight } from './case-study';

const meta = {
  title: 'Patterns/Case Study',
  component: CaseStudySpotlight,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof CaseStudySpotlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    eyebrow: 'Case Study',
    title:
      "Designing and implementing a complete reorganization of Wendy’s digital team from channel-focused layers to journey-aligned autonomous squads.",
    stats: [
      { value: '20%', label: 'growth in monthly active users' },
      { value: '16%', label: 'increase in purchase frequency' },
      { value: '40%', label: 'reduction in downtime' },
    ],
    imageSrc:
      'https://images.eu.ctfassets.net/mfx1q9pxijyb/4iBHmDr0YUTefNyh5xxxLa/d14d6de211aec1079c30ac27212ecccf/Wendy-s_hero_2.jpg?w=1200&q=75',
    imageAlt:
      "Illuminated Wendy's storefront sign at night",
  },
};
