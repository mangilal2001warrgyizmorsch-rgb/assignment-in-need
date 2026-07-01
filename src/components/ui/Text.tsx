import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva(
  "font-sans leading-relaxed",
  {
    variants: {
      variant: {
        body: "text-text-body text-base",
        muted: "text-text-muted text-base",
        small: "text-text-muted text-sm",
      },
    },
    defaultVariants: {
      variant: "body",
    },
  }
);

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

export const Text: React.FC<TextProps> = ({
  className,
  variant,
  as: Component = "p",
  ...props
}) => {
  return (
    <Component
      className={cn(textVariants({ variant }), className)}
      {...props}
    />
  );
};
Text.displayName = "Text";
