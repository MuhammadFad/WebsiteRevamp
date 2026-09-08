export type StatCardProps = {
  value: string;
  label: string;
  className?: string;
};

export default function StatCard({ value, label, className = "" }: StatCardProps) {
  return (
    <div
      className={`w-full rounded-2xl bg-[#0A2036] px-6 py-8 text-center sm:px-10 sm:py-12 ${className}`}
    >
      <p className="text-4xl font-bold leading-none text-[#3ECFA3] sm:text-5xl md:text-6xl">
        {value}
      </p>

      <p className="mt-3 text-xs text-[#8695A4] sm:mt-4 sm:text-sm">{label}</p>
    </div>
  );
}
