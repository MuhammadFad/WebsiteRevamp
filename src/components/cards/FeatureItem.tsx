import { Check } from "lucide-react";
import type { ReactNode } from "react";

export type FeatureItemProps = {
  title: string;
  description?: string;
  icon?: ReactNode; 
  variant?: "check" | "icon"; 
  className?: string;
};

export default function FeatureItem({
  title,
  description,
  icon,
  variant = "check",
  className = "",
}: FeatureItemProps) {
  const shownIcon = icon || <Check />;

  if (variant === "icon") {
    return (
      <div className={`w-full ${className}`}>
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#E6F6F0] text-[#16A97F] sm:mb-4 sm:h-10 sm:w-10 [&>svg]:h-5 [&>svg]:w-5">
          {shownIcon}
        </div>

        <h3 className="text-sm font-semibold text-[#0B1A2B] sm:text-base">{title}</h3>

        {description && (
          <p className="mt-2 text-xs leading-relaxed text-[#5B6B7C] sm:text-sm">
            {description}
          </p>
        )}
      </div>
    );
  }
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="mt-0.5 shrink-0 text-[#16A97F] [&>svg]:h-4 [&>svg]:w-4">
        {shownIcon}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[#0B1A2B] sm:text-base">{title}</h3>

        {description && (
          <p className="mt-1 text-xs leading-relaxed text-[#5B6B7C] sm:text-sm">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
