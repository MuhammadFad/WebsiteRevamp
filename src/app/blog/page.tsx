import type { Metadata } from "next";
import { BlogHero } from "@/components/sections/BlogHero";
import { FeaturedPost } from "@/components/sections/FeaturedPost";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { HelpCta } from "@/components/sections/HelpCta";
import {
  blogs,
  blogIndustries,
  blogServices,
  getFeaturedPost,
} from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog | DevLogix",
  description:
    "Direct transmissions from our principal engineers on system design, telemetry, and sovereign engineering.",
};

type Props = {
  // In Next 16, searchParams is a Promise — so we await it below.
  searchParams: Promise<{ q?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const { q } = await searchParams;

  const featured = getFeaturedPost();

  // Everything except the featured post goes in the grid
  const gridPosts = blogs.filter((post) => post.slug !== featured.slug);

  return (
    <>
      <BlogHero
        label="The DevLogix Nexus"
        title="Software Engineering & AI Insights Blog."
        description="Direct transmissions from our principal engineers. No speculation, no marketing noise—just system design, telemetry metrics, and battle-tested sovereign protocols."
      />

      <FeaturedPost post={featured} />

      <BlogGrid
        title="Latest Transmissions"
        posts={gridPosts}
        industries={blogIndustries}
        services={blogServices}
        initialQuery={q}
      />

      <HelpCta
        title="How Can We Help You?"
        description="Are you ready to push boundaries and explore new frontiers of innovation?"
        buttonLabel="Let's Work Together"
        buttonHref="/#contact"
      />
    </>
  );
}
