import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`btn btn-${variant} btn-${size} ${className}`}
        {...props}
      >
        {isLoading && <span className="btn-spinner" />}
        {!isLoading && leftIcon && <span style={{ display: "inline-flex", marginRight: "0.25rem" }}>{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span style={{ display: "inline-flex", marginLeft: "0.25rem" }}>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
