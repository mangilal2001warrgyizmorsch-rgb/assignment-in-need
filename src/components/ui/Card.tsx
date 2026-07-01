import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white rounded-card shadow-card border border-primary-100/50 flex flex-col gap-4 p-6",
          hoverEffect && "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cardHover",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col gap-1", className)} {...props} />
);
CardHeader.displayName = "CardHeader";

export const CardBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex-1 text-text-body text-base leading-relaxed", className)} {...props} />
);
CardBody.displayName = "CardBody";

export const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center justify-start mt-2", className)} {...props} />
);
CardFooter.displayName = "CardFooter";
