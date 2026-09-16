"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { Pagination } from "@/components/ui/Pagination";
import BlogCard from "@/components/cards/BlogCard";
import type { BlogPost } from "@/data/blogs";

type Props = {
  title: string;
  posts: BlogPost[];
  industries: string[];
  services: string[];
  initialQuery?: string; // comes from the hero search box (/blog?q=...)
};

const PER_PAGE = 9;

export function BlogGrid({
  title,
  posts,
  industries,
  services,
  initialQuery = "",
}: Props) {
  // What the user has typed or picked
  const [query, setQuery] = useState(initialQuery);
  const [industry, setIndustry] = useState("");
  const [service, setService] = useState("");
  const [page, setPage] = useState(1);

  // Step 1 — keep only the posts that match every filter
  const search = query.trim().toLowerCase();

  const filtered = posts.filter((post) => {
    const matchesText =
      search === "" ||
      post.title.toLowerCase().includes(search) ||
      post.excerpt.toLowerCase().includes(search);

    const matchesIndustry = industry === "" || post.industry === industry;
    const matchesService = service === "" || post.service === service;

    return matchesText && matchesIndustry && matchesService;
  });

  // Step 2 — show only the posts for the current page
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visible = filtered.slice(start, start + PER_PAGE);

  return (
    <Section bg="grey">
      <Container>
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>

        {/* Filter bar — filters apply as soon as you type or pick */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-6 flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-3 md:flex-row md:items-center"
        >
          <div className="md:flex-1">
            <Input
              placeholder="Filter by title or keyword..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />
          </div>

          <div className="md:w-44">
            <Select
              aria-label="Filter by industry"
              placeholder="Industries"
              options={industries.map((name) => ({ value: name, label: name }))}
              onChange={(e) => {
                setIndustry(e.target.value);
                setPage(1);
              }}
            />
          </div>

          <div className="md:w-44">
            <Select
              aria-label="Filter by service"
              placeholder="Services"
              options={services.map((name) => ({ value: name, label: name }))}
              onChange={(e) => {
                setService(e.target.value);
                setPage(1);
              }}
            />
          </div>

          <Button type="submit" className="uppercase tracking-wide">
            Filter Transmissions
          </Button>
        </form>

        {/* Cards */}
        {visible.length === 0 && (
          <p className="mt-10 text-center text-sm text-slate-500">
            No posts match those filters.
          </p>
        )}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              tag={post.category}
              date={post.date}
              href={`/blog/${post.slug}`}
            />
          ))}
        </div>

        <Pagination
          page={page}
          totalPages={totalPages}
          onChange={setPage}
          className="mt-10"
        />
      </Container>
    </Section>
  );
}
