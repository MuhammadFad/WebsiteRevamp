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
      <p className="text-3xl font-bold text-[#3ECFA3] sm:text-4xl md:text-5xl">{value}</p>

      <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8695A4] sm:text-[11px] sm:tracking-[0.18em]">
        {label}
      </p>
    </div>
  );
}
