import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type BlogCardProps = {
  title: string;
  excerpt?: string;
  image?: string;
  tag?: string;
  tags?: string[]; // small grey chips under the text
  date?: string; // e.g. "March 8, 2026"
  author?: { name: string; avatar?: string }; // shown at the bottom of the vertical card
  href: string;
  linkLabel?: string;
  /**
   * "overlay"    — big card, text sits on top of the image (Home, featured)
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
  date,
  author,
  href,
  linkLabel = "Read more",
  variant = "vertical",
  className = "",
}: BlogCardProps) {
  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2";

  // Shape 1 — text on top of the image
  if (variant === "overlay") {
    return (
      <Link
        href={href}
        className={`group relative flex min-h-70 flex-col justify-end overflow-hidden rounded-xl bg-brand-card p-5 sm:min-h-85 sm:p-6 ${focusRing} ${className}`}
      >
        {image && (
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        <div className="relative">
          {tag && (
            <span className="inline-block rounded-full bg-brand-teal-fill px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
              {tag}
            </span>
          )}

          <h3 className="mt-3 text-lg font-bold leading-snug text-white md:text-xl">{title}</h3>

          {excerpt && <p className="mt-2 text-sm leading-relaxed text-white/70">{excerpt}</p>}

          <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-brand-teal-hover">
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
        className={`group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-brand-card transition duration-300 hover:border-white/20 sm:flex-row ${focusRing} ${className}`}
      >
        <div className="relative aspect-16/10 w-full shrink-0 bg-white/5 sm:aspect-auto sm:w-40 md:w-48">
          {image && (
            <Image
              src={image}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 200px"
              className="object-cover"
            />
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          {tag && (
            <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-teal-hover">
              {tag}
            </span>
          )}

          <h3 className="text-sm font-bold leading-snug text-white sm:text-base">{title}</h3>

          {excerpt && <p className="mt-2 text-xs leading-relaxed text-slate-400">{excerpt}</p>}

          <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-brand-teal-hover">
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
      className={`group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:border-brand-teal/30 hover:shadow-[0_18px_40px_-20px_rgba(11,18,33,0.35)] ${focusRing} ${className}`}
    >
      <div className="relative aspect-16/10 w-full bg-brand-teal/10">
        {image && (
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        {(tag || date) && (
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {tag && (
              <span className="rounded-sm bg-[#16A97F] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white">
                {tag}
              </span>
            )}
            {date && (
              <span className="text-[10px] uppercase tracking-[0.08em] text-[#8695A4]">
                {date}
              </span>
            )}
          </div>
        )}

        <h3 className="text-sm font-bold leading-snug text-slate-900 sm:text-base">{title}</h3>

        {excerpt && <p className="mt-2 text-sm leading-relaxed text-slate-500">{excerpt}</p>}

        {tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((chip) => (
              <span
                key={chip}
                className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600"
              >
                {chip}
              </span>
            ))}
          </div>
        )}

        {author && (
          <div className="mt-4 flex items-center gap-2">
            {author.avatar ? (
              <Image
                src={author.avatar}
                alt={author.name}
                width={24}
                height={24}
                className="h-6 w-6 rounded-full object-cover"
              />
            ) : (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E6F6F0] text-[9px] font-semibold text-[#16A97F]">
                {author.name[0]}
              </span>
            )}
            <span className="text-[11px] font-medium text-[#0B1A2B]">
              {author.name}
            </span>
          </div>
        )}

        <span className="mt-auto inline-flex items-center gap-2 pt-4 text-xs font-semibold text-[#16A97F]">
          {linkLabel}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
