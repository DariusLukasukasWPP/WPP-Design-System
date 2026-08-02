import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Shape, variants and interaction states verified against
// enterprisesolutions.wpp.com by reading the live class lists. Every designed
// CTA is a pill (border-radius 9999px), 40px tall, 14px / weight 500 /
// -0.4px tracking / capitalised, with a 1px border box so filled and outlined
// variants share identical metrics.
//
// The site's hover model is: ORANGE IS THE HOVER COLOUR. White and outlined
// CTAs both go orange on hover; the orange CTA darkens to orange-800. Disabled
// uses explicit grey tokens (grey-4 fill / grey-3 label), not opacity.
const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium tracking-[-0.4px] capitalize whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Primary CTA — orange pill, navy label. Hover darkens to orange-800.
        default:
          "bg-cta text-cta-foreground hover:bg-wpp-orange-800 disabled:bg-wpp-grey-4 disabled:text-wpp-grey-3",
        // Outlined CTA — navy hairline. Hover FILLS ORANGE and drops the border.
        outline:
          "border-primary bg-transparent text-primary hover:border-transparent hover:bg-cta hover:text-cta-foreground aria-expanded:bg-cta aria-expanded:text-cta-foreground disabled:border-transparent disabled:bg-wpp-grey-4 disabled:text-wpp-grey-3 dark:border-primary dark:text-primary dark:hover:bg-cta dark:hover:text-cta-foreground",
        // For placing on navy / imagery. Hover goes ORANGE, matching the site's
        // "Read More" and "Get in touch" CTAs. Kept opaque in both themes so
        // the surface behind never bleeds through.
        inverse:
          "bg-wpp-white text-wpp-navy hover:bg-cta hover:text-cta-foreground disabled:bg-wpp-grey-4 disabled:text-wpp-grey-3 dark:bg-wpp-cream dark:text-wpp-navy dark:hover:bg-cta",
        // Solid navy — secondary emphasis.
        navy: "bg-primary text-primary-foreground hover:bg-cta hover:text-cta-foreground disabled:bg-wpp-grey-4 disabled:text-wpp-grey-3",
        // Non-CTA variants are not part of the site's button family, so they
        // keep shadcn's opacity-based disabled treatment rather than the
        // brand's explicit grey fill.
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground disabled:opacity-50",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground disabled:opacity-50 dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 disabled:opacity-50 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        // Navigation-link treatment, copied from the site's header links
        // (Work / Insights / Partners / About us):
        //   decoration-current underline-offset-12
        //   hover:underline hover:decoration-dotted hover:decoration-2
        //
        // The DOTTED hover rule is deliberate brand styling, not a rendering
        // bug — it echoes the dot motif that runs through the identity. Do not
        // "correct" it to a solid line.
        link: "rounded-none normal-case tracking-[-0.32px] text-primary decoration-current underline-offset-[12px] hover:underline hover:decoration-dotted hover:decoration-2 disabled:text-wpp-grey-4",
      },
      size: {
        // 40px — the site's CTA height (10px/16px padding).
        default:
          "h-10 gap-2 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 text-[0.8rem] has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 gap-2 px-5 text-base has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        icon: "size-10",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
