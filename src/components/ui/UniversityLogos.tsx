"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface UniversityLogosProps {
  className?: string;
  title?: string;
}

const UNIVERSITIES = [
  { name: "UNIVERSITY OF OXFORD", color: "border-blue-900 text-blue-950 bg-blue-50/30" },
  { name: "UNIVERSITY OF CAMBRIDGE", color: "border-teal-700 text-teal-900 bg-teal-50/30" },
  { name: "UCL", color: "border-purple-800 text-purple-950 bg-purple-50/30" },
  { name: "MANCHESTER 1824", color: "border-purple-600 text-purple-900 bg-purple-50/20" },
  { name: "UNIVERSITY OF BIRMINGHAM", color: "border-red-800 text-red-950 bg-red-50/30" },
  { name: "KING'S COLLEGE LONDON", color: "border-red-600 text-red-900 bg-red-50/20" },
  { name: "UNIVERSITY OF LEEDS", color: "border-green-800 text-green-900 bg-green-50/30" },
];

export const UniversityLogos: React.FC<UniversityLogosProps> = ({
  className,
  title = "Trusted by Students from Top UK Universities",
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 240;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={cn("w-full py-8 border-y border-primary-50 bg-white", className)}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {title && (
          <span className="font-heading font-extrabold text-xs md:text-sm text-text-heading/85 uppercase tracking-wider text-center md:text-left md:max-w-[200px] shrink-0">
            {title}
          </span>
        )}

        <div className="relative flex-1 w-full flex items-center group">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 w-8 h-8 rounded-full bg-white border border-primary-100 shadow-sm flex items-center justify-center text-text-muted hover:text-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4.5 h-4.5" />
          </button>

          {/* Logos wrapper */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth w-full px-8 py-2 justify-start md:justify-between"
            style={{ scrollbarWidth: "none" }}
          >
            {UNIVERSITIES.map((uni) => (
              <div
                key={uni.name}
                className={cn(
                  "px-4 py-2.5 rounded-lg border font-heading font-bold text-[10px] tracking-widest text-center select-none shrink-0 border-dashed opacity-75 hover:opacity-100 hover:border-solid transition-all duration-300",
                  uni.color
                )}
              >
                {uni.name}
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 w-8 h-8 rounded-full bg-white border border-primary-100 shadow-sm flex items-center justify-center text-text-muted hover:text-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
UniversityLogos.displayName = "UniversityLogos";
