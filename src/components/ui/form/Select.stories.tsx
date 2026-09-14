import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Select from "./Select";

const meta = {
  title: "Forms/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="max-w-sm bg-white p-6">
        <Story />
      </div>
    ),
  ],
  args: {
    label: "Select Service",
    name: "service",
    placeholder: "Choose a service...",
    options: ["AI Transformation", "Data and Analytics", "Cloud Solutions", "Digital Engineering"],
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const WithError: Story = { args: { required: true, error: "Please select a service." } };
export const Disabled: Story = { args: { disabled: true } };
