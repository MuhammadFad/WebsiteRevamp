import React from "react";
import { cn } from "@/lib/utils";

type SectionBg = "white" | "grey" | "navy" | "mint" | "gradient";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bg?: SectionBg;
  className?: string;
  id?: string;
}

const bgVariants: Record<SectionBg, string> = {
  white: "bg-white text-slate-900",
  grey: "bg-slate-50 text-slate-900",
  navy: "bg-brand-navy text-white",
  mint: "bg-brand-teal/10 text-slate-900",
  gradient: "bg-gradient-to-r from-brand-teal-fill to-brand-teal-dark text-white",
};

export const Section: React.FC<SectionProps> = ({
  children,
  bg = "white",
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        "w-full py-12 md:py-16 lg:py-24 transition-colors",
        bgVariants[bg],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};