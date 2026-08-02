import type { Meta, StoryObj } from '@storybook/react-vite'

import bee01 from '@/assets/illustrations/WPPOpen_Bee-01.png'
import bee02 from '@/assets/illustrations/WPPOpen_Bee-02.png'
import bee03 from '@/assets/illustrations/WPPOpen_Bee-03.png'
import coral01 from '@/assets/illustrations/WPPOpen_Coral-01.png'
import coral02 from '@/assets/illustrations/WPPOpen_Coral-02.png'
import coral03 from '@/assets/illustrations/WPPOpen_Coral-03.png'
import crystalV2_01 from '@/assets/illustrations/WPPOpen_Crystal_V2-01.png'
import crystalV2_02 from '@/assets/illustrations/WPPOpen_Crystal_V2-02.png'
import crystalV2_03 from '@/assets/illustrations/WPPOpen_Crystal_V2-03.png'
import crystalV3_01 from '@/assets/illustrations/WPPOpen_Crystal_V3-01.png'
import crystalV3_02 from '@/assets/illustrations/WPPOpen_Crystal_V3-02.png'
import fabric01 from '@/assets/illustrations/WPPOpen_Fabric-01.png'
import fabric02 from '@/assets/illustrations/WPPOpen_Fabric-02.png'
import fabric03 from '@/assets/illustrations/WPPOpen_Fabric-03.png'
import mountain01 from '@/assets/illustrations/WPPOpen_Mountain-01.png'
import mountain02 from '@/assets/illustrations/WPPOpen_Mountain-02.png'
import mountain03 from '@/assets/illustrations/WPPOpen_Mountain-03.png'
import rocks01 from '@/assets/illustrations/WPPOpen_Rocks_V2-01.png'
import rocks02 from '@/assets/illustrations/WPPOpen_Rocks_V2-02.png'
import rocks03 from '@/assets/illustrations/WPPOpen_Rocks_V2-03.png'

const meta = {
  title: 'Foundations/Illustrations',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'WPP Open dot-illustration stills for page / section backgrounds and media. Local PNGs in src/assets/illustrations. Prefer Generator V2 when creating new art (image + video export).',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

type Frame = { file: string; src: string; /** Pale still — show on navy so it reads. */ onDark?: boolean }

const SERIES: { name: string; note?: string; frames: Frame[] }[] = [
  {
    name: 'Bee',
    frames: [
      { file: 'WPPOpen_Bee-01.png', src: bee01 },
      { file: 'WPPOpen_Bee-02.png', src: bee02, onDark: true },
      { file: 'WPPOpen_Bee-03.png', src: bee03 },
    ],
  },
  {
    name: 'Coral',
    frames: [
      { file: 'WPPOpen_Coral-01.png', src: coral01 },
      { file: 'WPPOpen_Coral-02.png', src: coral02 },
      { file: 'WPPOpen_Coral-03.png', src: coral03, onDark: true },
    ],
  },
  {
    name: 'Crystal V2',
    frames: [
      { file: 'WPPOpen_Crystal_V2-01.png', src: crystalV2_01 },
      { file: 'WPPOpen_Crystal_V2-02.png', src: crystalV2_02 },
      { file: 'WPPOpen_Crystal_V2-03.png', src: crystalV2_03, onDark: true },
    ],
  },
  {
    name: 'Crystal V3',
    note: 'Two-frame set (no -03).',
    frames: [
      { file: 'WPPOpen_Crystal_V3-01.png', src: crystalV3_01 },
      { file: 'WPPOpen_Crystal_V3-02.png', src: crystalV3_02 },
    ],
  },
  {
    name: 'Fabric',
    frames: [
      { file: 'WPPOpen_Fabric-01.png', src: fabric01 },
      { file: 'WPPOpen_Fabric-02.png', src: fabric02 },
      { file: 'WPPOpen_Fabric-03.png', src: fabric03, onDark: true },
    ],
  },
  {
    name: 'Mountain',
    frames: [
      { file: 'WPPOpen_Mountain-01.png', src: mountain01 },
      { file: 'WPPOpen_Mountain-02.png', src: mountain02, onDark: true },
      { file: 'WPPOpen_Mountain-03.png', src: mountain03 },
    ],
  },
  {
    name: 'Rocks V2',
    frames: [
      { file: 'WPPOpen_Rocks_V2-01.png', src: rocks01 },
      { file: 'WPPOpen_Rocks_V2-02.png', src: rocks02, onDark: true },
      { file: 'WPPOpen_Rocks_V2-03.png', src: rocks03 },
    ],
  },
]

function SeriesGrid({
  name,
  note,
  frames,
}: {
  name: string
  note?: string
  frames: Frame[]
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg text-primary">{name}</h2>
        {note ? (
          <p className="text-sm text-muted-foreground">{note}</p>
        ) : null}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {frames.map((frame) => (
          <figure
            key={frame.file}
            className={
              frame.onDark
                ? 'flex flex-col gap-2 overflow-hidden rounded-sm bg-primary'
                : 'flex flex-col gap-2 overflow-hidden rounded-sm bg-wpp-cream'
            }
          >
            <img
              src={frame.src}
              alt=""
              className="aspect-square w-full object-cover"
            />
            <figcaption className="px-3 pb-3">
              <code
                className={
                  frame.onDark
                    ? 'text-[10px] break-all text-primary-foreground/70'
                    : 'text-[10px] break-all text-muted-foreground'
                }
              >
                {frame.file}
              </code>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export const Catalogue: Story = {
  name: 'Catalogue',
  render: () => (
    <div className="flex flex-col gap-12 bg-background p-8 text-foreground">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl text-primary">Illustrations</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Brand “WPP Open” dot illustrations for full-bleed heroes, section
          bands, and decorative media. Import from{' '}
          <code className="rounded bg-muted px-1 text-xs">
            @/assets/illustrations/
          </code>
          . These are fixed artwork — do not recolour, stretch, or hotlink CDN
          copies. Prefer a local file so Storybook and production stay in sync.
        </p>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Frames in a series (-01 / -02 / -03) are alternate stills of the same
          motif — pick one per surface, or sequence them for motion. Pale stills
          that wash out on cream are shown on navy in this gallery. See{' '}
          <strong>Generators</strong> to create new stills or video.
        </p>
      </header>

      {SERIES.map((series) => (
        <SeriesGrid key={series.name} {...series} />
      ))}
    </div>
  ),
}

export const AsBackground: Story = {
  name: 'As background',
  render: () => (
    <div className="flex flex-col gap-8 bg-background p-8 text-foreground">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl text-primary">As background</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Typical use: full-bleed image behind a navy or cream content band.
          Keep type in semantic tokens (
          <code className="rounded bg-muted px-1 text-xs">text-primary-foreground</code>{' '}
          on dark overlays). Do not invent purple/glow treatments on top of
          these assets.
        </p>
      </header>

      <div className="relative min-h-[28rem] overflow-hidden rounded-sm">
        <img
          src={crystalV2_01}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/55" />
        <div className="relative flex h-full min-h-[28rem] max-w-xl flex-col justify-end gap-4 p-8 md:p-12">
          <p className="text-xs font-medium tracking-wide text-primary-foreground/80 uppercase">
            Example band
          </p>
          <h2 className="text-3xl font-light tracking-tight text-primary-foreground md:text-4xl">
            Illustration as page atmosphere
          </h2>
          <p className="text-base text-primary-foreground/90">
            Crystal V2 · WPPOpen_Crystal_V2-01.png with a navy scrim.
          </p>
        </div>
      </div>
    </div>
  ),
}

export const Generators: Story = {
  render: () => (
    <div className="flex flex-col gap-8 bg-background p-8 text-foreground">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl text-primary">Dot illustration generators</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Standalone HTML tools that turn an uploaded image (or video in V2)
          into the WPP Enterprise Solutions halftone-dot look. Export stills
          into{' '}
          <code className="rounded bg-muted px-1 text-xs">
            src/assets/illustrations/
          </code>{' '}
          when you want them in the catalogue. Prefer <strong>V2</strong> for
          new work.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="flex flex-col gap-3 rounded-sm border border-border p-6">
          <h2 className="text-lg text-primary">Generator V1</h2>
          <p className="text-sm text-muted-foreground">
            Image → PNG / SVG. Baseline controls for density, colour, and
            export. Kept for parity with older brand workflows.
          </p>
          <code className="text-[10px] break-all text-muted-foreground">
            WPP_Enterprise_DotIllustratorGenerator.html
          </code>
          <a
            href="/brand-illustrations/WPP_Enterprise_DotIllustratorGenerator.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Open V1 in a new tab
          </a>
        </article>

        <article className="flex flex-col gap-3 rounded-sm border border-border bg-wpp-cream p-6">
          <p className="text-xs font-medium tracking-wide text-primary/80 uppercase">
            Preferred
          </p>
          <h2 className="text-lg text-primary">Generator V2</h2>
          <p className="text-sm text-muted-foreground">
            Extends V1 with video upload, playback transport, frame-rate /
            max-frame export settings, and Download Video (WebM / MP4 via
            WebCodecs). Use this when you need motion or finer export control.
          </p>
          <code className="text-[10px] break-all text-muted-foreground">
            WPP_Enterprise_DotIllustratorGeneratorV2.html
          </code>
          <a
            href="/brand-illustrations/WPP_Enterprise_DotIllustratorGeneratorV2.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Open V2 in a new tab
          </a>
        </article>
      </div>
    </div>
  ),
}
