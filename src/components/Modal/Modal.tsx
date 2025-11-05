import React, { useEffect, useId } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "../../theme/ThemeProvider";
import styles from "./Modal.module.css";

export interface ModalProps {
  /** Controls whether the modal is visible */
  open: boolean;
  /** Called when the modal requests to be closed */
  onClose?: () => void;
  /** Optional title rendered in the header */
  title?: React.ReactNode;
  /** Modal body content */
  children: React.ReactNode;
  /** Optional footer actions rendered below the content */
  footer?: React.ReactNode;
  /** Close the modal when clicking outside the dialog */
  closeOnOverlayClick?: boolean;
  /** Close the modal when pressing the Escape key */
  closeOnEsc?: boolean;
  /** Controls whether the close button appears */
  showCloseButton?: boolean;
  /** Accessible label for the close button */
  closeButtonAriaLabel?: string;
}

const isBrowser = typeof document !== "undefined";

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  footer,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  showCloseButton = true,
  closeButtonAriaLabel = "Close modal",
}) => {
  const theme = useTheme();
  const titleId = useId();

  useEffect(() => {
    if (!isBrowser || !open || !closeOnEsc) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose, closeOnEsc]);

  useEffect(() => {
    if (!isBrowser || !open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!isBrowser || !open) {
    return null;
  }

  const handleOverlayClick = () => {
    if (!closeOnOverlayClick) {
      return;
    }
    onClose?.();
  };

  const styleVariables: React.CSSProperties & Record<string, string> = {
    "--modal-bg": theme.colors.background,
    "--modal-color": theme.colors.text,
    "--modal-spacing": theme.spacing.md,
    "--modal-radius": theme.radius.md,
  };

  const dialog = (
    <div
      className={styles.overlay}
      role="presentation"
      onClick={handleOverlayClick}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        style={styleVariables}
        onClick={(event) => event.stopPropagation()}
      >
        {(title || (showCloseButton && onClose)) && (
          <div className={styles.header}>
            {title && (
              <h2 className={styles.title} id={titleId}>
                {title}
              </h2>
            )}
            {showCloseButton && onClose && (
              <button
                type="button"
                className={styles.closeButton}
                onClick={onClose}
                aria-label={closeButtonAriaLabel}
              >
                &times;
              </button>
            )}
          </div>
        )}

        <div className={styles.content}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );

  return createPortal(dialog, document.body);
};
