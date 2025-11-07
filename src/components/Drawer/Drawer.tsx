import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./Drawer.module.css";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "right" | "top" | "bottom";
  children: React.ReactNode;
  title?: string;
  width?: string;
  height?: string;
  className?: string;
  overlayClassName?: string;
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  position = "right",
  children,
  title,
  width = "300px",
  height = "300px",
  className = "",
  overlayClassName = "",
  closeOnOverlayClick = true,
  showCloseButton = true,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const drawerStyle: React.CSSProperties = {};
  if (position === "left" || position === "right") {
    drawerStyle.width = width;
  } else {
    drawerStyle.height = height;
  }

  return (
    <div
      className={twMerge(styles.overlay, overlayClassName)}
      onClick={handleOverlayClick}
    >
      <div
        ref={drawerRef}
        className={twMerge(styles.drawer, styles[position], className)}
        style={drawerStyle}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "drawer-title" : undefined}
      >
        {(title || showCloseButton) && (
          <div className={styles.header}>
            {title && (
              <h2 id="drawer-title" className={styles.title}>
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Close drawer"
              >
                ✕
              </button>
            )}
          </div>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
