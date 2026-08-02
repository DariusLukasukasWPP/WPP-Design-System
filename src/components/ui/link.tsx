import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Text links from enterprisesolutions.wpp.com.
 *
 * Two families — do not mix them:
 *
 * 1. `nav` — header / primary navigation. Dotted 2px underline appears on
 *    hover with a large offset (12px). Same recipe as Button `link`.
 * 2. `inline` — footer sitemap, “Let’s connect”, body callouts. Uses the
 *    site’s `hover-dotted` utility (0.75rem offset, 2px dotted).
 */
const linkVariants = cva(
  "inline-flex w-fit cursor-pointer items-center gap-2 text-primary transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  {
    variants: {
      variant: {
        nav: "text-base leading-[1.3] font-medium tracking-[-0.32px] decoration-current underline-offset-[12px] hover:underline hover:decoration-dotted hover:decoration-2",
        inline:
          "text-sm leading-snug font-normal hover-dotted lg:text-base lg:leading-relaxed",
      },
      tone: {
        navy: "text-primary",
        white: "text-wpp-white focus-visible:outline-wpp-white",
      },
    },
    defaultVariants: {
      variant: "inline",
      tone: "navy",
    },
  }
)

function Link({
  className,
  variant,
  tone,
  ...props
}: React.ComponentProps<"a"> & VariantProps<typeof linkVariants>) {
  return (
    <a
      data-slot="link"
      className={cn(linkVariants({ variant, tone, className }))}
      {...props}
    />
  )
}

export { Link, linkVariants }
