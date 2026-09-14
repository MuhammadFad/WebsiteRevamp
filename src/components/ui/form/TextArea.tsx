import type { TextareaHTMLAttributes } from "react";

export type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  name: string;
  error?: string;
  tone?: "light" | "dark";
};

export default function TextArea({
  label,
  name,
  error,
  required,
  tone = "light",
  className = "",
  rows = 4,
  ...props
}: TextAreaFieldProps) {
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
      <textarea
        id={name}
        name={name}
        required={required}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`mt-2 w-full resize-none border-b bg-transparent py-2.5 text-sm placeholder:text-slate-400 placeholder:font-light focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${textColor} ${
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
