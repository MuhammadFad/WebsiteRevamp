import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

export type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  name: string;
  options: string[];
  placeholder?: string;
  error?: string;
  tone?: "light" | "dark";
};

export default function Select({
  label,
  name,
  options,
  placeholder = "Select an option",
  error,
  required,
  tone = "light",
  className = "",
  ...props
}: SelectFieldProps) {
  const errorId = `${name}-error`;
  const labelColor = tone === "dark" ? "text-slate-300" : "text-slate-700";
  const textColor = tone === "dark" ? "text-white" : "text-slate-900";
  const bg = tone === "dark" ? "bg-white/5" : "bg-white";
  const border = tone === "dark" ? "border-white/15" : "border-slate-300";
  const focusRing = tone === "dark" ? "focus:ring-brand-teal-hover/20" : "focus:ring-brand-teal/15";
  const focusBorder = tone === "dark" ? "focus:border-brand-teal-hover" : "focus:border-brand-teal";

  return (
    <div className={className}>
      <label htmlFor={name} className={`text-sm font-medium ${labelColor}`}>
        {label}
        {required && (
          <span aria-hidden className="text-brand-teal-dark">
            {" "}
            *
          </span>
        )}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          required={required}
          defaultValue=""
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`mt-2 w-full appearance-none rounded-lg border px-3.5 py-2.5 pr-9 text-sm focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${textColor} ${bg} ${
            error ? "border-red-500" : `${border} ${focusBorder} ${focusRing}`
          }`}
          {...props}
        >
          <option value="" disabled className="text-slate-400">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="text-slate-900">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden
          className={`pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 ${
            tone === "dark" ? "text-slate-300" : "text-slate-500"
          }`}
        />
      </div>
      {error && (
        <p
          id={errorId}
          role="alert"
          className={`mt-1.5 text-xs ${tone === "dark" ? "text-red-400" : "text-red-600"}`}
        >
          {error}
        </p>
      )}
    </div>
  );
}
