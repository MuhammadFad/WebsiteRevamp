export type StatCardProps = {
  value: string;
  label: string;
  className?: string;
};

export default function StatCard({ value, label, className = "" }: StatCardProps) {
  return (
    <div
      className={`w-full rounded-xl border border-white/10 bg-brand-card px-6 py-8 text-center sm:px-10 sm:py-12 ${className}`}
    >
      <p className="text-4xl font-bold leading-none text-brand-teal-hover sm:text-5xl md:text-6xl">
        {value}
      </p>

      <p className="mt-3 text-sm text-slate-400 sm:mt-4">{label}</p>
    </div>
  );
}
