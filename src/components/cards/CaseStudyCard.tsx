import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export type CaseStudyCardProps = {
  title: string;
  description?: string;
  label?: string;
  href?: string;
  linkLabel?: string;
  className?: string;
};

export default function CaseStudyCard({
  title,
  description,
  label = "Case Study",
  href,
  linkLabel = "Read More",
  className = "",
}: CaseStudyCardProps) {
  return (
    <div
      className={`group flex h-full flex-col rounded-2xl bg-linear-to-br from-[#16A97F] to-[#0B6B51] p-5 sm:p-6 ${className}`}
    >
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white sm:h-10 sm:w-10">
        <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>

      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
        {label}
      </span>

      <h3 className="mt-2 text-base font-semibold leading-snug text-white sm:text-lg">
        {title}
      </h3>

      {description && (
        <p className="mt-3 text-xs leading-relaxed text-white/80 sm:text-sm">
          {description}
        </p>
      )}

      {href && (
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-semibold uppercase tracking-[0.12em] text-white"
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
