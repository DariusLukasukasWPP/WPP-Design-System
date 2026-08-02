import { cn } from "@/lib/utils"

import wppEnterpriseSolutions from "@/assets/logos/wpp-enterprise-solutions.svg"
import barrowsNavy from "@/assets/logos/barrows-navy.svg"
import barrowsWhite from "@/assets/logos/barrows-white.svg"
import bottleRocketNavy from "@/assets/logos/bottle-rocket-navy.svg"
import bottleRocketWhite from "@/assets/logos/bottle-rocket-white.svg"
import diffNavy from "@/assets/logos/diff-navy.svg"
import diffWhite from "@/assets/logos/diff-white.svg"
import dtiNavy from "@/assets/logos/dti-navy.svg"
import dtiWhite from "@/assets/logos/dti-white.svg"
import mapNavy from "@/assets/logos/map-navy.svg"
import mapWhite from "@/assets/logos/map-white.svg"
import marketdataMatchNavy from "@/assets/logos/marketdata-match-navy.svg"
import marketdataMatchWhite from "@/assets/logos/marketdata-match-white.svg"
import theCocktailNavy from "@/assets/logos/the-cocktail-navy.svg"
import theCocktailWhite from "@/assets/logos/the-cocktail-white.svg"
import verticurlNavy from "@/assets/logos/verticurl-navy.svg"

/**
 * WPP Enterprise Solutions logos — the parent wordmark plus the eight
 * sub-brands.
 *
 * Logos are fixed artwork, not tokens. Only two treatments are approved: navy
 * on light surfaces and white on navy or imagery. That is why `tone` is a
 * closed set rather than a colour class — a logo must never be tinted orange,
 * teal or any other palette colour.
 *
 * Rendered as `<img>` with `w-auto`, so the browser derives width from each
 * mark's intrinsic ratio. Wordmarks run from 5:1 to 12:1, so **size by
 * height** (`h-6`, `h-8`) and never set both width and height.
 */

type LogoTone = "navy" | "white"

const SUB_BRAND_LOGOS = {
  barrows: { label: "Barrows", navy: barrowsNavy, white: barrowsWhite },
  "bottle-rocket": {
    label: "Bottle Rocket",
    navy: bottleRocketNavy,
    white: bottleRocketWhite,
  },
  diff: { label: "Diff", navy: diffNavy, white: diffWhite },
  dti: { label: "dti", navy: dtiNavy, white: dtiWhite },
  map: { label: "MAP", navy: mapNavy, white: mapWhite },
  "marketdata-match": {
    label: "Marketdata Match",
    navy: marketdataMatchNavy,
    white: marketdataMatchWhite,
  },
  "the-cocktail": {
    label: "The Cocktail",
    navy: theCocktailNavy,
    white: theCocktailWhite,
  },
  // Verticurl is supplied in navy only. `white` falls back to the navy file
  // rather than rendering nothing — request a white lock-up from the brand
  // team if you need one.
  verticurl: { label: "Verticurl", navy: verticurlNavy, white: null },
} as const

type SubBrandName = keyof typeof SUB_BRAND_LOGOS

/**
 * The primary WPP Enterprise Solutions wordmark (275x25 lock-up).
 *
 * Only a navy master is supplied, so `tone="white"` knocks it out with a
 * filter — the same technique the live site uses on its header logo. The
 * filter is fixed, so it can only ever produce white, never an off-brand tint.
 */
function WppLogo({
  tone = "navy",
  className,
  ...props
}: Omit<React.ComponentProps<"img">, "src" | "alt"> & { tone?: LogoTone }) {
  return (
    <img
      data-slot="wpp-logo"
      data-tone={tone}
      src={wppEnterpriseSolutions}
      alt="WPP Enterprise Solutions"
      className={cn(
        "h-8 w-auto object-contain",
        tone === "white" && "brightness-0 invert",
        className
      )}
      {...props}
    />
  )
}

function SubBrandLogo({
  name,
  tone = "navy",
  className,
  ...props
}: Omit<React.ComponentProps<"img">, "src" | "alt"> & {
  name: SubBrandName
  tone?: LogoTone
}) {
  const entry = SUB_BRAND_LOGOS[name]
  const src = tone === "white" ? (entry.white ?? entry.navy) : entry.navy

  return (
    <img
      data-slot="sub-brand-logo"
      data-brand={name}
      data-tone={tone}
      src={src}
      alt={`${entry.label} logo`}
      className={cn("h-8 w-auto object-contain", className)}
      {...props}
    />
  )
}

export {
  WppLogo,
  SubBrandLogo,
  SUB_BRAND_LOGOS,
  type SubBrandName,
  type LogoTone,
}
