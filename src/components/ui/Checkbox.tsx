import React from "react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, id, ...props }, ref) => {
    const checkboxId = id || "checkbox-" + Math.random().toString(36).substring(2, 9);

    return (
      <div className="flex items-start gap-2.5 cursor-pointer">
        <div className="flex items-center h-5">
          <input
            id={checkboxId}
            ref={ref}
            type="checkbox"
            className={cn(
              "w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 focus:ring-offset-0 transition-colors cursor-pointer",
              className
            )}
            {...props}
          />
        </div>
        {label && (
          <label htmlFor={checkboxId} className="text-xs sm:text-sm text-slate-600 cursor-pointer select-none">
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";