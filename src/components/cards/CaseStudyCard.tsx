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
      className={`group flex h-full flex-col rounded-xl bg-linear-to-br from-brand-teal-fill to-brand-teal-dark p-5 sm:p-6 ${className}`}
    >
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white sm:h-10 sm:w-10">
        <FileText className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
      </div>

      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
        {label}
      </span>

      <h3 className="mt-2 text-lg font-bold leading-snug text-white md:text-xl">{title}</h3>

      {description && (
        <p className="mt-3 text-sm leading-relaxed text-white/80">{description}</p>
      )}

      {href && (
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-semibold uppercase tracking-[0.12em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-teal-fill"
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
