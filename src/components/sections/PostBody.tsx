import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import type { BlogPost } from "@/data/blogs";

type Props = {
  post: BlogPost;
  recommended: BlogPost[]; // the two small cards in the sidebar
};

export function PostBody({ post, recommended }: Props) {
  // Only sections with a heading go in the table of contents
  const tocItems = post.sections.filter((section) => section.heading);

  return (
    <Section bg="white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          {/* ---------- Article ---------- */}
          <article className="max-w-3xl">
            {post.sections.map((section, sectionIndex) => (
              <div key={section.id} id={section.id} className="scroll-mt-28">
                {section.heading && (
                  <h2 className="mb-4 mt-10 border-l-[3px] border-brand-teal pl-3 text-xl font-bold text-slate-900 sm:text-2xl">
                    {section.heading}
                  </h2>
                )}

                {section.paragraphs.map((text, paragraphIndex) => {
                  // The very first paragraph of the article is bigger and darker
                  const isLead = sectionIndex === 0 && paragraphIndex === 0;

                  if (isLead) {
                    return (
                      <p
                        key={paragraphIndex}
                        className="mb-5 text-base font-medium leading-relaxed text-slate-900 sm:text-lg"
                      >
                        {text}
                      </p>
                    );
                  }

                  return (
                    <p
                      key={paragraphIndex}
                      className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base"
                    >
                      {text}
                    </p>
                  );
                })}

                {section.quote && (
                  <blockquote className="my-8 border-l-[3px] border-brand-teal pl-5 text-base italic leading-relaxed text-brand-teal-dark sm:text-lg">
                    &ldquo;{section.quote}&rdquo;
                  </blockquote>
                )}

                {section.steps && (
                  <ol className="my-6 space-y-5">
                    {section.steps.map((step, stepIndex) => (
                      <li key={step.title} className="flex gap-4">
                        {/* 01, 02, 03 ... */}
                        <span className="w-7 shrink-0 pt-0.5 text-sm font-bold text-brand-teal-dark">
                          0{stepIndex + 1}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 sm:text-base">
                            {step.title}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                            {step.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </article>

          {/* ---------- Sidebar ---------- */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {/* Table of contents */}
            {tocItems.length > 0 && (
              <div className="rounded-lg border border-brand-teal/20 bg-white p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                  Table of Contents
                </p>
                <ul className="mt-3 space-y-2">
                  {tocItems.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-xs text-slate-600 transition-colors hover:text-brand-teal-dark sm:text-sm"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommended reads */}
            {recommended.length > 0 && (
              <div className="rounded-lg border border-brand-teal/20 bg-slate-50 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                  Recommended Reads
                </p>
                <ul className="mt-4 space-y-3">
                  {recommended.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="flex gap-3 rounded-md border border-slate-200 bg-white p-3 transition-colors hover:border-brand-teal/30"
                      >
                        <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded bg-brand-teal/10">
                          {item.image && (
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="64px"
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-teal-dark">
                            {item.category}
                          </p>
                          <p className="mt-0.5 line-clamp-2 text-xs font-semibold leading-snug text-slate-900">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[10px] text-slate-500">{item.date}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </Section>
  );
}
