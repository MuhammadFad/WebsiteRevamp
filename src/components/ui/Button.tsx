import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "teal" | "dark" | "outline" | "outlineLight" | "glass";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap transition-all duration-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variants: Record<ButtonVariant, string> = {
  // brand-teal-fill (not the raw spec teal) keeps white-on-fill text at AA contrast; see globals.css
  teal: "bg-brand-teal-fill text-white hover:bg-brand-teal-dark focus-visible:ring-brand-teal focus-visible:ring-offset-brand-navy",
  dark: "bg-brand-navy text-white border border-white/10 hover:bg-brand-card focus-visible:ring-brand-teal focus-visible:ring-offset-white",
  outline:
    "border border-brand-teal-dark text-brand-teal-dark hover:bg-brand-teal-dark hover:text-white focus-visible:ring-brand-teal focus-visible:ring-offset-white",
  outlineLight:
    "border border-white/40 text-white hover:bg-white hover:text-brand-navy focus-visible:ring-white focus-visible:ring-offset-brand-navy",
  glass:
    "border border-white/10 bg-white/5 text-white backdrop-blur-[10px] hover:border-white/20 focus-visible:ring-white focus-visible:ring-offset-brand-navy",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-xs rounded",
  md: "px-[30px] py-[13px] text-sm rounded",
  lg: "px-9 py-4 text-base rounded-lg",
};

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: boolean;
  className?: string;
  /** 500ms cubic-bezier premium easing for hero-level primary CTAs, instead of the standard 300ms */
  premium?: boolean;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export default function Button({
  children,
  variant = "teal",
  size = "md",
  icon = false,
  premium = false,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${
    premium ? "duration-500 ease-[var(--ease-premium)]" : ""
  } ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={`group ${classes}`} {...rest}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={`group ${classes}`} {...rest}>
      {content}
    </button>
  );
}
