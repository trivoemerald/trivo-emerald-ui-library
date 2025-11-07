import React from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../theme";
import styles from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline" | "subtle";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "primary-green";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  color = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  children,
  disabled,
  className = "",
  ...props
}) => {
  const theme = useTheme();

  const getButtonColor = () => {
    if (color === "primary-green") return "var(--color-primary-green)";
    return theme.colors[color];
  };

  const classes = twMerge(
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    loading && styles.loading,
    className
  );

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      style={
        {
          "--button-color": getButtonColor(),
        } as React.CSSProperties
      }
      {...props}
    >
      {loading ? <span className={styles.spinner} /> : children}
    </button>
  );
};
