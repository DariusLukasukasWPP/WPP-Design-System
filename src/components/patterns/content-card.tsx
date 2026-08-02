import { cn } from "@/lib/utils"

type ContentKind = "insight" | "case-study"

const KIND_LABEL: Record<ContentKind, string> = {
  insight: "Insight",
  "case-study": "Case study",
}

/**
 * Feed / carousel content tile from Partners “The work & insights” (and
 * similar). Covers both Insight and Case study treatments.
 *
 * Prefer this for listing feeds. `InsightCard` remains the compact mega-menu
 * / featured variant (underlined label, 16/10 media).
 */
function ContentCard({
  href = "#",
  kind = "insight",
  label,
  title,
  description,
  imageSrc,
  imageAlt = "",
  className,
  ...props
}: React.ComponentProps<"a"> & {
  kind?: ContentKind
  label?: string
  title: string
  description?: string
  imageSrc: string
  imageAlt?: string
}) {
  const resolvedLabel = label ?? KIND_LABEL[kind]
  const isCaseStudy = kind === "case-study"

  return (
    <a
      data-slot="content-card"
      data-kind={kind}
      href={href}
      className={cn(
        "group flex flex-col gap-4 text-primary no-underline outline-none",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className
      )}
      {...props}
    >
      <div className="relative w-full overflow-hidden rounded-sm aspect-[3/2] sm:aspect-[4/3]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <div
        className={cn(
          "flex flex-col gap-4",
          isCaseStudy && "pr-4 sm:pr-10"
        )}
      >
        <span
          className={cn(
            "text-xs font-medium leading-snug text-primary uppercase",
            !isCaseStudy && "underline decoration-from-font"
          )}
        >
          {resolvedLabel}
        </span>
        <div className="flex flex-col gap-2">
          {isCaseStudy ? (
            <h4 className="text-2xl leading-snug font-light tracking-tight text-primary md:text-3xl">
              {title}
            </h4>
          ) : (
            <p className="line-clamp-2 text-xl leading-snug font-normal tracking-tight text-primary">
              {title}
            </p>
          )}
          {description ? (
            <p
              className={cn(
                "text-base leading-snug text-primary",
                !isCaseStudy && "line-clamp-2 xl:text-sm"
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </a>
  )
}

export { ContentCard, type ContentKind }
