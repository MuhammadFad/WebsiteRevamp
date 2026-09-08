export type NumberedCardProps = {
  number: string;
  title: string;
  description?: string;
  className?: string;
};

export default function NumberedCard({
  number,
  title,
  description,
  className = "",
}: NumberedCardProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:border-[#A8E7D3] hover:shadow-[0_18px_40px_-20px_rgba(11,26,43,0.35)] sm:p-6 ${className}`}
    >
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#E6F6F0] text-sm font-semibold text-[#16A97F] sm:h-10 sm:w-10 sm:text-base">
        {number}
      </div>

      <h3 className="text-base font-semibold leading-snug text-[#0B1A2B] sm:text-lg">
        {title}
      </h3>

      {description && (
        <p className="mt-3 text-xs leading-relaxed text-[#5B6B7C] sm:text-sm">
          {description}
        </p>
      )}
    </div>
  );
}
