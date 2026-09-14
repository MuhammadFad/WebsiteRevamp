"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useSyncExternalStore } from "react";

export type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

function subscribe(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

/** Scroll entrance per DevLogix tokens: 0.6s, Framer Motion whileInView. Skips the motion
 * entirely (renders children plainly) for prefers-reduced-motion — the global CSS
 * transition-duration override doesn't reach Framer Motion's WAAPI-driven animation. */
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
