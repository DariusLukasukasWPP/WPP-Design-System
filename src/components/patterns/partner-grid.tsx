import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import adobeLogo from "@/assets/partners/adobe.svg"
import awsLogo from "@/assets/partners/aws.svg"
import brazeLogo from "@/assets/partners/braze.svg"
import googleLogo from "@/assets/partners/google.svg"
import microsoftLogo from "@/assets/partners/microsoft.svg"
import salesforceLogo from "@/assets/partners/salesforce.svg"
import shopifyLogo from "@/assets/partners/shopify.svg"

export type Partner = {
  name: string
  href: string
  logoSrc: string
}

const DEFAULT_PARTNERS: Partner[] = [
  { name: "Adobe", href: "#", logoSrc: adobeLogo },
  { name: "AWS", href: "#", logoSrc: awsLogo },
  { name: "Braze", href: "#", logoSrc: brazeLogo },
  { name: "Google", href: "#", logoSrc: googleLogo },
  { name: "Microsoft", href: "#", logoSrc: microsoftLogo },
  { name: "Salesforce", href: "#", logoSrc: salesforceLogo },
  { name: "Shopify", href: "#", logoSrc: shopifyLogo },
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
 * Partner attribution grid from the homepage.
 *
 * Desktop: 4-column square grid on cream; last cell is the orange CTA.
 * Mobile: 2-column horizontal snap scroller + a separate orange pill CTA
 * below the grid (the in-grid CTA stays for tablet/desktop).
 *
 * Logos are content — pass CDN or local URLs; do not tint them with palette
 * colours (same rule as brand wordmarks).
 */
function PartnerGrid({
  partners = DEFAULT_PARTNERS,
  ctaLabel = "Discover more of our partners",
  ctaHref = "#",
  className,
  ...props
}: React.ComponentProps<"section"> & {
  partners?: readonly Partner[]
  ctaLabel?: string
  ctaHref?: string
}) {
  return (
    <section
      data-slot="partner-grid"
      aria-label="Partners"
      className={cn("bg-wpp-cream py-12 lg:py-16", className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-layout">
        <ul
          role="list"
          style={{ ["--mobile-rows" as string]: 2 }}
          className={cn(
            "m-0 grid list-none gap-3 p-0",
            "md:grid-cols-3 lg:grid-cols-4 lg:px-6",
            // min-w-0 stops grid items (esp. the CTA) blowing out the track.
            "[&>li]:aspect-square [&>li]:min-h-0 [&>li]:min-w-0 [&>li]:overflow-hidden",
            // Mobile: two rows, horizontal snap scroll of square cells
            "max-md:grid-flow-col max-md:auto-cols-[calc((100vw-3rem-0.75rem)/2)]",
            "max-md:grid-rows-[repeat(var(--mobile-rows),1fr)]",
            "max-md:snap-x max-md:snap-mandatory max-md:overflow-x-auto max-md:px-6",
            "max-md:scrollbar-none max-md:[&::-webkit-scrollbar]:hidden"
          )}
        >
          {partners.map((partner, index) => (
            <li
              key={partner.name}
              style={{ ["--mobile-order" as string]: index }}
              className="grid place-items-center bg-background p-5 max-md:order-(--mobile-order) max-md:snap-start md:p-6"
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

          <li
            data-slot="partner-cta"
            style={{ ["--mobile-order" as string]: partners.length }}
            className="relative bg-cta max-md:order-(--mobile-order) max-md:snap-start"
          >
            {/* Absolutely fill the square so type metrics can't grow the grid
                track; keep a real bottom inset so descenders aren't clipped. */}
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
        </ul>

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
      </div>
    </section>
  )
}

export { PartnerGrid, DEFAULT_PARTNERS, PartnerCtaArrow }
