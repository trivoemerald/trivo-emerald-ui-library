import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./SideBar.module.css";

export interface SideBarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  children?: SideBarItem[];
}

export interface SideBarProps {
  items: SideBarItem[];
  width?: string;
  collapsed?: boolean;
  onToggle?: (collapsed: boolean) => void;
  className?: string;
  position?: "left" | "right";
  showToggleButton?: boolean;
  activeItemId?: string;
  onItemClick?: (item: SideBarItem) => void;
}

export const SideBar: React.FC<SideBarProps> = ({
  items,
  width = "250px",
  collapsed = false,
  onToggle,
  className = "",
  position = "left",
  showToggleButton = true,
  activeItemId,
  onItemClick,
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [internalCollapsed, setInternalCollapsed] = useState(collapsed);

  const isCollapsed = onToggle ? collapsed : internalCollapsed;

  const handleToggle = () => {
    if (onToggle) {
      onToggle(!collapsed);
    } else {
      setInternalCollapsed(!internalCollapsed);
    }
  };

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const handleItemClick = (item: SideBarItem, event: React.MouseEvent) => {
    if (item.children && item.children.length > 0) {
      event.preventDefault();
      toggleExpanded(item.id);
    }
    if (item.onClick) {
      item.onClick();
    }
    if (onItemClick) {
      onItemClick(item);
    }
  };

  const renderItem = (item: SideBarItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const isActive = activeItemId === item.id;

    const content = (
      <>
        {item.icon && <span className={styles.icon}>{item.icon}</span>}
        {!isCollapsed && (
          <>
            <span className={styles.label}>{item.label}</span>
            {hasChildren && (
              <span
                className={twMerge(
                  styles.chevron,
                  isExpanded && styles.chevronDown
                )}
              >
                ›
              </span>
            )}
          </>
        )}
      </>
    );

    const itemClasses = twMerge(
      styles.item,
      isActive && styles.active,
      level > 0 && styles.subItem
    );

    return (
      <div key={item.id}>
        {item.href ? (
          <a
            href={item.href}
            className={itemClasses}
            onClick={(e) => handleItemClick(item, e)}
            style={{ paddingLeft: `${level * 1 + 1}rem` }}
          >
            {content}
          </a>
        ) : (
          <div
            className={itemClasses}
            onClick={(e) => handleItemClick(item, e)}
            style={{ paddingLeft: `${level * 1 + 1}rem` }}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleItemClick(item, e as any);
              }
            }}
          >
            {content}
          </div>
        )}
        {hasChildren && isExpanded && !isCollapsed && (
          <div className={styles.children}>
            {item.children!.map((child) => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  const sidebarStyle: React.CSSProperties = {
    width: isCollapsed ? "60px" : width,
  };

  return (
    <div
      className={twMerge(
        styles.sidebar,
        isCollapsed && styles.collapsed,
        styles[position],
        className
      )}
      style={sidebarStyle}
    >
      {showToggleButton && (
        <button
          className={styles.toggleButton}
          onClick={handleToggle}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {position === "left"
            ? isCollapsed
              ? "›"
              : "‹"
            : isCollapsed
            ? "‹"
            : "›"}
        </button>
      )}
      <nav className={styles.nav}>{items.map((item) => renderItem(item))}</nav>
    </div>
  );
};
