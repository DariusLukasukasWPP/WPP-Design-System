import { cn } from "@/lib/utils"

import pattern1 from "@/assets/decorations/decoration-pattern-1.svg"
import pattern2 from "@/assets/decorations/decoration-pattern-2.svg"
import patternMobile1 from "@/assets/decorations/decoration-pattern-mobile-1.svg"
import patternMobile2 from "@/assets/decorations/decoration-pattern-mobile-2.svg"

/**
 * Halftone decoration flecks used on Client Challenge cards.
 * Pattern 1 and 2 alternate down the stack; each has a mobile crop.
 */
const PATTERNS = {
  1: { desktop: pattern1, mobile: patternMobile1 },
  2: { desktop: pattern2, mobile: patternMobile2 },
} as const

type DecorationPattern = keyof typeof PATTERNS

function ChallengeDecoration({
  pattern = 1,
  className,
  ...props
}: React.ComponentProps<"div"> & { pattern?: DecorationPattern }) {
  const assets = PATTERNS[pattern]
  // Live site: pattern 1 sits bottom-left on desktop; pattern 2 is inset further.
  const position =
    pattern === 1
      ? "top-2.5 right-0 lg:top-[unset] lg:right-auto lg:bottom-10 lg:left-10"
      : "top-2.5 right-0 lg:top-[unset] lg:right-auto lg:bottom-3 lg:left-[7.5rem]"

  return (
    <div
      data-slot="challenge-decoration"
      data-pattern={pattern}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute overflow-visible",
        position,
        className
      )}
      {...props}
    >
      <img
        src={assets.desktop}
        alt=""
        width={pattern === 1 ? 336 : 263}
        height={92}
        className="hidden h-fit w-fit lg:block"
      />
      <img
        src={assets.mobile}
        alt=""
        width={128}
        height={33}
        className="block h-fit w-fit lg:hidden"
      />
    </div>
  )
}

export { ChallengeDecoration, PATTERNS, type DecorationPattern }
