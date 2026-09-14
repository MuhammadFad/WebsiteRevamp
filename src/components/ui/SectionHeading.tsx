import Kicker from "./Kicker";

export type SectionHeadingProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  tone = "dark",
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = tone === "dark" ? "text-white" : "text-slate-900";
  const subtitleColor = tone === "dark" ? "text-slate-300" : "text-slate-500";

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {kicker && (
        <Kicker tone={tone} className={align === "center" ? "justify-center" : ""}>
          {kicker}
        </Kicker>
      )}
      <h2 className={`text-3xl font-bold tracking-tight md:text-4xl ${titleColor}`}>{title}</h2>
      {subtitle && (
        <p className={`max-w-2xl text-lg font-light md:text-xl ${subtitleColor}`}>{subtitle}</p>
      )}
    </div>
  );
}
