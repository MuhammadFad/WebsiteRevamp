import React from "react";
import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "mint" | "dark" | "outline";
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = "mint",
  className,
  ...props
}) => {
  const variantStyles = {
    mint: "bg-brand-teal/10 text-brand-teal-dark border border-brand-teal/20",
    dark: "bg-slate-800 text-brand-teal-hover border border-slate-700",
    outline: "bg-transparent text-brand-teal-dark border border-brand-teal-dark",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};