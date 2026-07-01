import React from "react";
import { cn } from "@/lib/utils";
import { IconBadge } from "./IconBadge";

export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  number: string;
  label: string;
  variant?: "light" | "dark";
}

export const StatBlock: React.FC<StatBlockProps> = ({
  className,
  icon,
  number,
  label,
  variant = "light",
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 rounded-card w-full",
        variant === "dark" ? "bg-primary-900 text-white" : "bg-transparent text-text-heading",
        className
      )}
      {...props}
    >
      {icon && (
        <IconBadge
          icon={icon}
          color={variant === "dark" ? "orange" : "purple"}
          size="md"
        />
      )}
      <div className="flex flex-col">
        <span
          className={cn(
            "text-2xl md:text-3xl font-heading font-extrabold tracking-tight leading-none mb-1",
            variant === "dark" ? "text-accent-500" : "text-primary-700"
          )}
        >
          {number}
        </span>
        <span
          className={cn(
            "text-sm font-medium",
            variant === "dark" ? "text-primary-100" : "text-text-body"
          )}
        >
          {label}
        </span>
      </div>
    </div>
  );
};
StatBlock.displayName = "StatBlock";
