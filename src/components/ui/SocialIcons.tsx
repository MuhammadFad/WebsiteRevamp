// lucide-react dropped brand/logo icons, so the social marks used in the footer are drawn here.
import type { SVGProps } from "react";

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.5 9.5h5v12h-5v-12ZM10 9.5h4.8v1.6a5.2 5.2 0 0 1 4.7-2.4c3.4 0 4.5 2.2 4.5 5.6v7.2h-5v-6.4c0-1.5 0-3.5-2.2-3.5s-2.5 1.7-2.5 3.4v6.5h-4.3v-12Z" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-8h2.68l.4-3.12H13.5V7.9c0-.9.25-1.52 1.55-1.52h1.66V3.6C16.44 3.55 15.4 3.46 14.2 3.46c-2.5 0-4.2 1.53-4.2 4.33v2.09H7.3v3.12h2.7v8h3.5Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.9 3H21l-6.7 7.66L22.2 21h-6.2l-4.85-6.34L5.6 21H3.48l7.17-8.2L3 3h6.35l4.38 5.79L18.9 3Zm-1.09 16.17h1.17L7.28 4.75H6.02l11.79 14.42Z" />
    </svg>
  );
}
