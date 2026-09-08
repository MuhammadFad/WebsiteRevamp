import Image from "next/image";

export type Logo = {
  name: string;
  src?: string; // e.g. "/logos/techcorp.svg" — without it the name is shown as text
};

export type LogoStripProps = {
  logos: Logo[];
  title?: string;
  tone?: "dark" | "light";
  className?: string;
};

export default function LogoStrip({
  logos,
  title,
  tone = "dark",
  className = "",
}: LogoStripProps) {
  const titleColor = tone === "dark" ? "text-[#8695A4]" : "text-[#5B6B7C]";
  const logoColor = tone === "dark" ? "text-white/70" : "text-[#0B1A2B]/70";

  return (
    <div className={className}>
      {title && (
        <p
          className={`mb-5 text-center text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-[11px] ${titleColor}`}
        >
          {title}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-12 lg:gap-x-16">
        {logos.map((logo) => (
          <div key={logo.name} className="flex items-center">
            {logo.src ? (
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={32}
                className="h-6 w-auto object-contain opacity-70 transition-opacity hover:opacity-100 sm:h-8"
              />
            ) : (
              <span
                className={`text-sm font-semibold transition-opacity hover:opacity-100 sm:text-base ${logoColor}`}
              >
                {logo.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
