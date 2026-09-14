export type KickerProps = {
  children: string;
  /** Background this sits on — controls which teal shade keeps AA contrast. */
  tone?: "dark" | "light";
  className?: string;
};

export default function Kicker({ children, tone = "dark", className = "" }: KickerProps) {
  // brand-teal-hover only passes AA against dark backgrounds; brand-teal-dark is the
  // safe choice on white/light surfaces (see globals.css contrast notes).
  const textColor = tone === "dark" ? "text-brand-teal-hover" : "text-brand-teal-dark";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span aria-hidden className="h-[18px] w-1 rounded-sm bg-brand-teal" />
      <span className={`text-xs font-bold tracking-[0.3em] uppercase ${textColor}`}>
        {children}
      </span>
    </div>
  );
}
