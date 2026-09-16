import type { InputHTMLAttributes, ReactNode } from "react";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  name: string;
  label: ReactNode;
  tone?: "light" | "dark";
};

export default function Checkbox({ name, label, tone = "light", className = "", ...props }: CheckboxProps) {
  const textColor = tone === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <label htmlFor={name} className={`flex cursor-pointer items-start gap-3 ${className}`}>
      <input
        id={name}
        name={name}
        type="checkbox"
        className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-slate-400 text-brand-teal-fill accent-brand-teal-fill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
        {...props}
      />
      <span className={`text-xs leading-relaxed ${textColor}`}>{label}</span>
    </label>
  );
}
