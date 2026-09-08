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
      className={`flex h-full flex-col rounded-2xl border border-white/10 bg-[#122B43] p-5 sm:p-6 ${className}`}
    >
      <Quote className="h-5 w-5 shrink-0 text-[#3ECFA3] sm:h-6 sm:w-6" />

      <p className="mt-4 text-xs leading-relaxed text-[#B6C2CE] sm:text-sm">
        {quote}
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5 sm:mt-8">
        {avatar ? (
          <Image
            src={avatar}
            alt={name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16A97F] text-xs font-semibold text-white">
            {initials}
          </div>
        )}

        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-[11px] text-[#8695A4]">{role}</p>
        </div>
      </div>
    </div>
  );
}
