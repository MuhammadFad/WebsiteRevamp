import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import BlogCard from "./BlogCard";

const meta = {
  title: "Cards/BlogCard",
  component: BlogCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: { control: "text" },
    excerpt: { control: "text" },
    image: { control: "text" },
    tag: { control: "text" },
    tags: { control: "object" },
    href: { control: "text" },
    linkLabel: { control: "text" },
    variant: { control: "radio", options: ["overlay", "horizontal", "vertical"] },
  },
  args: {
    title: "Mapping the Next Wave of AI-Powered Business Intelligence",
    href: "/insights/ai-business-intelligence",
  },
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    variant: "vertical",
    tag: "Whitepaper",
    title: "Mapping the Next Wave of AI-Powered Business Intelligence",
    excerpt:
      "How organisations can harness data, insight, and decisions to stay ahead of rapidly shifting market conditions.",
    tags: ["Data & AI", "Healthcare"],
    href: "/insights/ai-business-intelligence",
  },
};

export const VerticalWithImage: Story = {
  args: {
    ...Vertical.args,
    image: "https://picsum.photos/seed/devlogix-blog-1/640/400",
  },
};

export const Overlay: Story = {
  args: {
    variant: "overlay",
    tag: "Blog",
    title: "10 Practical Principles for Reliable Microservices Web Apps",
    href: "/insights/microservices",
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
};

export const Horizontal: Story = {
  args: {
    variant: "horizontal",
    title:
      "Why Most Digital Transformations Fail (and How Sovereign Engineering Saves Them)",
    href: "/insights/why-transformations-fail",
  },
  decorators: [
    (Story) => (
      <div className="max-w-lg">
        <Story />
      </div>
    ),
  ],
};

export const HomeLayout: Story = {
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="p-10">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="grid gap-5 lg:grid-cols-2">
      <BlogCard
        variant="overlay"
        tag="Blog"
        title="10 Practical Principles for Reliable Microservices Web Apps"
        href="/insights/microservices"
      />
      <div className="grid gap-5">
        <BlogCard
          variant="horizontal"
          title="Why Most Digital Transformations Fail (and How Sovereign Engineering Saves Them)"
          href="/insights/why-transformations-fail"
        />
        <BlogCard
          variant="horizontal"
          title="How AI-Powered Code Review is Reshaping Enterprise DevOps"
          href="/insights/ai-code-review"
        />
      </div>
    </div>
  ),
};

export const AboutLayout: Story = {
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="p-10">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <BlogCard
        tag="Whitepaper"
        title="Mapping the Next Wave of AI-Powered Business Intelligence"
        excerpt="How organisations can harness data, insight, and decisions to stay ahead of rapidly shifting market conditions."
        tags={["Data & AI", "Healthcare"]}
        href="/insights/ai-business-intelligence"
      />
      <BlogCard
        tag="Case Study"
        title="Modernising Legacy Systems Is Not a Technology Decision: It's a Business One"
        excerpt="This brief reframes modernisation as a business portfolio decision, where its sequence investment and how to measure success."
        tags={["Modernisation", "Enterprise"]}
        href="/insights/legacy-modernisation"
      />
      <BlogCard
        tag="Blog"
        title="Critical Developments That Leaders Need to Tackle Now"
        excerpt="The challenges facing top teams are significant, and precisely the ones that well-funded programmes continue failing to address."
        tags={["Data Engineering", "Technology"]}
        href="/insights/critical-developments"
      />
    </div>
  ),
};
