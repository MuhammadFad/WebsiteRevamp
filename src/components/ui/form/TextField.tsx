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
// pitfall of floating labels) with a bottom-border that responds to focus/error/disabled.
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
        className={`mt-2 w-full border-b bg-transparent py-2.5 text-sm placeholder:text-slate-400 placeholder:font-light focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${textColor} ${
          error
            ? "border-red-500"
            : "border-slate-300 focus:border-b-2 focus:border-brand-teal-dark"
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
