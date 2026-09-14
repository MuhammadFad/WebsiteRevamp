"use client";

export type PillGroupProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  tone?: "light" | "dark";
};

export default function PillGroup({
  label,
  name,
  options,
  required,
  value,
  onChange,
  error,
  tone = "light",
}: PillGroupProps) {
  const labelColor = tone === "dark" ? "text-slate-300" : "text-slate-700";

  return (
    <fieldset>
      <legend className={`text-sm font-medium ${labelColor}`}>
        {label}
        {required && (
          <span aria-hidden className="text-brand-teal-dark">
            {" "}
            *
          </span>
        )}
      </legend>
      <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label={label}>
        {options.map((option) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(option)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 ${
                selected
                  ? "border-brand-teal-fill bg-brand-teal-fill text-white"
                  : tone === "dark"
                    ? "border-white/20 text-slate-300 hover:border-white/40"
                    : "border-slate-300 text-slate-600 hover:border-brand-teal-dark hover:text-brand-teal-dark"
              }`}
            >
              {option}
            </button>
          );
        })}
        {/* Hidden input so a plain <form> submit (FormData) still carries this field's value. */}
        <input type="hidden" name={name} value={value} />
      </div>
      {error && (
        <p role="alert" className={`mt-1.5 text-xs ${tone === "dark" ? "text-red-400" : "text-red-600"}`}>
          {error}
        </p>
      )}
    </fieldset>
  );
}
