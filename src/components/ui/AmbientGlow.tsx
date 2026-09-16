export type AmbientGlowProps = {
  className?: string;
};

/**
 * Ambient Teal Glow token: brand-teal @ 5% opacity, blur-150px.
 * HANDOFF-AMBIGUOUS / Known Issue #3: the annotated hero screenshot rendered this as a
 * red/maroon glow — that's the rendering error, not the spec. Implemented in teal per the
 * documented token.
 */
export default function AmbientGlow({ className = "" }: AmbientGlowProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full bg-brand-teal opacity-5 blur-[150px] ${className}`}
    />
  );
}
