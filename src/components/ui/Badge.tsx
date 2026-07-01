import React, { HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "accent" | "warning" | "outline";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = "", variant = "primary", children, ...props }, ref) => {
    const getStyles = () => {
      switch (variant) {
        case "secondary":
          return {
            background: "var(--secondary-soft)",
            color: "var(--secondary)",
            borderColor: "hsla(var(--secondary-hue), var(--secondary-saturation), var(--secondary-lightness), 0.15)",
          };
        case "accent":
          return {
            background: "var(--accent-soft)",
            color: "var(--accent)",
            borderColor: "hsla(var(--accent-hue), var(--accent-saturation), var(--accent-lightness), 0.15)",
          };
        case "warning":
          return {
            background: "hsla(var(--warning-hue), var(--warning-saturation), var(--warning-lightness), 0.1)",
            color: "var(--warning)",
            borderColor: "hsla(var(--warning-hue), var(--warning-saturation), var(--warning-lightness), 0.15)",
          };
        case "outline":
          return {
            background: "transparent",
            color: "var(--muted)",
            borderColor: "var(--border)",
          };
        case "primary":
        default:
          return {
            background: "var(--primary-soft)",
            color: "var(--primary)",
            borderColor: "hsla(var(--primary-hue), var(--primary-saturation), var(--primary-lightness), 0.15)",
          };
      }
    };

    const inlineStyles = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.25rem 0.75rem",
      fontSize: "0.75rem",
      fontWeight: 700,
      borderRadius: "9999px",
      letterSpacing: "0.05em",
      textTransform: "uppercase" as const,
      border: "1px solid",
      ...getStyles(),
    };

    return (
      <span ref={ref} style={inlineStyles} className={className} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
