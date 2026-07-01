import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Text } from "./Text";

export interface PromoBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  badgeItems: { icon: React.ReactNode; label: string }[];
  ctaLabel: string;
  onCtaClick?: () => void;
  backgroundVariant?: "primary" | "promo";
}

export const PromoBanner: React.FC<PromoBannerProps> = ({
  className,
  title,
  description,
  badgeItems,
  ctaLabel,
  onCtaClick,
  backgroundVariant = "promo",
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-full rounded-card p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl",
        backgroundVariant === "promo" ? "bg-gradient-promo" : "bg-gradient-primary",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-4 max-w-xl w-full">
        <Heading level={2} className="text-white font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight">
          {title}
        </Heading>
        <Text className="text-primary-100 text-base md:text-lg">
          {description}
        </Text>
        
        {/* Badge Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
          {badgeItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-pill border border-white/5 text-xs font-semibold"
            >
              <span className="text-accent-500 w-4 h-4 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </span>
              <span className="truncate">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex-shrink-0 w-full md:w-auto">
        <Button
          variant="cta"
          size="lg"
          fullWidth={true}
          onClick={onCtaClick}
          className="bg-white text-primary-900 hover:bg-primary-50 shadow-xl shadow-black/10 hover:shadow-black/25 active:scale-95 text-base py-4 px-8 border-none"
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
};
PromoBanner.displayName = "PromoBanner";
