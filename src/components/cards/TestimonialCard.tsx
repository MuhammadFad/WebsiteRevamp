import Image from "next/image";
import { Quote } from "lucide-react";

export type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  className?: string;
};

export default function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  className = "",
}: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className={`flex h-full flex-col rounded-xl border border-white/10 bg-brand-card p-5 sm:p-6 ${className}`}
    >
      <Quote className="h-5 w-5 shrink-0 text-brand-teal-hover sm:h-6 sm:w-6" aria-hidden />

      <p className="mt-4 text-sm leading-relaxed text-slate-300">{quote}</p>

      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5 sm:mt-8">
        {avatar ? (
          <Image
            src={avatar}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div
            aria-hidden
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal-fill text-xs font-semibold text-white"
          >
            {initials}
          </div>
        )}

        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-slate-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
