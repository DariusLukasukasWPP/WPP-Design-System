import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Link, linkVariants } from "@/components/ui/link"
import { WppLogo } from "@/components/ui/logo"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { WppDotGrid, WppMenuClose } from "@/components/ui/wpp-icon"

const DEFAULT_NAV = [
  { label: "Solutions", href: "#" },
  { label: "Work", href: "#" },
  { label: "Insights", href: "#" },
  { label: "Partners", href: "#" },
  { label: "About us", href: "#" },
] as const

/**
 * Marketing-site header from enterprisesolutions.wpp.com.
 *
 * Desktop (≥ lg / 1024px): wordmark + nav links + CTA.
 * Mobile (< lg): wordmark + 44×44 dot-grid control that opens a full-bleed
 * navy sheet with stacked nav + CTA. Mega-menu for Solutions stays out of
 * scope — wire that at the product layer.
 */
function SiteHeader({
  tone = "dark",
  nav = DEFAULT_NAV,
  ctaLabel = "Get in touch",
  ctaHref = "#",
  mobileCtaDescription = "Ready to build your own growth system? Let’s talk.",
  className,
  ...props
}: React.ComponentProps<"header"> & {
  tone?: "dark" | "light"
  nav?: readonly { label: string; href: string }[]
  ctaLabel?: string
  ctaHref?: string
  mobileCtaDescription?: string
}) {
  const onDark = tone === "dark"

  return (
    <header
      data-slot="site-header"
      data-tone={tone}
      className={cn(
        "z-50 flex h-[var(--header-height)] w-full items-center",
        onDark
          ? "bg-primary text-primary-foreground"
          : "bg-background text-primary",
        className
      )}
      {...props}
    >
      <div className="mx-auto flex h-full w-full max-w-layout items-center justify-between px-6">
        <a
          href="#"
          aria-label="WPP Enterprise Solutions — Home"
          className="max-w-56 shrink"
        >
          <WppLogo tone={onDark ? "white" : "navy"} className="h-8" />
        </a>

        <div className="flex shrink-0 items-center gap-2">
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                variant="nav"
                tone={onDark ? "white" : "navy"}
                className="px-4 py-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={ctaHref}
            className={cn(
              buttonVariants({
                variant: onDark ? "inverse" : "default",
                size: "default",
              }),
              "ml-2 hidden lg:inline-flex"
            )}
          >
            {ctaLabel}
          </a>

          <Sheet>
            <SheetTrigger
              aria-label="Open menu"
              className={cn(
                "relative flex size-11 items-center justify-center lg:hidden",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              )}
            >
              <WppDotGrid />
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className={cn(
                "w-full gap-0 border-0 bg-primary p-0 text-primary-foreground",
                "data-[side=right]:w-full data-[side=right]:sm:max-w-none"
              )}
            >
              <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
              <SheetDescription className="sr-only">
                Site sections and contact
              </SheetDescription>

              <div className="mx-auto flex h-[var(--header-height)] w-full max-w-layout items-center justify-between px-6">
                <WppLogo tone="white" className="h-8" />
                <SheetClose
                  aria-label="Close menu"
                  className="relative flex size-11 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                >
                  <WppMenuClose />
                </SheetClose>
              </div>

              <nav
                aria-label="Mobile navigation"
                className="flex flex-1 flex-col gap-1 px-6 py-8"
              >
                {nav.map((item) => (
                  <SheetClose
                    key={item.label}
                    render={
                      <a
                        href={item.href}
                        className={cn(
                          linkVariants({ variant: "nav", tone: "white" }),
                          "px-2 py-3 text-xl"
                        )}
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-6 px-6 pt-8 pb-10">
                <p className="max-w-xs text-base leading-snug font-light text-primary-foreground">
                  {mobileCtaDescription}
                </p>
                <SheetClose
                  render={
                    <a
                      href={ctaHref}
                      className={cn(
                        buttonVariants({ variant: "inverse" }),
                        "w-fit"
                      )}
                    />
                  }
                >
                  {ctaLabel}
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export { SiteHeader, DEFAULT_NAV }
