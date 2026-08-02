import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import adobeLogo from "@/assets/partners/adobe.svg"
import awsLogo from "@/assets/partners/aws.svg"
import brazeLogo from "@/assets/partners/braze.svg"
import googleLogo from "@/assets/partners/google.svg"
import microsoftLogo from "@/assets/partners/microsoft.svg"
import salesforceLogo from "@/assets/partners/salesforce.svg"
import shopifyLogo from "@/assets/partners/shopify.svg"
import acquiaLogo from "@/assets/partners/acquia.svg"

export type Partner = {
  name: string
  href: string
  logoSrc: string
}

/** Homepage attribution strip (7 logos + orange CTA). */
const DEFAULT_PARTNERS: Partner[] = [
  { name: "Adobe", href: "#", logoSrc: adobeLogo },
  { name: "AWS", href: "#", logoSrc: awsLogo },
  { name: "Braze", href: "#", logoSrc: brazeLogo },
  { name: "Google", href: "#", logoSrc: googleLogo },
  { name: "Microsoft", href: "#", logoSrc: microsoftLogo },
  { name: "Salesforce", href: "#", logoSrc: salesforceLogo },
  { name: "Shopify", href: "#", logoSrc: shopifyLogo },
]

/** Partners directory page order (includes Acquia; no CTA cell). */
const DIRECTORY_PARTNERS: Partner[] = [
  { name: "Adobe", href: "#", logoSrc: adobeLogo },
  { name: "AWS", href: "#", logoSrc: awsLogo },
  { name: "Salesforce", href: "#", logoSrc: salesforceLogo },
  { name: "Google", href: "#", logoSrc: googleLogo },
  { name: "Microsoft", href: "#", logoSrc: microsoftLogo },
  { name: "Braze", href: "#", logoSrc: brazeLogo },
  { name: "Shopify", href: "#", logoSrc: shopifyLogo },
  { name: "Acquia", href: "#", logoSrc: acquiaLogo },
]

/** Dotted corner arrow used on the orange “Discover more” partner cell. */
function PartnerCtaArrow({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width="24"
      height="24"
      aria-hidden="true"
      className={cn("size-6 text-primary", className)}
      {...props}
    >
      <circle
        cx="19.5436"
        cy="8.22852"
        r="1.33333"
        transform="rotate(135 19.5436 8.22852)"
        fill="currentColor"
      />
      <circle
        cx="19.5436"
        cy="4.45825"
        r="1.33333"
        transform="rotate(135 19.5436 4.45825)"
        fill="currentColor"
      />
      <circle
        cx="15.7731"
        cy="8.22852"
        r="1.33333"
        transform="rotate(135 15.7731 8.22852)"
        fill="currentColor"
      />
      <circle
        cx="12.9435"
        cy="11.0583"
        r="1.33333"
        transform="rotate(135 12.9435 11.0583)"
        fill="currentColor"
      />
      <circle
        cx="10.1154"
        cy="13.8862"
        r="1.33333"
        transform="rotate(135 10.1154 13.8862)"
        fill="currentColor"
      />
      <circle
        cx="7.28772"
        cy="16.7139"
        r="1.33333"
        transform="rotate(135 7.28772 16.7139)"
        fill="currentColor"
      />
      <circle
        cx="4.45813"
        cy="19.5439"
        r="1.33333"
        transform="rotate(135 4.45813 19.5439)"
        fill="currentColor"
      />
      <circle
        cx="15.7711"
        cy="4.4563"
        r="1.33333"
        transform="rotate(135 15.7711 4.4563)"
        fill="currentColor"
      />
      <circle
        cx="12.0006"
        cy="4.45605"
        r="1.33333"
        transform="rotate(135 12.0006 4.45605)"
        fill="currentColor"
      />
      <circle
        cx="8.22815"
        cy="4.45825"
        r="1.33333"
        transform="rotate(135 8.22815 4.45825)"
        fill="currentColor"
      />
      <circle
        cx="4.45813"
        cy="4.45825"
        r="1.33333"
        transform="rotate(135 4.45813 4.45825)"
        fill="currentColor"
      />
      <circle
        cx="19.5436"
        cy="11.9988"
        r="1.33333"
        transform="rotate(135 19.5436 11.9988)"
        fill="currentColor"
      />
      <circle
        cx="19.5416"
        cy="15.7712"
        r="1.33333"
        transform="rotate(135 19.5416 15.7712)"
        fill="currentColor"
      />
      <circle
        cx="19.5426"
        cy="19.5425"
        r="1.33333"
        transform="rotate(135 19.5426 19.5425)"
        fill="currentColor"
      />
    </svg>
  )
}

/**
 * Partner logo grids from the live site — two surfaces:
 *
 * - `attribution` (homepage): cream band, white cells, orange CTA tile,
 *   horizontal snap scroller on small screens.
 * - `directory` (/partners): white band, cream cells, no CTA tile, 2-col
 *   grid + outline “Load more” control.
 */
function PartnerGrid({
  variant = "attribution",
  partners,
  ctaLabel = "Discover more of our partners",
  ctaHref = "#",
  loadMoreLabel = "Load more",
  onLoadMore,
  className,
  ...props
}: React.ComponentProps<"section"> & {
  variant?: "attribution" | "directory"
  partners?: readonly Partner[]
  ctaLabel?: string
  ctaHref?: string
  loadMoreLabel?: string
  onLoadMore?: () => void
}) {
  const isDirectory = variant === "directory"
  const items = partners ?? (isDirectory ? DIRECTORY_PARTNERS : DEFAULT_PARTNERS)

  return (
    <section
      data-slot="partner-grid"
      data-variant={variant}
      aria-label="Partners"
      className={cn(
        isDirectory ? "bg-background py-10" : "bg-wpp-cream py-12 lg:py-16",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "mx-auto w-full",
          isDirectory ? "max-w-screen-xl" : "max-w-layout"
        )}
      >
        <ul
          role="list"
          style={
            isDirectory ? undefined : { ["--mobile-rows" as string]: 2 }
          }
          className={cn(
            "m-0 grid list-none gap-3 p-0",
            "md:grid-cols-3 lg:grid-cols-4 lg:px-6",
            "[&>li]:aspect-square [&>li]:min-h-0 [&>li]:min-w-0 [&>li]:overflow-hidden",
            isDirectory
              ? "grid-cols-2 px-6"
              : [
                  "max-md:grid-flow-col max-md:auto-cols-[calc((100vw-3rem-0.75rem)/2)]",
                  "max-md:grid-rows-[repeat(var(--mobile-rows),1fr)]",
                  "max-md:snap-x max-md:snap-mandatory max-md:overflow-x-auto max-md:px-6",
                  "max-md:scrollbar-none max-md:[&::-webkit-scrollbar]:hidden",
                ]
          )}
        >
          {items.map((partner, index) => (
            <li
              key={partner.name}
              style={
                isDirectory
                  ? undefined
                  : { ["--mobile-order" as string]: index }
              }
              className={cn(
                "grid place-items-center p-5 md:p-6",
                isDirectory
                  ? "bg-wpp-cream"
                  : "bg-background max-md:order-(--mobile-order) max-md:snap-start"
              )}
            >
              <a
                href={partner.href}
                className="flex size-full items-center justify-center outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <img
                  src={partner.logoSrc}
                  alt={partner.name}
                  width={140}
                  height={40}
                  className="block h-auto max-h-full w-auto max-w-full object-contain"
                />
              </a>
            </li>
          ))}

          {!isDirectory ? (
            <li
              data-slot="partner-cta"
              style={{ ["--mobile-order" as string]: items.length }}
              className="relative bg-cta max-md:order-(--mobile-order) max-md:snap-start"
            >
              <a
                href={ctaHref}
                className="absolute inset-0 flex flex-col justify-between p-4 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <PartnerCtaArrow className="shrink-0 self-end" />
                <span className="hover-dotted self-start pb-0.5 text-xl leading-[1.15] font-light tracking-tight text-primary md:text-2xl lg:text-3xl lg:tracking-tighter">
                  {ctaLabel}
                </span>
              </a>
            </li>
          ) : null}
        </ul>

        {isDirectory ? (
          <div className="mt-8 flex justify-center px-6 md:px-0">
            <button
              type="button"
              onClick={onLoadMore}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full px-6 md:w-auto"
              )}
            >
              {loadMoreLabel}
            </button>
          </div>
        ) : (
          <div className="mt-8 flex justify-center px-6 md:hidden md:px-0">
            <a
              href={ctaHref}
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full max-w-[calc(100%-3rem)]"
              )}
            >
              {ctaLabel}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export {
  PartnerGrid,
  DEFAULT_PARTNERS,
  DIRECTORY_PARTNERS,
  PartnerCtaArrow,
}
