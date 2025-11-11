import React from "react";
import { twMerge } from "tailwind-merge";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card variant */
  variant?: "default" | "outlined" | "elevated";
  /** Padding size */
  padding?: "none" | "sm" | "md" | "lg";
  /** Card content */
  children: React.ReactNode;
  /** Hover effect */
  hoverable?: boolean;
  /** Clickable card */
  onClick?: () => void;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Header content */
  children: React.ReactNode;
  /** Additional className */
  className?: string;
}

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Body content */
  children: React.ReactNode;
  /** Additional className */
  className?: string;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Footer content */
  children: React.ReactNode;
  /** Additional className */
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = "default",
  padding = "md",
  children,
  hoverable = false,
  onClick,
  className = "",
  ...props
}) => {
  const variantClasses = {
    default: "bg-white border border-gray-200",
    outlined: "bg-white border-2 border-gray-300",
    elevated: "bg-white shadow-lg",
  };

  const paddingClasses = {
    none: "p-0",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  const classes = twMerge(
    "rounded-lg transition-all duration-200",
    variantClasses[variant],
    paddingClasses[padding],
    hoverable && "hover:shadow-md hover:scale-[1.02]",
    onClick && "cursor-pointer",
    className
  );

  return (
    <div className={classes} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={twMerge("mb-4 pb-3 border-b border-gray-200", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={twMerge("", className)} {...props}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={twMerge("mt-4 pt-3 border-t border-gray-200", className)}
      {...props}
    >
      {children}
    </div>
  );
};
