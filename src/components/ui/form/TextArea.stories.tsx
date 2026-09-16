import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TextArea from "./TextArea";

const meta = {
  title: "Forms/TextArea",
  component: TextArea,
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
    label: "Project Description",
    name: "projectDescription",
    placeholder: "Briefly describe your project or goals...",
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const WithError: Story = { args: { required: true, error: "Project description is required." } };
export const Disabled: Story = { args: { disabled: true } };
