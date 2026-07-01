import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center px-3 py-1 rounded-pill text-xs font-heading font-semibold uppercase tracking-wider gap-1.5",
  {
    variants: {
      variant: {
        "soft-purple": "bg-primary-50 text-primary-700 border border-primary-100/50",
        "soft-orange": "bg-accent-500/10 text-accent-600 border border-accent-500/10",
        outline: "border border-primary-700/20 text-primary-700 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "soft-purple",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge: React.FC<BadgeProps> = ({ className, variant, ...props }) => {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
};
Badge.displayName = "Badge";
