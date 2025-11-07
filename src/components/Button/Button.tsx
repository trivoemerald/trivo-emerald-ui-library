import React from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline" | "subtle";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "primary-green"
    | string;
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
  // Map color prop to CSS variable from global.css
  const colorMap: Record<string, string> = {
    primary: "--color-primary-blue",
    "primary-green": "--color-primary-green",
    secondary: "--color-slate",
    success: "--color-sea-green",
    warning: "--color-orange",
    error: "--color-error-dark",
  };

  // Get color variable - if not in map, assume it's a custom CSS variable name
  const getColorVar = () => {
    if (colorMap[color]) {
      return colorMap[color];
    }
    // If color starts with --, use it directly as CSS variable
    if (color.startsWith("--")) {
      return color;
    }
    // Otherwise, assume it's a CSS variable name and prefix with --color-
    return `${color}`;
  };

  const colorVar = getColorVar();

  // Size classes
  const sizeClasses = {
    xs: "px-3 py-1 text-xs h-7",
    sm: "px-4 py-1.5 text-sm h-8",
    md: "px-5 py-2 text-base h-10",
    lg: "px-6 py-2.5 text-lg h-12",
    xl: "px-7 py-3 text-xl h-14",
  };

  // Variant classes (without colors - those will be in style)
  const variantClasses = {
    filled: "text-white",
    outline: "bg-transparent border-2",
    subtle: "bg-transparent hover:bg-black/5",
  };

  const classes = twMerge(
    // Base styles
    "relative inline-flex items-center justify-center border-none cursor-pointer font-semibold transition-all duration-200 rounded-lg font-inherit",
    // Size
    sizeClasses[size],
    // Variant
    variantClasses[variant],
    // Full width
    fullWidth && "w-full",
    // Disabled
    disabled && "opacity-60 cursor-not-allowed",
    // Loading
    loading && "text-transparent",
    // Custom className
    className
  );

  // Dynamic styles using CSS variables
  const getButtonStyles = (): React.CSSProperties => {
    const baseColor = `var(${colorVar})`;

    if (variant === "filled") {
      return {
        backgroundColor: baseColor,
      };
    } else if (variant === "outline") {
      return {
        borderColor: baseColor,
        color: baseColor,
      };
    } else if (variant === "subtle") {
      return {
        color: baseColor,
      };
    }
    return {};
  };

  return (
    <button
      className={classes}
      style={getButtonStyles()}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="absolute w-4 h-4 border-2 border-current border-r-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
};
