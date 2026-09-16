import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="flex flex-wrap items-center gap-4 bg-brand-navy p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: "radio",
      options: ["teal", "dark", "outline", "outlineLight", "glass"],
    },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    icon: { control: "boolean" },
  },
  args: {
    children: "Get in Touch",
  },
} as Meta<typeof Button>;

export default meta;
// `StoryObj<typeof meta>` collapses to `never` here because Button's props are a discriminated
// union (href present vs. absent) — referencing the component type directly resolves cleanly.
type Story = StoryObj<typeof Button>;

// The global header CTA — every page reuses this exact instance/copy (Known Handoff Issue #2).
export const HeaderCta: Story = {
  args: { children: "Get in Touch", variant: "teal", size: "md", icon: false, href: "#" },
};

// The homepage's shared "Partner with us" CTA — one component, reused in the Hero and the
// closing Contact CTA band (Known Handoff Issue #1), not two divergent implementations.
export const PrimaryCtaGlass: Story = {
  args: { children: "Partner with us", variant: "glass", size: "lg", premium: true, href: "#" },
  decorators: [
    (Story) => (
      <div className="bg-brand-navy p-8">
        <Story />
      </div>
    ),
  ],
};

export const Teal: Story = { args: { variant: "teal", href: "#" } };
export const Dark: Story = {
  args: { variant: "dark", children: "Submit", type: "button" },
  decorators: [
    (Story) => (
      <div className="bg-white p-8">
        <Story />
      </div>
    ),
  ],
};
export const Outline: Story = {
  args: { variant: "outline", children: "Learn More", href: "#" },
  decorators: [
    (Story) => (
      <div className="bg-white p-8">
        <Story />
      </div>
    ),
  ],
};
export const OutlineLight: Story = {
  args: { variant: "outlineLight", children: "Explore Services", href: "#" },
};
export const Disabled: Story = { args: { variant: "teal", disabled: true, type: "button" } };

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
