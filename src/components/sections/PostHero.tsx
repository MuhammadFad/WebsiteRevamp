import Image from "next/image";
import { Section } from "@/components/layout/Section";
import Container from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import type { BlogPost } from "@/data/blogs";

type Props = {
  post: BlogPost;
};

// Personal instruction (standing sitewide rule): every non-homepage hero has its precursor
// element removed — this used to show a breadcrumb and a category tag above the h1. The
// breadcrumb is dropped outright; the category is still useful metadata for a post, so it
// moves down into the author/date row instead of disappearing.
export function PostHero({ post }: Props) {
  return (
    <Section bg="navy" className="py-10 md:py-14 lg:py-16">
      <Container>
        <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          {post.title}
        </h1>

        {/* Category + author + date + read time */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Tag variant="mint">{post.category}</Tag>

          <div className="flex items-center gap-3">
            {post.author.avatar ? (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal-dark text-xs font-semibold text-white">
                {post.author.name[0]}
              </span>
            )}

            <div>
              <p className="text-sm font-semibold text-white">{post.author.name}</p>
              <p className="text-[11px] text-slate-400">{post.author.role}</p>
            </div>
          </div>

          <div className="border-l border-slate-700 pl-6">
            <p className="text-sm font-medium text-white">{post.date}</p>
            <p className="text-[11px] text-slate-400">{post.readTime}</p>
          </div>
        </div>

        {/* Hero picture — mint block until a real image is added */}
        <div className="relative mt-8 aspect-16/9 w-full overflow-hidden rounded-xl bg-brand-card sm:aspect-21/9">
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
          )}
        </div>
      </Container>
    </Section>
  );
}
