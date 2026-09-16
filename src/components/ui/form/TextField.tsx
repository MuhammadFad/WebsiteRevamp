import type { InputHTMLAttributes } from "react";

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  error?: string;
  tone?: "light" | "dark";
};

// HANDOFF-AMBIGUOUS: the docx documented two divergent input systems ("floating label" vs
// "minimal underline") for what are functionally the same text field. Consolidated to one
// consistent pattern sitewide: an always-visible label (avoids the placeholder-as-label a11y
// pitfall of floating labels) with a bordered box that highlights teal on focus/error.
export default function TextField({
  label,
  name,
  error,
  required,
  tone = "light",
  className = "",
  ...props
}: TextFieldProps) {
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
      <input
        id={name}
        name={name}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`mt-2 w-full rounded-lg border px-3.5 py-2.5 text-sm placeholder:text-slate-400 placeholder:font-light focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${textColor} ${bg} ${
          error ? "border-red-500" : `${border} ${focusBorder} ${focusRing}`
        }`}
        {...props}
      />
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
