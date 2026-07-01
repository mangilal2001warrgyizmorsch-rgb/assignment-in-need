"use client";

import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.AccordionItem>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.AccordionItem
    ref={ref}
    className={cn("border-b border-primary-100/50 py-2", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.AccordionTrigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex w-full">
    <AccordionPrimitive.AccordionTrigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-heading font-semibold text-text-heading transition-all hover:text-primary-700 [&[data-state=open]>svg]:rotate-180 text-left w-full",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-text-muted" />
    </AccordionPrimitive.AccordionTrigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.AccordionContent>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.AccordionContent
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-1 text-text-body text-base leading-relaxed", className)}>
      {children}
    </div>
  </AccordionPrimitive.AccordionContent>
));
AccordionContent.displayName = "AccordionContent";
