import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Landmark, Lightbulb, ShieldCheck, Target } from "lucide-react";

import IconCard from "./IconCard";

const meta = {
  title: "Cards/IconCard",
  component: IconCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="max-w-xs">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    href: { control: "text" },
    linkLabel: { control: "text" },
    variant: { control: "radio", options: ["card", "row"] },
    active: { control: "boolean" },
    icon: { control: false },
  },
  args: {
    title: "Banking & Financial Services",
  },
} satisfies Meta<typeof IconCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Landmark />,
    title: "Banking & Financial Services",
    description:
      "Delivering secure, compliant, and scalable digital solutions for banks and fintechs.",
    href: "/industries/banking",
    linkLabel: "Explore More",
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
    active: true,
  },
};

export const NoLink: Story = {
  args: {
    icon: <Lightbulb />,
    title: "Innovation",
    description:
      "Pioneering AI-native and sovereign engineering solutions that redefine what is possible.",
  },
};

export const RowVariant: Story = {
  args: {
    variant: "row",
    icon: <ShieldCheck />,
    title: "Integrity",
    description:
      "No vaporware, no marketing assertions. We compile, execute, and verify systems directly.",
  },
  decorators: [
    (Story) => (
      <div className="max-w-md rounded-xl bg-slate-50 p-8">
        <Story />
      </div>
    ),
  ],
};

export const CardGrid: Story = {
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="p-10">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <IconCard
        icon={<Landmark />}
        title="Banking & Financial Services"
        description="Delivering secure, compliant, and scalable digital solutions for banks and fintechs."
        href="/industries/banking"
        linkLabel="Explore More"
        active
      />
      <IconCard
        icon={<Lightbulb />}
        title="Innovation"
        description="Pioneering AI-native and sovereign engineering solutions that redefine what is possible."
      />
      <IconCard
        icon={<ShieldCheck />}
        title="Integrity"
        description="No vaporware, no marketing assertions. We compile, execute, and verify systems directly."
      />
      <IconCard
        icon={<Target />}
        title="Dedication"
        description="Strict adherence to deterministic, high-efficiency compute agreements and delivery standards."
      />
    </div>
  ),
};

export const RowGroup: Story = {
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="p-10">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="max-w-md rounded-xl bg-slate-50 p-8">
      <div className="space-y-7">
        <IconCard
          variant="row"
          icon={<ShieldCheck />}
          title="Integrity"
          description="No vaporware, no marketing assertions. We compile, execute, and verify systems directly."
        />
        <IconCard
          variant="row"
          icon={<Lightbulb />}
          title="Innovation"
          description="Developing on-premise execution modes optimized for physical data sovereignty."
        />
        <IconCard
          variant="row"
          icon={<Target />}
          title="Dedication"
          description="Strict adherence to deterministic, high-efficiency compute agreements."
        />
      </div>
    </div>
  ),
};
