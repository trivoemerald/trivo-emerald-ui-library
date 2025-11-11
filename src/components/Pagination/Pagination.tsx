import React from "react";
import { twMerge } from "tailwind-merge";

export interface PaginationProps {
  /** Current active page (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /** Number of page buttons to show around current page */
  siblingCount?: number;
  /** Show first/last page buttons */
  showFirstLast?: boolean;
  /** Show previous/next buttons */
  showPrevNext?: boolean;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Additional className */
  className?: string;
  /** Disable pagination */
  disabled?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = true,
  showPrevNext = true,
  size = "md",
  className = "",
  disabled = false,
}) => {
  // Generate page numbers to display
  const generatePageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    // Always show first page
    pages.push(1);

    // Calculate range around current page
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPages - 1
    );

    // Show dots if there's a gap after first page
    if (leftSiblingIndex > 2) {
      pages.push("...");
    }

    // Add sibling pages
    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      pages.push(i);
    }

    // Show dots if there's a gap before last page
    if (rightSiblingIndex < totalPages - 1) {
      pages.push("...");
    }

    // Always show last page (if totalPages > 1)
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = generatePageNumbers();

  // Size classes
  const sizeClasses = {
    sm: "h-8 min-w-8 px-2 text-sm",
    md: "h-10 min-w-10 px-3 text-base",
    lg: "h-12 min-w-12 px-4 text-lg",
  };

  const buttonBaseClasses = twMerge(
    "inline-flex items-center justify-center rounded-md font-medium transition-colors",
    "hover:bg-accent hover:text-accent-foreground",
    "focus:outline-hidden focus:ring-2 focus:ring-primary-blue focus:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
    sizeClasses[size]
  );

  const activeButtonClasses = twMerge(
    buttonBaseClasses,
    "bg-primary-blue text-white hover:bg-primary-blue/90"
  );

  const handlePageClick = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages && !disabled) {
      onPageChange(page);
    }
  };

  return (
    <nav
      className={twMerge("flex items-center gap-1", className)}
      aria-label="Pagination"
    >
      {/* First Page Button */}
      {showFirstLast && (
        <button
          onClick={() => handlePageClick(1)}
          disabled={currentPage === 1 || disabled}
          className={buttonBaseClasses}
          aria-label="First page"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Previous Page Button */}
      {showPrevNext && (
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1 || disabled}
          className={buttonBaseClasses}
          aria-label="Previous page"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Page Numbers */}
      {pages.map((page, index) => {
        if (page === "...") {
          return (
            <span
              key={`ellipsis-${index}`}
              className={twMerge(buttonBaseClasses, "pointer-events-none")}
            >
              ...
            </span>
          );
        }

        const pageNumber = page as number;
        const isActive = pageNumber === currentPage;

        return (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            disabled={disabled}
            className={isActive ? activeButtonClasses : buttonBaseClasses}
            aria-label={`Page ${pageNumber}`}
            aria-current={isActive ? "page" : undefined}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Page Button */}
      {showPrevNext && (
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages || disabled}
          className={buttonBaseClasses}
          aria-label="Next page"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Last Page Button */}
      {showFirstLast && (
        <button
          onClick={() => handlePageClick(totalPages)}
          disabled={currentPage === totalPages || disabled}
          className={buttonBaseClasses}
          aria-label="Last page"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </nav>
  );
};
