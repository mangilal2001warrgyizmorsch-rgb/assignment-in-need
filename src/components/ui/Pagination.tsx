"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <nav
      aria-label="Pagination Navigation"
      className={cn("flex items-center justify-center gap-1.5 py-4", className)}
    >
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-primary-100 text-text-body hover:bg-primary-50 disabled:opacity-40 disabled:hover:bg-transparent transition-colors shrink-0"
        aria-label="Go to previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {getPageNumbers().map((page, index) => {
        if (page === "...") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="w-9 h-9 flex items-center justify-center text-text-muted select-none text-sm shrink-0"
            >
              ...
            </span>
          );
        }

        const isCurrent = page === currentPage;
        return (
          <button
            key={`page-${page}`}
            onClick={() => onPageChange(page as number)}
            aria-current={isCurrent ? "page" : undefined}
            className={cn(
              "w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold transition-all shrink-0",
              isCurrent
                ? "bg-primary-700 text-white shadow-md shadow-primary-700/10"
                : "border border-primary-100 text-text-body hover:bg-primary-50"
            )}
            aria-label={`Go to page ${page}`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-primary-100 text-text-body hover:bg-primary-50 disabled:opacity-40 disabled:hover:bg-transparent transition-colors shrink-0"
        aria-label="Go to next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
};
Pagination.displayName = "Pagination";
