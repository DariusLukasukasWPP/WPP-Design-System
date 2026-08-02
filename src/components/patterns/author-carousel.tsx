import { useState } from "react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type Author = {
  name: string
  role: string
  bio?: string
  /** Override for derived initials (defaults to first letters of name). */
  initials?: string
  href?: string
  linkedInHref?: string
}

function authorInitials(name: string, override?: string) {
  if (override) return override
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!)
    .join("")
    .toUpperCase()
}

function LinkedInIcon({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={cn("size-3.5", className)}
      {...props}
    >
      <path
        d="M3.12891 4.65039V14H0.227539V4.65039H3.12891ZM10.5127 4.40527C13.4626 4.40527 14.001 6.34753 14.001 8.86035V14H11.0996V9.44727C11.0996 8.37038 11.0833 6.96777 9.58398 6.96777C8.08462 6.9678 7.85645 8.15877 7.85645 9.36621V14H4.95508V4.65039H7.74219V5.92285H7.77539C8.16662 5.18874 9.11146 4.4054 10.5127 4.40527ZM1.67871 0C2.60769 8.21988e-06 3.35742 0.767201 3.35742 1.69727C3.35726 2.61088 2.60759 3.37792 1.67871 3.37793C0.749822 3.37793 0.000159065 2.6272 0 1.69727C0 0.767196 0.749724 0 1.67871 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

function XIcon({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("size-5", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.72689 5H5L10.6045 12.6133L5.35852 19H7.7823L11.75 14.1696L15.2731 18.9556H20L14.2327 11.121L14.2429 11.1345L19.2086 5.08894H16.7849L13.0972 9.57849L9.72689 5ZM7.60916 6.33334H9.08071L17.3908 17.6222H15.9193L7.60916 6.33334Z"
        fill="currentColor"
      />
    </svg>
  )
}

function LinkIcon({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("size-5", className)}
      {...props}
    >
      <path
        d="M16.2426 13.4142L18.3639 11.2929C19.926 9.7308 19.926 7.19814 18.3639 5.63604C16.8019 4.07395 14.2692 4.07395 12.7071 5.63604L10.5858 7.75736"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.75737 10.5858L5.63605 12.7071C4.07395 14.2692 4.07395 16.8019 5.63605 18.364C7.19815 19.9261 9.73081 19.9261 11.2929 18.364L13.4142 16.2426"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M14.8284 9.17157L9.17151 14.8284"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  )
}

const shareButtonClass =
  "inline-flex size-10 shrink-0 items-center justify-center self-start rounded-full border border-primary text-primary transition-colors hover:border-cta hover:bg-cta"

/**
 * Insight share rail — copy link, X, LinkedIn. Sits in the left column of the
 * author band on enterprisesolutions.wpp.com.
 */
function AuthorShare({
  url,
  label = "Share",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  url: string
  label?: string
}) {
  const [copied, setCopied] = useState(false)
  const encoded = encodeURIComponent(url)

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div
      data-slot="author-share"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    >
      <p className="text-xs font-medium tracking-wide text-primary/80 uppercase">
        {label}
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          aria-label="Copy link"
          aria-pressed={copied}
          onClick={copyLink}
          className={shareButtonClass}
        >
          <LinkIcon />
        </button>
        <a
          href={`https://x.com/intent/tweet?url=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className={shareButtonClass}
        >
          <XIcon />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className={shareButtonClass}
        >
          <LinkedInIcon className="size-3.5" />
        </a>
      </div>
      <span className="sr-only" aria-live="polite">
        {copied ? "Link copied" : ""}
      </span>
    </div>
  )
}

/**
 * Oval initials stand-in for the insight author portrait (175×220).
 */
function AuthorAvatar({
  name,
  initials,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  name: string
  initials?: string
}) {
  return (
    <div
      data-slot="author-avatar"
      role="img"
      aria-label={name}
      className={cn(
        "flex h-[220px] w-[175px] shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-medium tracking-wide text-primary-foreground",
        className
      )}
      {...props}
    >
      {authorInitials(name, initials)}
    </div>
  )
}

/**
 * Single author card from insight “Meet the author” carousel items:
 * oval avatar, orange dot + name, role, bio, outline CTA.
 */
function AuthorCard({
  name,
  role,
  bio,
  initials,
  href = "#",
  linkedInHref: _linkedInHref,
  ctaLabel = "Get in touch",
  className,
  ...props
}: React.ComponentProps<"article"> &
  Author & {
    ctaLabel?: string
  }) {
  return (
    <article
      data-slot="author-card"
      className={cn(
        "flex min-w-0 flex-col gap-6 lg:flex-row lg:gap-8",
        className
      )}
      {...props}
    >
      <AuthorAvatar name={name} initials={initials} />

      <div className="flex min-w-0 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span
              className="size-1 shrink-0 rounded-full bg-cta"
              aria-hidden="true"
            />
            <span className="text-xs font-medium tracking-wide text-primary/80 uppercase">
              {name}
            </span>
          </div>
          <span className="text-xs tracking-wide text-primary/80 lowercase">
            {role}
          </span>
        </div>

        {bio ? (
          <p className="text-base leading-relaxed text-primary">{bio}</p>
        ) : null}

        <div>
          <a href={href} className={buttonVariants({ variant: "outline" })}>
            {ctaLabel}
          </a>
        </div>
      </div>
    </article>
  )
}

/**
 * Insight article author band — lavender tint panel with Share on the left
 * and “Meet the author” + carousel on the right.
 * From enterprisesolutions.wpp.com insight templates.
 */
function AuthorCarousel({
  authors,
  heading = "Meet the author",
  shareUrl = "#",
  shareLabel = "Share",
  className,
  ...props
}: React.ComponentProps<"section"> & {
  authors: readonly Author[]
  heading?: string
  /** Page URL used by copy / X / LinkedIn share actions. */
  shareUrl?: string
  shareLabel?: string
}) {
  const plural = authors.length > 1
  const title =
    plural && heading === "Meet the author" ? "Meet the authors" : heading

  return (
    <section
      data-slot="author-carousel"
      aria-labelledby="author-carousel-heading"
      className={cn("w-full", className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-layout px-6 lg:px-10">
        {/*
          Live layout: 10-col tint band — Share (4) + authors (6).
          min-w-0 on the author column so multi-author overflow can scroll.
        */}
        <div className="grid grid-cols-1 gap-12 bg-wpp-tint-100 py-10 lg:grid-cols-10 lg:gap-3">
          <div className="px-8 lg:col-span-4 lg:px-10 lg:pe-0 lg:ps-10">
            <AuthorShare url={shareUrl} label={shareLabel} />
          </div>

          <div className="flex min-w-0 flex-col gap-8 px-8 lg:col-span-6 lg:gap-10 lg:px-10 lg:pe-10 lg:ps-0">
            <h2
              id="author-carousel-heading"
              className="text-xs font-medium tracking-wide text-primary uppercase"
            >
              {title}
            </h2>

            <div
              className={cn(
                "flex min-w-0 justify-center gap-3",
                plural
                  ? "snap-x snap-mandatory flex-col overflow-x-auto pb-2 md:flex-row"
                  : "flex-col md:flex-row"
              )}
            >
              {authors.map((author) => (
                <div
                  key={author.name}
                  className={cn(
                    "min-w-0",
                    plural &&
                      "w-full shrink-0 snap-start md:w-[min(100%,36rem)]"
                  )}
                >
                  <AuthorCard {...author} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export {
  AuthorAvatar,
  AuthorCard,
  AuthorCarousel,
  AuthorShare,
  LinkedInIcon,
  LinkIcon,
  XIcon,
}
