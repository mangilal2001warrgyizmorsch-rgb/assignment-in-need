"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ExpertCard } from "./ExpertCard";
import { cn } from "@/lib/utils";

interface ExpertData {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  ordersCompleted: number | string;
  experience?: string;
  qualifications?: string;
}

interface ExpertCarouselProps {
  experts: ExpertData[];
  className?: string;
}

export const ExpertCarousel: React.FC<ExpertCarouselProps> = ({
  experts,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={cn("relative w-full group", className)}>
      {/* Scroll controls */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-primary-100 shadow-md flex items-center justify-center text-text-muted hover:text-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -ml-4"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Grid horizontal container */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth w-full px-2 py-4"
        style={{ scrollbarWidth: "none" }}
      >
        {experts.map((expert) => (
          <div key={expert.id} className="w-[280px] shrink-0">
            <ExpertCard
              name={expert.name}
              role={expert.role}
              rating={expert.rating}
              ordersCount={expert.ordersCompleted}
              avatar={expert.avatar}
              className="h-full flex flex-col justify-between"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-primary-100 shadow-md flex items-center justify-center text-text-muted hover:text-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -mr-4"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
ExpertCarousel.displayName = "ExpertCarousel";
