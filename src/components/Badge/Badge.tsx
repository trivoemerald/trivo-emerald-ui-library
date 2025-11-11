import React from "react";
import { twMerge } from "tailwind-merge";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual variant of the badge */
  variant?: "filled" | "outline" | "subtle";
  /** Color scheme */
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "primary-green"
    | string;
  /** Size of the badge */
  size?: "sm" | "md" | "lg";
  /** Badge content */
  children: React.ReactNode;
  /** Optional dot indicator */
  dot?: boolean;
  /** Rounded style */
  rounded?: "default" | "full";
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "filled",
  color = "primary",
  size = "md",
  children,
  dot = false,
  rounded = "default",
  className = "",
  ...props
}) => {
  // Map color prop to CSS variable
  const colorMap: Record<string, string> = {
    primary: "--color-primary-blue",
    "primary-green": "--color-primary-green",
    secondary: "--color-slate",
    success: "--color-success-light",
    warning: "--color-warning-light",
    error: "--color-error-light",
    info: "--color-info-light",
  };

  const getColorVar = () => {
    if (colorMap[color]) {
      return colorMap[color];
    }
    if (color.startsWith("--")) {
      return color;
    }
    return color;
  };

  const colorVar = getColorVar();

  // Size classes
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
    lg: "px-3 py-1.5 text-base",
  };

  // Rounded classes
  const roundedClasses = {
    default: "rounded-md",
    full: "rounded-full",
  };

  // Variant classes
  const variantClasses = {
    filled: "text-white font-medium",
    outline: "bg-transparent border-2 font-medium",
    subtle: "font-medium",
  };

  const classes = twMerge(
    "inline-flex items-center gap-1.5 whitespace-nowrap transition-colors",
    sizeClasses[size],
    roundedClasses[rounded],
    variantClasses[variant],
    className
  );

  // Dynamic styles using CSS variables
  const getBadgeStyles = (): React.CSSProperties => {
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
      // For subtle, use a lighter background
      return {
        backgroundColor: `color-mix(in srgb, ${baseColor} 15%, transparent)`,
        color: baseColor,
      };
    }
    return {};
  };

  return (
    <span className={classes} style={getBadgeStyles()} {...props}>
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor:
              variant === "filled" ? "currentColor" : `var(${colorVar})`,
          }}
        />
      )}
      {children}
    </span>
  );
};
