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
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:border-[#A8E7D3] hover:shadow-[0_18px_40px_-20px_rgba(11,26,43,0.35)] ${className}`}
    >
      <div className="p-5 sm:p-6">
        <h3 className="text-base font-semibold leading-snug text-[#0B1A2B] sm:text-lg">
          {title}
        </h3>

        {description && (
          <p className="mt-3 text-xs leading-relaxed text-[#5B6B7C] sm:text-sm">
            {description}
          </p>
        )}

        {href && (
          <Link
            href={href}
            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#16A97F] transition-colors hover:text-[#0B6B51]"
          >
            {linkLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        )}
      </div>

      <div className="relative mt-auto aspect-16/10 w-full bg-[#E6F6F0]">
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
