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
    sm: "w-8 h-8 rounded-lg text-emerald-700",
    md: "w-12 h-12 rounded-xl text-emerald-700",
    lg: "w-16 h-16 rounded-2xl text-emerald-700",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center bg-[#EAFBF1] border border-emerald-100 flex-shrink-0 transition-transform duration-200 hover:scale-105",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};