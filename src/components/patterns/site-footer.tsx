import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { WppArrow } from "@/components/ui/wpp-icon"

const CONTACT_COLUMNS = [
  {
    title: "Growth",
    body: "Find your solutions team today.",
    cta: "Let's connect",
    href: "#",
  },
  {
    title: "Media",
    body: "Contact us for press and media inquiries.",
    cta: "Contact us",
    href: "#",
  },
  {
    title: "Careers",
    body: "Explore opportunities to work with us.",
    cta: "Join our team",
    href: "#",
  },
] as const

const SITEMAP = [
  {
    title: "Company",
    links: [
      { label: "Work", href: "#" },
      { label: "Insights", href: "#" },
      { label: "Partners", href: "#" },
      { label: "About us", href: "#" },
      { label: "Contact us", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Consulting", href: "#" },
      { label: "Customer Experience", href: "#" },
      { label: "Commerce", href: "#" },
      { label: "Content Transformation", href: "#" },
      { label: "1PD, CRM & Loyalty", href: "#" },
      { label: "Engineering & Platforms", href: "#" },
    ],
  },
  {
    title: "WPP",
    links: [
      { label: "Visit WPP", href: "https://www.wpp.com" },
      { label: "WPP Media", href: "https://www.wppmedia.com" },
      { label: "WPP Production", href: "https://www.wppproduction.com" },
      { label: "WPP Open", href: "https://www.wpp.com" },
    ],
  },
] as const

/**
 * Three-band footer from the live site: navy CTA band → overlapping cream
 * contact strip → white sitemap + legal.
 */
function SiteFooter({
  headline = "Ready to build your own growth system?\nLet’s talk.",
  ctaLabel = "Get in touch",
  ctaHref = "#",
  className,
  ...props
}: React.ComponentProps<"footer"> & {
  headline?: string
  ctaLabel?: string
  ctaHref?: string
}) {
  return (
    <footer
      data-slot="site-footer"
      role="contentinfo"
      className={cn("mt-auto", className)}
      {...props}
    >
      <div className="w-full bg-primary">
        <div className="mx-auto w-full max-w-layout px-6">
          <div className="grid grid-cols-1 gap-y-10 pt-20 pb-40 lg:grid-cols-12 lg:pt-28">
            <div className="flex flex-col gap-8 lg:col-span-4 lg:col-start-2">
              <h2 className="whitespace-pre-wrap text-3xl font-light text-primary-foreground md:text-4xl">
                {headline}
              </h2>
              <a
                href={ctaHref}
                className={cn(buttonVariants({ variant: "inverse" }), "w-fit")}
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-background">
        <div className="mx-auto w-full max-w-layout px-6">
          <section
            aria-label="Contact"
            className="relative z-10 w-full -mt-32"
          >
            <div className="mx-auto w-full bg-wpp-cream py-20 lg:w-10/12">
              <div className="flex flex-col justify-around gap-14 px-8 md:flex-row">
                {CONTACT_COLUMNS.map((col) => (
                  <div key={col.title}>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl text-primary">{col.title}</h3>
                      <p className="text-sm leading-relaxed text-primary lg:text-base">
                        {col.body}
                      </p>
                    </div>
                    <div className="mt-6">
                      <Link href={col.href} variant="inline">
                        {col.cta}
                        <WppArrow className="mb-0.5 size-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-3 lg:grid-cols-4">
            {SITEMAP.map((col) => (
              <div key={col.title} className="max-w-40">
                <h2 className="text-base leading-none font-medium text-primary">
                  {col.title}
                </h2>
                <ul className="mt-6 flex flex-col gap-6">
                  {col.links.map((link) => (
                    <li key={link.label} className="leading-none">
                      <Link href={link.href} variant="inline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="border-t border-border py-6 text-xs text-muted-foreground">
            © Copyright {new Date().getFullYear()} WPP Enterprise Solutions
            Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export { SiteFooter, CONTACT_COLUMNS, SITEMAP }
