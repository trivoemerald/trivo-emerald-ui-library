import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile badge component for displaying status, labels, and counts. Supports multiple variants, colors, and sizes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outline", "subtle"],
      description: "Visual style variant",
    },
    color: {
      control: "select",
      options: [
        "primary",
        "primary-green",
        "secondary",
        "success",
        "warning",
        "error",
        "info",
      ],
      description: "Color scheme",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Badge size",
    },
    rounded: {
      control: "select",
      options: ["default", "full"],
      description: "Border radius style",
    },
    dot: {
      control: "boolean",
      description: "Show dot indicator",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <Badge variant="filled">Filled</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="subtle">Subtle</Badge>
      </div>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center flex-wrap">
        <Badge color="primary">Primary</Badge>
        <Badge color="primary-green">Primary Green</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="error">Error</Badge>
        <Badge color="info">Info</Badge>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const WithDot: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center flex-wrap">
        <Badge dot color="primary">
          Active
        </Badge>
        <Badge dot color="success">
          Online
        </Badge>
        <Badge dot color="warning">
          Pending
        </Badge>
        <Badge dot color="error">
          Offline
        </Badge>
        <Badge dot color="info">
          Processing
        </Badge>
      </div>
      <div className="flex gap-2 items-center flex-wrap">
        <Badge variant="outline" dot color="primary">
          Active
        </Badge>
        <Badge variant="outline" dot color="success">
          Online
        </Badge>
        <Badge variant="outline" dot color="warning">
          Pending
        </Badge>
        <Badge variant="outline" dot color="error">
          Offline
        </Badge>
      </div>
      <div className="flex gap-2 items-center flex-wrap">
        <Badge variant="subtle" dot color="primary">
          Active
        </Badge>
        <Badge variant="subtle" dot color="success">
          Online
        </Badge>
        <Badge variant="subtle" dot color="warning">
          Pending
        </Badge>
        <Badge variant="subtle" dot color="error">
          Offline
        </Badge>
      </div>
    </div>
  ),
};

export const RoundedFull: Story = {
  render: () => (
    <div className="flex gap-2 items-center flex-wrap">
      <Badge rounded="full">Pill Badge</Badge>
      <Badge rounded="full" color="primary-green">
        Active
      </Badge>
      <Badge rounded="full" color="success">
        Verified
      </Badge>
      <Badge rounded="full" color="warning">
        Beta
      </Badge>
      <Badge rounded="full" variant="outline" color="primary">
        New
      </Badge>
      <Badge rounded="full" variant="subtle" color="info">
        Updated
      </Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-center">
        <span className="w-24 text-sm">Success:</span>
        <Badge dot color="success">
          Completed
        </Badge>
        <Badge variant="outline" color="success">
          Approved
        </Badge>
        <Badge variant="subtle" color="success">
          Active
        </Badge>
      </div>
      <div className="flex gap-2 items-center">
        <span className="w-24 text-sm">Warning:</span>
        <Badge dot color="warning">
          Pending
        </Badge>
        <Badge variant="outline" color="warning">
          Review
        </Badge>
        <Badge variant="subtle" color="warning">
          Attention
        </Badge>
      </div>
      <div className="flex gap-2 items-center">
        <span className="w-24 text-sm">Error:</span>
        <Badge dot color="error">
          Failed
        </Badge>
        <Badge variant="outline" color="error">
          Rejected
        </Badge>
        <Badge variant="subtle" color="error">
          Critical
        </Badge>
      </div>
      <div className="flex gap-2 items-center">
        <span className="w-24 text-sm">Info:</span>
        <Badge dot color="info">
          Processing
        </Badge>
        <Badge variant="outline" color="info">
          Draft
        </Badge>
        <Badge variant="subtle" color="info">
          Info
        </Badge>
      </div>
    </div>
  ),
};

export const CountBadges: Story = {
  render: () => (
    <div className="flex gap-3 items-center flex-wrap">
      <Badge rounded="full" size="sm">
        1
      </Badge>
      <Badge rounded="full" size="sm">
        5
      </Badge>
      <Badge rounded="full" size="sm">
        12
      </Badge>
      <Badge rounded="full" size="sm">
        99+
      </Badge>
      <Badge rounded="full" size="sm" color="error">
        3
      </Badge>
      <Badge rounded="full" size="sm" color="success">
        New
      </Badge>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div
      className="flex flex-col gap-6 p-4 bg-gray-50 rounded-lg"
      style={{ width: "600px" }}
    >
      {/* Header with badges */}
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold">Project Dashboard</h3>
          <Badge variant="subtle" color="primary-green">
            Active
          </Badge>
          <Badge variant="outline" color="info" size="sm">
            v2.1.0
          </Badge>
        </div>
        <Badge dot color="success">
          All Systems Operational
        </Badge>
      </div>

      {/* List with status badges */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between py-2 border-b">
          <span className="font-medium">Deploy to Production</span>
          <Badge color="success">Completed</Badge>
        </div>
        <div className="flex items-center justify-between py-2 border-b">
          <span className="font-medium">Run Tests</span>
          <Badge dot color="warning">
            In Progress
          </Badge>
        </div>
        <div className="flex items-center justify-between py-2 border-b">
          <span className="font-medium">Code Review</span>
          <Badge variant="outline" color="info">
            Pending
          </Badge>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="font-medium">Security Scan</span>
          <Badge dot color="error">
            Failed
          </Badge>
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <p className="text-sm font-medium mb-2">Tags:</p>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="subtle" rounded="full" size="sm">
            React
          </Badge>
          <Badge variant="subtle" rounded="full" size="sm">
            TypeScript
          </Badge>
          <Badge variant="subtle" rounded="full" size="sm">
            Tailwind
          </Badge>
          <Badge variant="subtle" rounded="full" size="sm">
            Vite
          </Badge>
          <Badge
            variant="subtle"
            rounded="full"
            size="sm"
            color="primary-green"
          >
            Storybook
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const OutlineVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-center flex-wrap">
        <Badge variant="outline" color="primary">
          Primary
        </Badge>
        <Badge variant="outline" color="primary-green">
          Primary Green
        </Badge>
        <Badge variant="outline" color="secondary">
          Secondary
        </Badge>
        <Badge variant="outline" color="success">
          Success
        </Badge>
        <Badge variant="outline" color="warning">
          Warning
        </Badge>
        <Badge variant="outline" color="error">
          Error
        </Badge>
        <Badge variant="outline" color="info">
          Info
        </Badge>
      </div>
    </div>
  ),
};

export const SubtleVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-center flex-wrap">
        <Badge variant="subtle" color="primary">
          Primary
        </Badge>
        <Badge variant="subtle" color="primary-green">
          Primary Green
        </Badge>
        <Badge variant="subtle" color="secondary">
          Secondary
        </Badge>
        <Badge variant="subtle" color="success">
          Success
        </Badge>
        <Badge variant="subtle" color="warning">
          Warning
        </Badge>
        <Badge variant="subtle" color="error">
          Error
        </Badge>
        <Badge variant="subtle" color="info">
          Info
        </Badge>
      </div>
    </div>
  ),
};
