import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = "center",
  theme = "light",
  className,
}) => {
  return (
    <div
      className={cn(
        "max-w-3xl mb-10 md:mb-14",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {label && (
        <span className="inline-block text-xs md:text-sm font-semibold tracking-wider text-emerald-600 uppercase mb-2">
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-2xl md:text-4xl font-bold tracking-tight",
          theme === "dark" ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-base md:text-lg leading-relaxed",
            theme === "dark" ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};