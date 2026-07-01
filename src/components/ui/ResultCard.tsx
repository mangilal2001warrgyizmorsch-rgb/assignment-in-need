"use client";

import React from "react";
import { Card } from "./Card";
import { ArrowRight, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResultCardProps {
  beforeScore: string | number;
  afterScore: string | number;
  title: string;
  studentName: string;
  institution: string;
  className?: string;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  beforeScore,
  afterScore,
  title,
  studentName,
  institution,
  className,
}) => {
  return (
    <Card
      hoverEffect={true}
      className={cn(
        "p-6 border border-primary-100/50 flex flex-col justify-between gap-5 bg-white",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4 border-b border-primary-50 pb-4">
        <div className="flex flex-col">
          <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1">Before AIN</span>
          <span className="font-heading font-extrabold text-2xl text-red-500 bg-red-50 px-3 py-1.5 rounded-xl border border-red-100/50">
            {beforeScore}%
          </span>
        </div>

        <ArrowRight className="w-6 h-6 text-primary-300 animate-pulse shrink-0" />

        <div className="flex flex-col items-end">
          <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1">After AIN</span>
          <span className="font-heading font-extrabold text-2xl text-success bg-success/10 px-3 py-1.5 rounded-xl border border-success/20">
            {afterScore}%
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="font-heading font-bold text-sm md:text-base text-text-heading leading-snug line-clamp-2">
          {title}
        </h4>
        
        <div className="flex items-center gap-2 text-xs text-text-muted font-medium border-t border-primary-50 pt-3">
          <GraduationCap className="w-4 h-4 text-primary-500 shrink-0" />
          <div className="truncate">
            <span className="text-text-heading font-semibold">{studentName}</span>
            <span className="mx-1">•</span>
            <span>{institution}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
ResultCard.displayName = "ResultCard";
