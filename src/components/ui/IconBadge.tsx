import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-full flex-shrink-0",
  {
    variants: {
      color: {
        purple: "bg-primary-50 text-primary-700",
        orange: "bg-accent-500/10 text-accent-600",
        green: "bg-green-100 text-green-700",
        blue: "bg-blue-100 text-blue-700",
      },
      size: {
        sm: "w-8 h-8 p-1.5",
        md: "w-12 h-12 p-3",
        lg: "w-16 h-16 p-4",
      },
    },
    defaultVariants: {
      color: "purple",
      size: "md",
    },
  }
);

export interface IconBadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof iconBadgeVariants> {
  icon: React.ReactNode;
}

export const IconBadge: React.FC<IconBadgeProps> = ({
  className,
  color,
  size,
  icon,
  ...props
}) => {
  return (
    <div className={cn(iconBadgeVariants({ color, size, className }))} {...props}>
      {React.isValidElement(icon)
        ? React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
            className: cn(
              size === "sm" && "w-4 h-4",
              size === "md" && "w-6 h-6",
              size === "lg" && "w-8 h-8",
              (icon as React.ReactElement<{ className?: string }>).props.className
            ),
          })
        : icon}
    </div>
  );
};
IconBadge.displayName = "IconBadge";
export { iconBadgeVariants };
