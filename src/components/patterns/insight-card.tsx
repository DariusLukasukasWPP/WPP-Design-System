import { cn } from "@/lib/utils"

/**
 * Editorial insight / featured-content tile from the live site mega-menu and
 * insights listings. Not a bordered Card — image + type label + title + deck.
 */
function InsightCard({
  href = "#",
  label = "Insight",
  title,
  description,
  imageSrc,
  imageAlt = "",
  className,
  ...props
}: React.ComponentProps<"a"> & {
  label?: string
  title: string
  description?: string
  imageSrc: string
  imageAlt?: string
}) {
  return (
    <a
      data-slot="insight-card"
      href={href}
      className={cn(
        "group block overflow-hidden rounded-sm text-primary outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className
      )}
      {...props}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xs bg-muted">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="mt-2.5 flex flex-col gap-3">
        <p className="text-xs font-medium leading-snug text-primary uppercase underline decoration-from-font">
          {label}
        </p>
        <div className="flex flex-col gap-2">
          <p className="line-clamp-2 text-xl leading-snug font-normal tracking-tight text-primary">
            {title}
          </p>
          {description ? (
            <p className="line-clamp-2 text-sm leading-snug text-primary/80">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </a>
  )
}

export { InsightCard }
