import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ArrowLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ArrowLink: React.FC<ArrowLinkProps> = ({
  href,
  children,
  className,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <svg
        className="w-4 h-4 transition-transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </Link>
  );
};