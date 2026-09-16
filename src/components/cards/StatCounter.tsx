export type StatCounterProps = {
  value: string;
  label: string;
  align?: "left" | "center";
  className?: string;
};

export default function StatCounter({
  value,
  label,
  align = "left",
  className = "",
}: StatCounterProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} ${className}`}>
      <p className="text-3xl font-bold text-brand-teal-hover sm:text-4xl md:text-5xl">{value}</p>

      <p className="mt-2 text-xs font-medium tracking-[0.18em] text-slate-400 uppercase">
        {label}
      </p>
    </div>
  );
}
