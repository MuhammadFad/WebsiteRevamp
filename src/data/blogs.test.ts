import { describe, expect, it } from "vitest";
import { blogs, getFeaturedPost, getPostBySlug, getRelatedPosts } from "./blogs";

describe("blogs data integrity", () => {
  it("has no duplicate slugs (each becomes a distinct /blog/<slug> route)", () => {
    const slugs = blogs.map((post) => post.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has exactly one featured post", () => {
    expect(blogs.filter((post) => post.featured).length).toBe(1);
  });
});

describe("getFeaturedPost", () => {
  it("returns the post flagged as featured", () => {
    const featured = getFeaturedPost();
    expect(featured.featured).toBe(true);
  });
});

describe("getPostBySlug", () => {
  it("finds a post by its exact slug", () => {
    const [first] = blogs;
    expect(getPostBySlug(first.slug)).toBe(first);
  });

  it("returns undefined for a slug that doesn't exist", () => {
    expect(getPostBySlug("does-not-exist")).toBeUndefined();
  });
});

describe("getRelatedPosts", () => {
  it("excludes the given slug from the results", () => {
    const [first] = blogs;
    const related = getRelatedPosts(first.slug, blogs.length);
    expect(related.some((post) => post.slug === first.slug)).toBe(false);
  });

  it("returns at most `count` posts", () => {
    const [first] = blogs;
    expect(getRelatedPosts(first.slug, 2)).toHaveLength(2);
  });
});
