import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "font-heading font-bold text-text-heading tracking-tight",
  {
    variants: {
      level: {
        1: "text-3xl md:text-[44px] lg:text-[55px] leading-tight",
        2: "text-2xl md:text-[32px] lg:text-[40px] leading-snug",
        3: "text-xl md:text-[24px] lg:text-[30px] leading-snug",
        4: "text-lg md:text-[20px] lg:text-[24px] leading-normal",
      },
    },
    defaultVariants: {
      level: 2,
    },
  }
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  highlight?: string;
  highlightVariant?: "purple" | "orange" | "gradient";
  underline?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  className,
  level = 2,
  highlight,
  highlightVariant = "purple",
  underline = false,
  children,
  ...props
}) => {
  const Component = `h${level || 2}` as "h1" | "h2" | "h3" | "h4";

  const renderContent = () => {
    if (!highlight || typeof children !== "string") {
      return children;
    }

    const text = children;
    const index = text.toLowerCase().indexOf(highlight.toLowerCase());
    
    if (index === -1) {
      return children;
    }

    const before = text.substring(0, index);
    const match = text.substring(index, index + highlight.length);
    const after = text.substring(index + highlight.length);

    const highlightClass = cn(
      highlightVariant === "purple" && "text-primary-600",
      highlightVariant === "orange" && "text-accent-600",
      highlightVariant === "gradient" && "gradient-text font-extrabold"
    );

    return (
      <>
        {before}
        <span className={highlightClass}>{match}</span>
        {after}
      </>
    );
  };

  return (
    <Component
      className={cn(
        headingVariants({ level }), 
        underline && "laravel-section-title",
        className
      )}
      {...props}
    >
      {renderContent()}
    </Component>
  );
};
Heading.displayName = "Heading";
