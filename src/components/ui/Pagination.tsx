"use client";

type Props = {
  page: number; // current page, starts at 1
  totalPages: number;
  onChange: (page: number) => void;
  className?: string;
};

export function Pagination({ page, totalPages, onChange, className = "" }: Props) {
  // Nothing to paginate
  if (totalPages <= 1) return null;

  // Build [1, 2, 3, ...] up to totalPages
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const isLastPage = page === totalPages;

  const base = "min-w-9 h-9 px-3 rounded-md border text-xs font-semibold transition-colors";
  const normal = "border-slate-300 bg-white text-slate-700 hover:border-emerald-500 hover:text-emerald-700 disabled:opacity-40";
  const active = "border-emerald-600 bg-emerald-600 text-white";

  return (
    <nav className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
      {pages.map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          className={`${base} ${n === page ? active : normal}`}
        >
          {n}
        </button>
      ))}

      <button
        onClick={() => onChange(page + 1)}
        disabled={isLastPage}
        className={`${base} ${normal}`}
      >
        Next
      </button>

      <button
        onClick={() => onChange(totalPages)}
        disabled={isLastPage}
        className={`${base} ${normal}`}
      >
        Last
      </button>
    </nav>
  );
}
