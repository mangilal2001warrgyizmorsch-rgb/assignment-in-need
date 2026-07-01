"use client";

import React from "react";
import * as Icons from "lucide-react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  title: string;
  description: string;
  iconName: string;
  className?: string;
  onClick?: () => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  iconName,
  className,
  onClick,
}) => {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconName] || Icons.Wrench;

  return (
    <Card
      hoverEffect={true}
      className={cn(
        "p-6 border border-primary-100/50 flex flex-col gap-4 bg-white text-left cursor-pointer group/card",
        className
      )}
      onClick={onClick}
    >
      <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0 group-hover/card:bg-primary-700 group-hover/card:text-white transition-all duration-300 shadow-sm shadow-primary-700/5">
        <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover/card:rotate-6" />
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="font-heading font-bold text-base text-text-heading group-hover/card:text-primary-700 transition-colors">
          {title}
        </h4>
        <p className="text-sm text-text-body leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-2 flex items-center gap-1 text-xs font-bold text-primary-700 group-hover/card:translate-x-1 transition-transform duration-200 w-fit">
        <span>Use Tool</span>
        <Icons.ArrowRight className="w-3.5 h-3.5" />
      </div>
    </Card>
  );
};
ToolCard.displayName = "ToolCard";
