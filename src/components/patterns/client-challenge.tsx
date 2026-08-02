import { cn } from "@/lib/utils"
import {
  ChallengeDecoration,
  type DecorationPattern,
} from "@/components/patterns/challenge-decoration"

export type ClientChallenge = {
  quote: string
  help: string
  capabilities?: readonly string[]
  /** Alternating orange fleck motif — 1 and 2 on the live expertise pages. */
  pattern?: DecorationPattern
}

/**
 * “CLIENT CHALLENGE / HOW WE HELP” card from expertise pages
 * (e.g. engineering-platforms). White panel on a cream band, quote + body,
 * capability chips, and a decorative pattern fleck.
 */
function ClientChallengeCard({
  quote,
  help,
  capabilities = [],
  pattern = 1,
  className,
  ...props
}: React.ComponentProps<"article"> & ClientChallenge) {
  return (
    <article
      data-slot="client-challenge-card"
      className={cn(
        "relative grid grid-cols-1 gap-5 bg-background px-6 py-10 lg:grid-cols-10 lg:gap-3 lg:px-0",
        className
      )}
      {...props}
    >
      <div className="relative flex flex-col gap-4 lg:col-span-5 lg:ml-10 lg:pb-48">
        <p className="text-xs font-medium tracking-wide text-primary uppercase">
          Client challenge
        </p>
        <div className="flex h-full flex-col justify-between">
          <blockquote>
            <p className="text-balance text-2xl leading-snug font-light tracking-tight text-primary md:text-3xl before:content-['“'] after:content-['”']">
              {quote}
            </p>
          </blockquote>
          <ChallengeDecoration pattern={pattern} />
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:col-span-3 lg:col-start-7">
        <p className="text-xs font-medium tracking-wide text-primary uppercase lg:pt-48">
          How we help
        </p>
        <p className="text-base leading-relaxed text-primary">{help}</p>
        {capabilities.length > 0 ? (
          <ul className="z-10 flex flex-wrap gap-3">
            {capabilities.map((cap) => (
              <li
                key={cap}
                className="rounded-xs bg-muted px-1.5 py-1 leading-none"
              >
                <span className="text-xs tracking-wide text-primary lowercase">
                  {cap}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}

/**
 * Cream band wrapping a vertical stack of challenge cards — as on the live
 * expertise pages.
 */
function ClientChallengeSection({
  challenges,
  className,
  ...props
}: React.ComponentProps<"section"> & {
  challenges: readonly ClientChallenge[]
}) {
  return (
    <section
      data-slot="client-challenge-section"
      className={cn(
        "my-16 bg-wpp-cream py-16 text-primary lg:my-16",
        className
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-layout px-6">
        <ul className="mx-auto flex flex-col gap-6 lg:w-10/12">
          {challenges.map((item, index) => (
            <li key={item.quote}>
              <ClientChallengeCard
                {...item}
                pattern={item.pattern ?? ((index % 2 === 0 ? 1 : 2) as DecorationPattern)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export { ClientChallengeCard, ClientChallengeSection }
