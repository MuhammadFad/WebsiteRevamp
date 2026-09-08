import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export type IconCardProps = {
  icon?: ReactNode;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  variant?: "card" | "row";
  active?: boolean;
  className?: string;
};

export default function IconCard({
  icon,
  title,
  description,
  href,
  linkLabel,
  variant = "card",
  active = false,
  className = "",
}: IconCardProps) {
  if (variant === "row") {
    return (
      <div className={`flex items-start gap-4 ${className}`}>
        {icon ? (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#16A97F] [&>svg]:h-5 [&>svg]:w-5">
            {icon}
          </span>
        ) : null}

        <div className="pt-1">
          <h3 className="text-sm font-semibold text-[#0B1A2B] sm:text-base">{title}</h3>
          {description ? (
            <p className="mt-1.5 text-xs leading-relaxed text-[#5B6B7C] sm:text-sm">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#A8E7D3] hover:shadow-[0_18px_40px_-20px_rgba(11,26,43,0.35)] sm:p-6 ${className}`}
    >
      {active ? (
        <span
          aria-hidden
          className="absolute left-0 top-6 bottom-6 w-0.75 rounded-r-full bg-[#16A97F]"
        />
      ) : null}

      {icon ? (
        <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6F6F0] text-[#16A97F] sm:mb-5 sm:h-11 sm:w-11 [&>svg]:h-5 [&>svg]:w-5">
          {icon}
        </span>
      ) : null}

      <h3 className="text-base font-semibold leading-snug text-[#0B1A2B] sm:text-lg">
        {title}
      </h3>

      {description ? (
        <p
          className={`mt-3 text-xs leading-relaxed sm:text-sm ${active ? "text-[#8695A4]" : "text-[#5B6B7C]"
            }`}
        >
          {description}
        </p>
      ) : null}

      {href && linkLabel ? (
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-semibold uppercase tracking-[0.12em] text-[#16A97F] transition-colors hover:text-[#0B6B51]"
        >
          {linkLabel}
          <ArrowRight
            aria-hidden
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      ) : null}
    </div>
  );
}
