import React from "react";
import { cn } from "@/lib/utils";

interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const IconBox: React.FC<IconBoxProps> = ({
  children,
  size = "md",
  className,
  ...props
}) => {
  const sizeStyles = {
    sm: "w-8 h-8 rounded-lg text-brand-teal-dark",
    md: "w-12 h-12 rounded-xl text-brand-teal-dark",
    lg: "w-16 h-16 rounded-2xl text-brand-teal-dark",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center bg-brand-icon-tint border border-brand-teal/10 flex-shrink-0 transition-transform duration-200 hover:scale-105",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};