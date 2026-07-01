"use client";

import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  label?: string;
  labelIcon?: React.ReactNode;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  error?: string;
  helperText?: string;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  labelIcon,
  placeholder = "Select an option...",
  options,
  value,
  onValueChange,
  error,
  helperText,
  className,
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <span className="flex items-center gap-1.5 text-sm font-heading font-semibold text-text-heading">
          {labelIcon && <span className="text-primary-500 w-4 h-4 flex items-center justify-center">{labelIcon}</span>}
          {label}
        </span>
      )}
      <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
        <SelectPrimitive.Trigger
          className={cn(
            "flex h-12 w-full items-center justify-between rounded-btn border border-primary-100/50 bg-white px-4 py-3 text-base text-text-body placeholder:text-text-muted/60 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-left outline-none transition-all duration-200",
            error && "border-red-500 focus-visible:ring-red-500",
            className
          )}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon asChild>
            <ChevronDown className="h-4 w-4 opacity-55 text-text-muted" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className="relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-primary-100 bg-white text-text-body shadow-md transition-all duration-150">
            <SelectPrimitive.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-text-body cursor-default">
              <ChevronDown className="h-4 w-4 rotate-180" />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport className="p-1">
              {options.map((opt) => (
                <SelectPrimitive.Item
                  key={opt.value}
                  value={opt.value}
                  className="relative flex w-full cursor-default select-none items-center rounded-sm py-2.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-primary-50 data-[highlighted]:text-primary-700 data-[disabled]:opacity-50 transition-colors duration-150"
                >
                  <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                    <SelectPrimitive.ItemIndicator>
                      <Check className="h-4 w-4 text-primary-700" />
                    </SelectPrimitive.ItemIndicator>
                  </span>
                  <SelectPrimitive.ItemText>{opt.label}</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
      {error && <span className="text-xs font-semibold text-red-500">{error}</span>}
      {!error && helperText && <span className="text-xs text-text-muted">{helperText}</span>}
    </div>
  );
};
Select.displayName = "Select";
