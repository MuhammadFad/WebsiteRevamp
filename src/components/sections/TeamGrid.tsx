import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Kicker from "../ui/Kicker";
import TeamCard from "../cards/TeamCard";

export type TeamGridProps = {
  kicker: string;
  heading: string;
  members: { name: string; role: string; linkedin?: string }[];
};

// Design review (2026-09-16): the leadership section drops its prev/next arrow buttons in
// favor of plain horizontal scroll (native touch/trackpad/keyboard), no separate controls.
//
// The card row lives inside <Container> (like ServicesCarousel) rather than carrying its own
// px-* padding on the scrolling flex element directly — Chromium drops a flex/overflow-auto
// container's *own* start-edge padding at scroll position 0 (confirmed via computed styles:
// padding-left measured 80px but the first card still rendered at x:0), which is exactly why
// this section had no visible side padding. Putting the padding on the non-scrolling Container
// ancestor instead sidesteps the bug entirely, same as every other horizontal scroller here.
export default function TeamGrid({ kicker, heading, members }: TeamGridProps) {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <Container className="flex flex-col gap-10 md:gap-12">
        <Reveal className="flex flex-col gap-4">
          <Kicker tone="light">{kicker}</Kicker>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Percentage-based widths (not a fixed px size) so a card always peeks past the
              edge as a scroll hint — matching the Core Services carousel pattern — instead of
              exactly 4 fixed-width cards fitting flush with nothing implying scroll. */}
          <div
            role="region"
            aria-label={heading}
            tabIndex={0}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            {members.map((member) => (
              <div
                key={member.name}
                className="w-[70%] shrink-0 snap-start sm:w-[42%] lg:w-[30%]"
              >
                <TeamCard {...member} />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
