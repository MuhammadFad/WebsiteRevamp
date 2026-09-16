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
          className={`mt-2 w-full appearance-none border-b bg-transparent py-2.5 pr-8 text-sm focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${textColor} ${
            error
              ? "border-red-500"
              : "border-slate-300 focus:border-b-2 focus:border-brand-teal-dark"
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
          className={`pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 ${
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
