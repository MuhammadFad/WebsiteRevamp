import Image from "next/image";
import { Section } from "@/components/layout/Section";
import Container from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { ArrowLink } from "@/components/ui/ArrowLink";
import type { BlogPost } from "@/data/blogs";

type Props = {
  post: BlogPost;
  label?: string;
  tagLabel?: string;
  linkLabel?: string;
};

export function FeaturedPost({
  post,
  label = "Featured Intel Transmission",
  tagLabel = "Featured Intel",
  linkLabel = "Read more",
}: Props) {
  return (
    <Section bg="white">
      <Container>
        <Tag variant="outline" className="mb-5">
          {label}
        </Tag>

        <div className="grid overflow-hidden rounded-xl border border-slate-200 lg:grid-cols-2">
          {/* Picture — mint block until a real image is added */}
          <div className="relative aspect-16/10 w-full bg-brand-teal/10 lg:aspect-auto lg:min-h-[420px]">
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            )}
          </div>

          {/* Text */}
          <div className="flex flex-col p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-sm bg-brand-teal-dark px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white">
                {tagLabel}
              </span>
              <span className="text-[10px] uppercase tracking-[0.08em] text-slate-500">
                {post.date}
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              {post.title}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {post.excerpt}
            </p>

            <ArrowLink
              href={`/blog/${post.slug}`}
              className="mt-auto pt-8 text-xs uppercase tracking-[0.12em]"
            >
              {linkLabel}
            </ArrowLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
