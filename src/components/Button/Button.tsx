import React from "react";
import { useTheme } from "../../theme";
import styles from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline" | "subtle";
  color?: "primary" | "secondary" | "success" | "warning" | "error";
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

  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    loading ? styles.loading : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      style={
        {
          "--button-color": theme.colors[color],
        } as React.CSSProperties
      }
      {...props}
    >
      {loading ? <span className={styles.spinner} /> : children}
    </button>
  );
};
