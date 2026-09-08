import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type BlogCardProps = {
  title: string;
  excerpt?: string;
  image?: string; 
  tag?: string;
  tags?: string[]; // small grey chips under the text
  href: string;
  linkLabel?: string;
  /**
   * "overlay"    — big card, text sits on top of the image (Home)
   * "horizontal" — wide dark card, image on the left (Home)
   * "vertical"   — small light card, image on top (About)
   */
  variant?: "overlay" | "horizontal" | "vertical";
  className?: string;
};

export default function BlogCard({
  title,
  excerpt,
  image,
  tag,
  tags,
  href,
  linkLabel = "Read more",
  variant = "vertical",
  className = "",
}: BlogCardProps) {
  // Shape 1 — text on top of the image
  if (variant === "overlay") {
    return (
      <Link
        href={href}
        className={`group relative flex min-h-70 flex-col justify-end overflow-hidden rounded-2xl bg-[#0A2036] p-5 sm:min-h-85 sm:p-6 ${className}`}
      >
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-transparent" />

        <div className="relative">
          {tag && (
            <span className="inline-block rounded-full bg-[#16A97F] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
              {tag}
            </span>
          )}

          <h3 className="mt-3 text-lg font-semibold leading-snug text-white sm:text-xl">
            {title}
          </h3>

          {excerpt && (
            <p className="mt-2 text-xs leading-relaxed text-white/70 sm:text-sm">
              {excerpt}
            </p>
          )}

          <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#3ECFA3]">
            {linkLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    );
  }

  // Shape 2 — wide dark card, image on the left
  if (variant === "horizontal") {
    return (
      <Link
        href={href}
        className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-[#0A2036] sm:flex-row ${className}`}
      >
        <div className="relative aspect-16/10 w-full shrink-0 bg-[#122B43] sm:aspect-auto sm:w-40 md:w-48">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, 200px"
              className="object-cover"
            />
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          {tag && (
            <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#3ECFA3]">
              {tag}
            </span>
          )}

          <h3 className="text-sm font-semibold leading-snug text-white sm:text-base">
            {title}
          </h3>

          {excerpt && (
            <p className="mt-2 text-xs leading-relaxed text-[#8695A4]">
              {excerpt}
            </p>
          )}

          <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#3ECFA3]">
            {linkLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:border-[#A8E7D3] hover:shadow-[0_18px_40px_-20px_rgba(11,26,43,0.35)] ${className}`}
    >
      <div className="relative aspect-16/10 w-full bg-[#E6F6F0]">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        {tag && (
          <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#16A97F]">
            {tag}
          </span>
        )}

        <h3 className="text-sm font-semibold leading-snug text-[#0B1A2B] sm:text-base">
          {title}
        </h3>

        {excerpt && (
          <p className="mt-2 text-xs leading-relaxed text-[#5B6B7C]">
            {excerpt}
          </p>
        )}

        {tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((chip) => (
              <span
                key={chip}
                className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-[#5B6B7C]"
              >
                {chip}
              </span>
            ))}
          </div>
        )}

        <span className="mt-4 inline-flex items-center gap-2 pt-1 text-xs font-semibold text-[#16A97F]">
          {linkLabel}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
