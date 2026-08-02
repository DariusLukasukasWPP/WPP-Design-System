import { cn } from "@/lib/utils"
import {
  SERVICE_ICON_DATA,
  type ServiceName,
} from "@/components/ui/service-icon-data"

// The larger halftone marks from the brand-asset folder — display artwork.
import illoConsulting from "@/assets/icons/consulting.svg"
import illoCustomerExperience from "@/assets/icons/customer-experience.svg"
import illoCommerce from "@/assets/icons/commerce.svg"
import illoContent from "@/assets/icons/content.svg"
import illoCrm from "@/assets/icons/crm-and-loyalty.svg"
import illoEngineering from "@/assets/icons/technology-and-data.svg"

/**
 * WPP Enterprise Solutions has TWO distinct sets of service-line artwork.
 * They are not interchangeable.
 *
 * 1. `ServiceIcon` — the small icons the live site actually uses on expertise
 *    cards. 18x18/24x24, sparse dots, authored with `fill="currentColor"`.
 *    These are the correct choice for UI.
 *
 * 2. `ServiceIllustration` — the large halftone marks from the brand-asset
 *    folder (~50 circles on a 500x500 grid). Display artwork only; they need
 *    48px+ and turn to mush at icon sizes.
 *
 * Both render through a CSS mask so they take the current text colour.
 */

const SERVICE_ILLUSTRATIONS = {
  consulting: { src: illoConsulting, label: "Consulting" },
  "customer-experience": { src: illoCustomerExperience, label: "Customer Experience (CX)" },
  commerce: { src: illoCommerce, label: "Commerce" },
  "content-transformation": { src: illoContent, label: "Content Transformation" },
  "crm-and-loyalty": { src: illoCrm, label: "1PD, CRM & Loyalty" },
  "engineering-and-platforms": { src: illoEngineering, label: "Engineering & Platforms" },
} as const

function maskStyle(src: string): React.CSSProperties {
  return {
    maskImage: `url(${src})`,
    WebkitMaskImage: `url(${src})`,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
    maskSize: "contain",
    WebkitMaskSize: "contain",
  }
}

/**
 * Small service icon — what the site puts on expertise cards.
 *
 * Rendered as inline SVG (not a mask) because the source artwork uses
 * `fill="currentColor"`, which does not resolve in an external mask image.
 */
function ServiceIcon({
  name,
  className,
  ...props
}: React.ComponentProps<"svg"> & { name: ServiceName }) {
  const { label, viewBox, dots } = SERVICE_ICON_DATA[name]
  return (
    <svg
      data-slot="service-icon"
      data-icon={name}
      viewBox={viewBox}
      fill="none"
      role="img"
      aria-label={label}
      className={cn("size-6 shrink-0", className)}
      {...props}
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="currentColor" />
      ))}
    </svg>
  )
}

/** Large halftone service mark. Needs 48px or more to read. */
function ServiceIllustration({
  name,
  className,
  ...props
}: React.ComponentProps<"span"> & { name: ServiceName }) {
  const { src, label } = SERVICE_ILLUSTRATIONS[name]
  return (
    <span
      data-slot="service-illustration"
      data-icon={name}
      role="img"
      aria-label={label}
      className={cn("inline-block size-16 shrink-0 bg-current", className)}
      style={maskStyle(src)}
      {...props}
    />
  )
}

/**
 * The site's link arrow, taken from its inline SVG. Used on "Learn More" and
 * card links, where it sits at `rotate-[-45deg]` and slides in on hover.
 */
function WppArrow({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      data-slot="wpp-arrow"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("size-6 shrink-0", className)}
      {...props}
    >
      <path
        d="M17.0788 12.5H5.5C5.35767 12.5 5.23875 12.4522 5.14325 12.3567C5.04775 12.2612 5 12.1423 5 12C5 11.8576 5.04775 11.7387 5.14325 11.6432C5.23875 11.5477 5.35767 11.5 5.5 11.5H17.0788L11.6405 6.06146C11.543 5.96412 11.492 5.84937 11.4875 5.71721C11.483 5.58521 11.5359 5.46404 11.6463 5.35371C11.7564 5.24737 11.8743 5.19321 12 5.19121C12.1257 5.18937 12.2436 5.24354 12.3537 5.35371L18.4345 11.4345C18.5218 11.5218 18.5831 11.611 18.6182 11.702C18.6536 11.793 18.6712 11.8923 18.6712 12C18.6712 12.1076 18.6536 12.207 18.6182 12.298C18.5831 12.389 18.5218 12.4781 18.4345 12.5655L12.3537 18.6462C12.2602 18.7397 12.1465 18.7897 12.0125 18.7962C11.8785 18.8025 11.7564 18.7525 11.6463 18.6462C11.5359 18.5359 11.4808 18.417 11.4808 18.2895C11.4808 18.1618 11.5359 18.0429 11.6463 17.9327L17.0788 12.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

/**
 * The site's accordion/disclosure indicator — a plus that cross-fades to a
 * minus, taken from its mobile-nav accordion. Renders BOTH glyphs stacked and
 * fades between them; the caller drives which is visible via
 * `data-expanded`/`aria-expanded` on an ancestor with `group/accordion-trigger`
 * (see AccordionTrigger). There is no rotation on the site — it is a pure
 * opacity cross-fade.
 */
function WppPlusMinusIcon({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="wpp-plus-minus-icon"
      className={cn("relative inline-block size-4 shrink-0", className)}
      {...props}
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 size-4 opacity-100 transition-opacity duration-200 group-aria-expanded/accordion-trigger:opacity-0"
      >
        <path
          d="M7.64325 15.8562C7.54775 15.7604 7.5 15.6417 7.5 15.5V8.5H0.5C0.358333 8.5 0.239583 8.452 0.14375 8.356C0.0479167 8.26 0 8.14108 0 7.99925C0 7.85742 0.0479167 7.73875 0.14375 7.64325C0.239583 7.54775 0.358333 7.5 0.5 7.5H7.5V0.5C7.5 0.358333 7.548 0.239583 7.644 0.14375C7.74 0.0479167 7.85892 0 8.00075 0C8.14258 0 8.26125 0.0479167 8.35675 0.14375C8.45225 0.239583 8.5 0.358333 8.5 0.5V7.5H15.5C15.6417 7.5 15.7604 7.548 15.8562 7.644C15.9521 7.74 16 7.85892 16 8.00075C16 8.14258 15.9521 8.26125 15.8562 8.35675C15.7604 8.45225 15.6417 8.5 15.5 8.5H8.5V15.5C8.5 15.6417 8.452 15.7604 8.356 15.8562C8.26 15.9521 8.14108 16 7.99925 16C7.85742 16 7.73875 15.9521 7.64325 15.8562Z"
          fill="currentColor"
        />
      </svg>
      <svg
        viewBox="4 4 16 16"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 size-4 opacity-0 transition-opacity duration-200 group-aria-expanded/accordion-trigger:opacity-100"
      >
        <path
          d="M4.5 12.5H11.5H12.5H19.5C19.6417 12.5 19.7604 12.4522 19.8562 12.3567C19.9521 12.2612 20 12.1426 20 12.0008C20 11.8589 19.9521 11.74 19.8562 11.644C19.7604 11.548 19.6417 11.5 19.5 11.5H12.5H11.5H4.5C4.35833 11.5 4.23958 11.5478 4.14375 11.6433C4.04792 11.7388 4 11.8574 4 11.9992C4 12.1411 4.04792 12.26 4.14375 12.356C4.23958 12.452 4.35833 12.5 4.5 12.5Z"
          fill="currentColor"
        />
      </svg>
    </span>
  )
}

/** The 3x3 dot grid the site uses as its menu trigger. */
function WppDotGrid({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      data-slot="wpp-dot-grid"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("size-6 shrink-0", className)}
      {...props}
    >
      {[4, 12, 20].map((cy) =>
        [4, 12, 20].map((cx) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" fill="currentColor" />
        ))
      )}
    </svg>
  )
}

export {
  ServiceIcon,
  WppPlusMinusIcon,
  ServiceIllustration,
  WppArrow,
  WppDotGrid,
  SERVICE_ICON_DATA as SERVICE_ICONS,
  SERVICE_ILLUSTRATIONS,
  type ServiceName,
}
