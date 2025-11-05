import React, { forwardRef, useId } from "react";
import { useTheme } from "../../theme/ThemeProvider";
import styles from "./Input.module.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: React.ReactNode;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      description,
      error,
      leftSection,
      rightSection,
      fullWidth = false,
      className = "test-input",
      id,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    const generatedId = useId();
    const inputId = id ?? props.name ?? generatedId;
    const descriptionId = description ? `${inputId}-description` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    const inputClasses = [
      styles.input,
      leftSection ? styles.withLeftSection : "",
      rightSection ? styles.withRightSection : "",
      error ? styles.inputError : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const wrapperClasses = [styles.wrapper, fullWidth ? styles.fullWidth : ""]
      .filter(Boolean)
      .join(" ");

    const styleVars: React.CSSProperties & Record<string, string> = {
      "--input-border-color": "rgba(15, 23, 42, 0.15)",
      "--input-border-focus": theme.colors.primary,
      "--input-radius": theme.radius.sm,
      "--input-padding-x": theme.spacing.sm,
      "--input-padding-y": "0.625rem",
    };

    return (
      <div className={wrapperClasses} style={styleVars}>
        {label && (
          <label className={styles.label} htmlFor={inputId}>
            {label}
          </label>
        )}
        {description && (
          <p className={styles.description} id={descriptionId}>
            {description}
          </p>
        )}
        <div className={styles.field}>
          {leftSection && (
            <span className={styles.leftSection}>{leftSection}</span>
          )}
          <input
            {...props}
            id={inputId}
            ref={ref}
            className={inputClasses}
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={
              [descriptionId, errorId].filter(Boolean).join(" ") || undefined
            }
          />
          {rightSection && (
            <span className={styles.rightSection}>{rightSection}</span>
          )}
        </div>
        {error && (
          <p className={styles.errorMessage} id={errorId}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
