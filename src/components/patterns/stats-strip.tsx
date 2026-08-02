import { cn } from "@/lib/utils"

export type StatItem = {
  value: string
  label: string
  /** Accessible name; defaults to “{value} — {label}”. */
  ariaLabel?: string
}

/**
 * Bordered metrics strip from the Partners page (and similar marketing pages).
 * Stacks with top rules on small screens; from ~690px becomes a horizontal
 * row with left rules between items.
 */
function StatsStrip({
  stats,
  className,
  ...props
}: React.ComponentProps<"section"> & {
  stats: readonly StatItem[]
}) {
  return (
    <section
      data-slot="stats-strip"
      aria-label="Statistics"
      className={cn("@container/stats mx-auto max-w-screen-xl py-8", className)}
      {...props}
    >
      <ul
        role="list"
        className={cn(
          "flex flex-col items-stretch gap-4",
          "@[690px]/stats:flex-row @[690px]/stats:flex-wrap @[690px]/stats:items-start @[690px]/stats:justify-start @[690px]/stats:gap-x-0 @[690px]/stats:gap-y-8"
        )}
      >
        {stats.map((stat) => (
          <li
            key={`${stat.value}-${stat.label}`}
            role="listitem"
            aria-label={stat.ariaLabel ?? `${stat.value} — ${stat.label}`}
            className={cn(
              "flex w-full flex-col items-start justify-between border-t border-border py-6",
              "@[690px]/stats:min-h-32 @[690px]/stats:flex-1 @[690px]/stats:border-t-0 @[690px]/stats:border-l @[690px]/stats:px-6 @[690px]/stats:py-3",
              "lg:border-t-0 lg:border-l lg:px-6",
              "@[960px]/stats:min-h-[11.5rem]"
            )}
          >
            <span
              aria-hidden="true"
              className="mb-1 text-3xl font-light tracking-tight text-primary uppercase lg:mb-0 @[690px]/stats:mb-0 md:text-4xl"
            >
              {stat.value}
            </span>
            <span
              aria-hidden="true"
              className="text-base leading-snug text-primary"
            >
              {stat.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export { StatsStrip }
