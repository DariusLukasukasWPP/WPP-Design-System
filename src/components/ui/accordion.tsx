import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"

import { cn } from "@/lib/utils"
import { WppPlusMinusIcon } from "@/components/ui/wpp-icon"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("not-last:border-b", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      {/* Metrics from the live site's accordion trigger:
            flex w-full items-center justify-between py-5 text-base
            font-medium leading-[1.3] text-primary-navy
          Notably it does NOT underline on hover — that was a stock shadcn
          default. Horizontal padding is left to the consumer, since accordions
          usually sit inside an already-padded surface (the site applies px-6 at
          the call site, on both trigger and panel). */}
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-center justify-between border border-transparent py-5 text-left text-base leading-[1.3] font-medium text-primary transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        {/* The site's disclosure indicator is a plus that cross-fades to a
            minus — not a chevron, and not a rotation. */}
        <WppPlusMinusIcon data-slot="accordion-trigger-icon" className="ml-auto text-muted-foreground" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden text-base data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "h-(--accordion-panel-height) pt-0 pb-5 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:decoration-dotted [&_a]:hover:decoration-2 [&_p:not(:last-child)]:mb-4",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
