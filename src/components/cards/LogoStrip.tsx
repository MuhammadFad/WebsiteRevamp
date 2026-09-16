import Image from "next/image";

export type Logo = {
  name: string;
  src?: string; // e.g. "/logos/techcorp.svg" — without it the name is shown as text
};

export type LogoStripProps = {
  logos: Logo[];
  title?: string;
  tone?: "dark" | "light";
  /** Continuously scrolling marquee (40s linear infinite, per animation tokens) vs a static row. */
  marquee?: boolean;
  className?: string;
};

export default function LogoStrip({
  logos,
  title,
  tone = "dark",
  marquee = false,
  className = "",
}: LogoStripProps) {
  const titleColor = tone === "dark" ? "text-slate-400" : "text-slate-500";
  const logoColor = tone === "dark" ? "text-white/70" : "text-slate-900/70";

  const row = (extra?: string) => (
    <div
      aria-hidden={extra === "duplicate"}
      className={`flex shrink-0 items-center gap-x-10 sm:gap-x-14 lg:gap-x-20 ${
        marquee ? "" : "flex-wrap justify-center gap-y-5"
      }`}
    >
      {logos.map((logo) => (
        <div key={`${logo.name}-${extra ?? "a"}`} className="flex items-center">
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
              className={`text-sm font-semibold whitespace-nowrap transition-opacity hover:opacity-100 sm:text-base ${logoColor}`}
            >
              {logo.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className={className}>
      {title && (
        <p
          className={`mb-5 text-center text-xs font-bold tracking-[0.3em] uppercase ${titleColor}`}
        >
          {title}
        </p>
      )}

      {marquee ? (
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee">
            {row()}
            {row("duplicate")}
          </div>
        </div>
      ) : (
        row()
      )}
    </div>
  );
}
