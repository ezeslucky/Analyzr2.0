import classNames from "classnames";
import { HTMLAttributes, ReactNode } from "react";

export interface TextBlockProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end";
}

export default function TextBlock({
  children,
  className = "",
  size = "md",
  align = "start",
  ...props
}: TextBlockProps) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const alignClasses = {
    start: "text-left",
    center: "text-center",
    end: "text-right",
  };

  return (
    <div
      {...props}
      className={classNames(
        "text-muted-foreground", // Default text color
        sizeClasses[size],
        alignClasses[align],
        className
      )}
    >
      {children}
    </div>
  );
}
