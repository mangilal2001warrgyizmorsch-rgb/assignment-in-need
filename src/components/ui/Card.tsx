import React, { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", hoverEffect = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          background: "var(--card)",
          color: "var(--card-foreground)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--card-border)",
          padding: "2rem",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        className={`${hoverEffect ? "hover-lift" : ""} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export const CardHeader = ({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex-column ${className}`} style={{ gap: "0.25rem" }} {...props}>
    {children}
  </div>
);
CardHeader.displayName = "CardHeader";

export const CardTitle = ({ className = "", children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={`${className}`} style={{ fontWeight: 700, margin: 0 }} {...props}>
    {children}
  </h3>
);
CardTitle.displayName = "CardTitle";

export const CardDescription = ({ className = "", children, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`${className}`} style={{ fontSize: "0.9rem", color: "var(--muted)", margin: 0 }} {...props}>
    {children}
  </p>
);
CardDescription.displayName = "CardDescription";

export const CardContent = ({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={`${className}`} style={{ flex: 1 }} {...props}>
    {children}
  </div>
);
CardContent.displayName = "CardContent";

export const CardFooter = ({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex-center ${className}`} style={{ marginTop: "1rem", justifyContent: "flex-start" }} {...props}>
    {children}
  </div>
);
CardFooter.displayName = "CardFooter";
