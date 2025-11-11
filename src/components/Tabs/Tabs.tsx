import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export interface TabItem {
  /** Unique identifier for the tab */
  id: string;
  /** Label text to display */
  label: string;
  /** Content to display when tab is active */
  content: React.ReactNode;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Disable this tab */
  disabled?: boolean;
  /** Optional badge/count */
  badge?: string | number;
}

export interface TabsProps {
  /** Array of tab items */
  items: TabItem[];
  /** Default active tab id */
  defaultActiveId?: string;
  /** Controlled active tab id */
  activeId?: string;
  /** Callback when tab changes */
  onChange?: (id: string) => void;
  /** Tab variant */
  variant?: "default" | "pills" | "underline";
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Full width tabs */
  fullWidth?: boolean;
  /** Additional className for container */
  className?: string;
  /** Additional className for tab list */
  tabListClassName?: string;
  /** Additional className for content */
  contentClassName?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveId,
  activeId: controlledActiveId,
  onChange,
  variant = "default",
  size = "md",
  fullWidth = false,
  className = "",
  tabListClassName = "",
  contentClassName = "",
}) => {
  const [internalActiveId, setInternalActiveId] = useState(
    defaultActiveId || items[0]?.id
  );

  const activeId = controlledActiveId ?? internalActiveId;

  const handleTabClick = (id: string, disabled?: boolean) => {
    if (disabled) return;

    if (controlledActiveId === undefined) {
      setInternalActiveId(id);
    }
    onChange?.(id);
  };

  const activeTab = items.find((item) => item.id === activeId);

  // Size classes
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  // Variant classes for tab buttons
  const getTabClasses = (item: TabItem) => {
    const isActive = item.id === activeId;
    const baseClasses = twMerge(
      "inline-flex items-center gap-2 font-medium transition-all duration-200 cursor-pointer",
      sizeClasses[size],
      item.disabled && "opacity-50 cursor-not-allowed"
    );

    if (variant === "default") {
      return twMerge(
        baseClasses,
        "border-b-2",
        isActive
          ? "text-primary-blue border-primary-blue"
          : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300"
      );
    } else if (variant === "pills") {
      return twMerge(
        baseClasses,
        "rounded-lg",
        isActive
          ? "bg-primary-blue text-white"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      );
    } else if (variant === "underline") {
      return twMerge(
        baseClasses,
        "border-b-2 rounded-none",
        isActive
          ? "text-primary-blue border-primary-blue"
          : "text-gray-600 border-transparent hover:text-gray-900"
      );
    }
    return baseClasses;
  };

  const tabListContainerClasses = twMerge(
    "flex gap-1",
    variant === "default" && "border-b border-gray-200",
    variant === "underline" && "border-b border-gray-200",
    fullWidth && "w-full",
    tabListClassName
  );

  return (
    <div className={twMerge("w-full", className)}>
      {/* Tab List */}
      <div className={tabListContainerClasses} role="tablist">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${item.id}`}
              id={`tab-${item.id}`}
              disabled={item.disabled}
              onClick={() => handleTabClick(item.id, item.disabled)}
              className={twMerge(
                getTabClasses(item),
                fullWidth && "flex-1 justify-center"
              )}
            >
              {item.icon && <span className="shrink-0">{item.icon}</span>}
              <span>{item.label}</span>
              {item.badge !== undefined && (
                <span
                  className={twMerge(
                    "px-2 py-0.5 text-xs rounded-full font-semibold",
                    isActive && variant === "pills"
                      ? "bg-white text-primary-blue"
                      : "bg-primary-blue text-white"
                  )}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTab && (
        <div
          role="tabpanel"
          id={`tabpanel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          className={twMerge("mt-4", contentClassName)}
        >
          {activeTab.content}
        </div>
      )}
    </div>
  );
};
