import { cn } from "@/lib/utils"

export type CaseStudyStat = {
  value: string
  label: string
}

/**
 * Case-study spotlight from expertise pages: cream panel, eyebrow, display
 * headline, metric row, and a landscape media frame.
 */
function CaseStudySpotlight({
  eyebrow = "Case Study",
  title,
  stats = [],
  imageSrc,
  imageAlt = "",
  className,
  ...props
}: React.ComponentProps<"section"> & {
  eyebrow?: string
  title: string
  stats?: readonly CaseStudyStat[]
  imageSrc: string
  imageAlt?: string
}) {
  return (
    <section
      data-slot="case-study-spotlight"
      aria-labelledby="case-study-heading"
      className={cn("py-12 lg:py-16", className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-layout px-6 lg:px-28">
        <div
          className={cn(
            "relative z-2 grid grid-cols-1 gap-11 bg-wpp-cream px-4 pt-8 pb-4 text-primary",
            "lg:min-h-[31rem] lg:grid-cols-10 lg:items-end lg:gap-0 lg:p-12"
          )}
        >
          <div className="flex flex-col justify-between gap-11 lg:col-span-5 lg:gap-0 lg:self-stretch">
            <div className="flex flex-col gap-4 lg:pb-12">
              <span className="text-xs font-medium tracking-wide text-primary uppercase">
                {eyebrow}
              </span>
              <h2
                id="case-study-heading"
                className="text-2xl leading-snug font-light tracking-tight md:text-3xl"
              >
                {title}
              </h2>
            </div>

            {stats.length > 0 ? (
              <ul
                role="list"
                className="flex w-full flex-col flex-nowrap gap-4 lg:flex-row lg:gap-6 xl:gap-14"
              >
                {stats.map((stat) => (
                  <li
                    key={stat.label}
                    role="listitem"
                    aria-label={`${stat.value} — ${stat.label}`}
                    className="flex flex-col gap-2"
                  >
                    <span
                      aria-hidden="true"
                      className="text-4xl font-light tracking-tight text-primary uppercase xl:text-7xl"
                    >
                      {stat.value}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-xs leading-snug text-primary xl:text-sm"
                    >
                      {stat.label}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="w-full overflow-hidden lg:col-span-4 lg:col-start-7">
            <div className="relative aspect-[16/9]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="absolute inset-0 size-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { CaseStudySpotlight }
