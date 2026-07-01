import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const containerVariants = cva(
  "py-16 md:py-20 lg:py-24 w-full",
  {
    variants: {
      background: {
        white: "bg-surface-white text-text-body",
        lavender: "bg-surface-lavender text-text-body",
        navy: "bg-navy-900 text-white",
      },
    },
    defaultVariants: {
      background: "white",
    },
  }
);

export interface SectionContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  id?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  className,
  background,
  id,
  children,
  ...props
}) => {
  return (
    <section id={id} className={cn(containerVariants({ background }), className)} {...props}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        {children}
      </div>
    </section>
  );
};
SectionContainer.displayName = "SectionContainer";
