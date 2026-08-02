import type { Meta, StoryObj } from '@storybook/react-vite';
import { AuthorCarousel, AuthorCard } from './author-carousel';

const meta = {
  title: 'Patterns/Author Carousel',
  component: AuthorCarousel,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof AuthorCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const ALAN = {
  name: 'Alan Davies',
  role: 'Global Consulting Lead',
  bio: 'Alan Davies is the Consulting Lead for WPP Enterprise Solutions. He helps organizations address growth, transformation, and performance challenges across marketing, customer experience, product, sales, data and AI.',
  href: '#',
  linkedInHref: 'https://www.linkedin.com/in/alan-davies-0238a/',
} as const;

export const Default: Story = {
  args: {
    authors: [ALAN],
    shareUrl:
      'https://enterprisesolutions.wpp.com/en/insights/why-enterprise-transformations-fail-to-produce-growth',
  },
};

export const Multiple: Story = {
  args: {
    shareUrl:
      'https://enterprisesolutions.wpp.com/en/insights/why-enterprise-transformations-fail-to-produce-growth',
    authors: [
      ALAN,
      {
        name: 'Louise Coupe',
        role: 'Managing Partner, Growth Strategy',
        bio: 'Louise helps clients define where growth will come from and what needs to transform to capture it.',
        href: '#',
      },
    ],
  },
};

export const CardOnly: Story = {
  args: {
    authors: [ALAN],
  },
  render: () => (
    <div className="bg-wpp-tint-100 p-8">
      <AuthorCard {...ALAN} />
    </div>
  ),
};
