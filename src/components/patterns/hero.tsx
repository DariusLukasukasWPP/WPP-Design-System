import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

/**
 * Full-bleed media hero from the home page: min-h-svh image, dark scrim,
 * display headline locked to the bottom with an inverse CTA.
 *
 * Keep the first viewport lean — brand/logo lives in the header above; this
 * band is headline + one CTA + one dominant image.
 */
function MediaHero({
  title,
  ctaLabel = "Get in touch",
  ctaHref = "#",
  imageSrc,
  imageAlt = "",
  className,
  ...props
}: React.ComponentProps<"section"> & {
  title: string
  ctaLabel?: string
  ctaHref?: string
  imageSrc: string
  imageAlt?: string
}) {
  return (
    <section
      data-slot="media-hero"
      aria-labelledby="media-hero-heading"
      className={cn(
        "relative isolate min-h-svh overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 z-1 bg-black/40" />
      <div className="relative z-2 mx-auto flex min-h-svh w-full max-w-layout flex-col items-start justify-end p-6 pb-10 md:pb-16">
        <div className="flex w-full max-w-3xl flex-col items-start gap-6">
          <h1
            id="media-hero-heading"
            className="text-4xl font-light tracking-tight text-wpp-white md:text-5xl xl:text-6xl xl:tracking-tighter"
          >
            {title}
          </h1>
          <a
            href={ctaHref}
            className={cn(
              buttonVariants({ variant: "inverse" }),
              "h-10 w-full md:w-auto md:min-w-40"
            )}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}

/**
 * Expertise / interior page hero: title + subtitle in the content column,
 * then a full-width media frame. Mobile art is portrait (9/16); from `md`
 * up it switches to landscape video aspect — matching the live pillars pages.
 */
function PageHero({
  title,
  subtitle,
  imageSrc,
  mobileImageSrc,
  imageAlt = "",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  title: string
  subtitle?: string
  imageSrc?: string
  mobileImageSrc?: string
  imageAlt?: string
}) {
  return (
    <div data-slot="page-hero" className={cn(className)} {...props}>
      <section className="bg-background pb-8">
        <div className="mx-auto w-full max-w-layout px-6">
          <div className="my-16 flex w-full flex-col gap-4 lg:my-20 lg:w-1/2 lg:gap-6">
            <h1 className="text-4xl font-light tracking-tight text-primary md:text-5xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="text-lg leading-snug text-primary md:text-xl">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {imageSrc ? (
        <section className="bg-background">
          <div className="mx-auto w-full max-w-layout px-6">
            <div className="relative aspect-[9/16] w-full overflow-hidden md:aspect-video">
              <picture>
                {mobileImageSrc ? (
                  <source
                    media="(max-width: 767px)"
                    srcSet={mobileImageSrc}
                  />
                ) : null}
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="size-full object-cover"
                />
              </picture>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  )
}

/**
 * Tonal content band used between heroes and footers. Prefer one job per
 * section: one headline, one short supporting line, then content.
 */
function SectionBand({
  tone = "white",
  width = "layout",
  align = "start",
  className,
  children,
  ...props
}: React.ComponentProps<"section"> & {
  tone?: "white" | "cream" | "navy"
  width?: "layout" | "narrow"
  align?: "start" | "center"
}) {
  return (
    <section
      data-slot="section-band"
      data-tone={tone}
      className={cn(
        "py-12 lg:py-16",
        tone === "white" && "bg-background text-primary",
        tone === "cream" && "bg-wpp-cream text-primary",
        tone === "navy" && "bg-primary text-primary-foreground",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "mx-auto w-full px-6",
          width === "layout" ? "max-w-layout" : "max-w-[900px]",
          align === "center" && "text-center"
        )}
      >
        {children}
      </div>
    </section>
  )
}

export { MediaHero, PageHero, SectionBand }
