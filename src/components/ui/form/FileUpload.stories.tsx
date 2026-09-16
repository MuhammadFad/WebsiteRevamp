import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FileUpload from "./FileUpload";

const meta = {
  title: "Forms/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="max-w-sm bg-brand-navy p-6">
        <Story />
      </div>
    ),
  ],
  args: {
    label: "Resume / CV",
    name: "resume",
    // The decorator above renders on brand-navy — pass tone="dark" so FileUpload's own
    // colors match it (the real usage in CareersForm sits on a white card, tone="light").
    tone: "dark",
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const WithError: Story = { args: { required: true, error: "Please upload your resume." } };
