import type { Meta, StoryObj } from '@storybook/react-vite';
import { MediaHero, PageHero, SectionBand } from './hero';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const meta = {
  title: 'Patterns/Hero & Section',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Page opening compositions: full-bleed MediaHero (home), PageHero (expertise pillars), and SectionBand content wrappers.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const HERO_IMAGE =
  'https://images.eu.ctfassets.net/mfx1q9pxijyb/7BFI7To1yEeN6C941q34o1/79b071892ec49933478225949a4354ec/HERO_AI_treated.png?w=1920&q=75';

const PILLAR_DESKTOP =
  'https://images.eu.ctfassets.net/mfx1q9pxijyb/44FZtyVDDDbqqdMi6LpszO/ac849149c41bafd52aaff03787016c35/pillars_ConsultingHero_Desktop.png?w=1600&q=75';

const PILLAR_MOBILE =
  'https://images.eu.ctfassets.net/mfx1q9pxijyb/FNGXfjjBQ1kXkybgKs1dz/8a9ad933843d9b84d1e4c7444c73c531/pillars_ConsultingHero_Mobile.png?w=800&q=75';

export const Media: Story = {
  name: 'Media hero (home)',
  render: () => (
    <MediaHero
      title="We solve complex challenges for global leaders. Let’s solve yours."
      ctaLabel="Get in touch"
      imageSrc={HERO_IMAGE}
      imageAlt=""
    />
  ),
};

export const Page: Story = {
  name: 'Page hero (expertise)',
  render: () => (
    <PageHero
      title="Consulting"
      subtitle="From marketing transformation to enterprise growth"
      imageSrc={PILLAR_DESKTOP}
      mobileImageSrc={PILLAR_MOBILE}
      imageAlt="Abstract illustration representing Consulting"
    />
  ),
};

export const SectionBands: Story = {
  name: 'Section bands',
  render: () => (
    <div>
      <SectionBand tone="white" width="narrow" align="center">
        <h2 className="text-3xl font-light tracking-tight">
          Redesigning marketing as an adaptive, connected growth system.
        </h2>
        <p className="mt-6 text-xl font-light leading-snug tracking-tight xl:text-2xl">
          WPP Enterprise Solutions Consulting helps CMOs and growth leaders
          redesign how marketing and growth happens.
        </p>
      </SectionBand>
      <SectionBand tone="cream">
        <h2 className="text-3xl font-light">Core products and services</h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed">
          A new kind of transformation partner that fuses thinking and doing.
        </p>
      </SectionBand>
      <SectionBand tone="navy">
        <h2 className="text-3xl font-light text-primary-foreground">
          Ready to build your own growth system?
        </h2>
        <a
          href="#"
          className={cn(buttonVariants({ variant: 'inverse' }), 'mt-8 inline-flex')}
        >
          Get in touch
        </a>
      </SectionBand>
    </div>
  ),
};
