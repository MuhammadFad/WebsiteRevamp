export type StatCounterProps = {
  value: string;
  label: string;
  align?: "left" | "center";
  /** Background this sits on — brand-teal-hover only passes AA against dark backgrounds. */
  tone?: "dark" | "light";
  className?: string;
};

export default function StatCounter({
  value,
  label,
  align = "left",
  tone = "dark",
  className = "",
}: StatCounterProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const valueColor = tone === "dark" ? "text-brand-teal-hover" : "text-brand-teal-dark";
  const labelColor = tone === "dark" ? "text-slate-400" : "text-slate-500";

  return (
    <div className={`${alignClass} ${className}`}>
      <p className={`text-3xl font-bold sm:text-4xl md:text-5xl ${valueColor}`}>{value}</p>

      <p className={`mt-2 text-xs font-medium tracking-[0.18em] uppercase ${labelColor}`}>
        {label}
      </p>
    </div>
  );
}
