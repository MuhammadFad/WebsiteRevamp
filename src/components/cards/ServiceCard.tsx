import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type ServiceCardProps = {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  linkLabel?: string;
  className?: string;
};

export default function ServiceCard({
  title,
  description,
  image,
  href,
  linkLabel = "Learn More",
  className = "",
}: ServiceCardProps) {
  return (
    <div
      className={`group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:border-brand-teal/30 hover:shadow-[0_18px_40px_-20px_rgba(11,18,33,0.35)] ${className}`}
    >
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-bold leading-snug text-slate-900 md:text-xl">{title}</h3>

        {description && (
          <p className="mt-3 text-sm leading-relaxed text-slate-500">{description}</p>
        )}

        {href && (
          <Link
            href={href}
            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-teal-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            {linkLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        )}
      </div>

      <div className="relative mt-auto aspect-16/10 w-full bg-brand-teal/10">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
}
