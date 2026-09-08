import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "filled" | "outline" | "pill";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  size = "md",
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "text-xs px-3 py-1.5 rounded-md gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-lg gap-2",
    lg: "text-base px-6 py-3 rounded-lg gap-2.5",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    // 1. Filled green
    filled:
      "bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 shadow-sm",
    // 2. Transparent with a border
    outline:
      "bg-transparent border border-emerald-600 text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100",
    // 3. Rounded pill with an arrow look
    pill:
      "bg-emerald-600 text-white rounded-full hover:bg-emerald-700 px-6 py-2.5 shadow-sm",
  };

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
      {variant === "pill" && (
        <svg
          className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      )}
    </button>
  );
};