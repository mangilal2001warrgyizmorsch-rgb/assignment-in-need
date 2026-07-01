import React from "react";
import { cn } from "@/lib/utils";

export interface ProcessStep {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  className?: string;
  title?: string;
  subtitle?: string;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({
  steps,
  className,
  title = "How It Works",
  subtitle = "Our simple process to get your assignment done",
}) => {
  return (
    <div className={cn("flex flex-col items-center gap-10", className)}>
      {title && (
        <div className="text-center max-w-2xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-heading mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-text-muted text-sm md:text-base">{subtitle}</p>
          )}
        </div>
      )}

      {/* Desktop: horizontal flow */}
      <div className="hidden md:flex items-start justify-center gap-0 w-full">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center text-center gap-3 max-w-[180px]">
              {/* Numbered circle */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary-50 border-2 border-primary-100 flex items-center justify-center">
                  <div className="text-primary-700">{step.icon}</div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary-700 text-white text-xs font-bold flex items-center justify-center">
                  {step.number}
                </div>
              </div>
              <h4 className="font-heading font-bold text-sm text-text-heading leading-tight">
                {step.title}
              </h4>
              <p className="text-text-muted text-xs leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Arrow connector */}
            {index < steps.length - 1 && (
              <div className="flex items-center pt-8 px-2 shrink-0">
                <div className="w-12 border-t-2 border-dashed border-primary-200" />
                <svg className="w-3 h-3 text-primary-300 -ml-1 shrink-0" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M4 1l5 5-5 5V1z" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile: vertical list */}
      <div className="flex md:hidden flex-col gap-6 w-full">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-start gap-4">
            <div className="relative shrink-0">
              <div className="w-14 h-14 rounded-full bg-primary-50 border-2 border-primary-100 flex items-center justify-center">
                <div className="text-primary-700">{step.icon}</div>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary-700 text-white text-[10px] font-bold flex items-center justify-center">
                {step.number}
              </div>
              {/* Vertical connector */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-full w-0.5 h-6 bg-primary-100 -translate-x-1/2" />
              )}
            </div>
            <div className="flex flex-col gap-1 pt-1">
              <h4 className="font-heading font-bold text-sm text-text-heading">
                {step.title}
              </h4>
              <p className="text-text-muted text-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
ProcessSteps.displayName = "ProcessSteps";
