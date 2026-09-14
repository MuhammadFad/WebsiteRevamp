import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export type DoctrineStatementProps = {
  lines: string[];
};

/**
 * HANDOFF-AMBIGUOUS: the source ("The DevLogix Doctrine") paired this display headline with
 * a 3-item value list that word-for-word/near-duplicated the "Our Values" grid earlier on the
 * page, with contradicting descriptions for the same value names (see content-about.md §6).
 * Rather than ship two contradictory "our values" modules, the distinctive display headline is
 * kept as a standalone typographic statement and the duplicate list is dropped — the earlier
 * ValuesGrid is the single canonical values section.
 */
export default function DoctrineStatement({ lines }: DoctrineStatementProps) {
  return (
    <section className="bg-brand-navy py-20 md:py-28">
      <Container>
        <Reveal>
          <p className="text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            {lines.map((line, i) => (
              <span key={line} className={i === lines.length - 1 ? "text-brand-teal-hover" : ""}>
                {line}
                {i < lines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
