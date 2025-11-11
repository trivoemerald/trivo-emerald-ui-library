import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile card component for displaying content. Includes optional header, body, and footer sections with multiple variants.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outlined", "elevated"],
      description: "Card style variant",
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
      description: "Padding size",
    },
    hoverable: {
      control: "boolean",
      description: "Add hover effect",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <CardBody>This is a basic card with default styling.</CardBody>,
  },
};

export const WithHeader: Story = {
  render: () => (
    <Card style={{ width: "400px" }}>
      <CardHeader>
        <h3 className="text-lg font-semibold">Card Title</h3>
      </CardHeader>
      <CardBody>
        <p className="text-gray-600">
          This card has a header with a title. The header is automatically
          styled with a bottom border.
        </p>
      </CardBody>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card style={{ width: "400px" }}>
      <CardBody>
        <h3 className="text-lg font-semibold mb-2">Confirm Action</h3>
        <p className="text-gray-600">
          Are you sure you want to proceed with this action?
        </p>
      </CardBody>
      <CardFooter>
        <div className="flex gap-2 justify-end">
          <Button variant="outline" size="sm">
            Cancel
          </Button>
          <Button variant="filled" color="primary" size="sm">
            Confirm
          </Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const Complete: Story = {
  render: () => (
    <Card style={{ width: "400px" }}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Project Overview</h3>
          <Badge color="success">Active</Badge>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-gray-600 mb-3">
          A complete card with header, body, and footer sections.
        </p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Progress:</span>
            <span className="font-medium">75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-blue h-2 rounded-full"
              style={{ width: "75%" }}
            />
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex gap-2 justify-end">
          <Button variant="subtle" size="sm">
            Details
          </Button>
          <Button variant="filled" color="primary" size="sm">
            Continue
          </Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Card variant="default" style={{ width: "250px" }}>
        <CardBody>
          <h4 className="font-semibold mb-2">Default</h4>
          <p className="text-sm text-gray-600">Standard card with border</p>
        </CardBody>
      </Card>
      <Card variant="outlined" style={{ width: "250px" }}>
        <CardBody>
          <h4 className="font-semibold mb-2">Outlined</h4>
          <p className="text-sm text-gray-600">Card with thicker border</p>
        </CardBody>
      </Card>
      <Card variant="elevated" style={{ width: "250px" }}>
        <CardBody>
          <h4 className="font-semibold mb-2">Elevated</h4>
          <p className="text-sm text-gray-600">Card with shadow elevation</p>
        </CardBody>
      </Card>
    </div>
  ),
};

export const PaddingSizes: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Card padding="none" variant="outlined" style={{ width: "200px" }}>
        <div className="p-4">
          <h4 className="font-semibold mb-2">No Padding</h4>
          <p className="text-sm text-gray-600">padding="none"</p>
        </div>
      </Card>
      <Card padding="sm" variant="outlined" style={{ width: "200px" }}>
        <h4 className="font-semibold mb-2">Small</h4>
        <p className="text-sm text-gray-600">padding="sm"</p>
      </Card>
      <Card padding="md" variant="outlined" style={{ width: "200px" }}>
        <h4 className="font-semibold mb-2">Medium</h4>
        <p className="text-sm text-gray-600">padding="md"</p>
      </Card>
      <Card padding="lg" variant="outlined" style={{ width: "200px" }}>
        <h4 className="font-semibold mb-2">Large</h4>
        <p className="text-sm text-gray-600">padding="lg"</p>
      </Card>
    </div>
  ),
};

export const Hoverable: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card hoverable style={{ width: "250px" }}>
        <CardBody>
          <h4 className="font-semibold mb-2">Hover Me</h4>
          <p className="text-sm text-gray-600">
            This card has a hover effect with scale and shadow
          </p>
        </CardBody>
      </Card>
      <Card hoverable variant="elevated" style={{ width: "250px" }}>
        <CardBody>
          <h4 className="font-semibold mb-2">Hover Me Too</h4>
          <p className="text-sm text-gray-600">Elevated variant with hover</p>
        </CardBody>
      </Card>
    </div>
  ),
};

export const Clickable: Story = {
  render: () => (
    <Card
      hoverable
      onClick={() => alert("Card clicked!")}
      style={{ width: "300px" }}
    >
      <CardBody>
        <h4 className="font-semibold mb-2">Click Me</h4>
        <p className="text-sm text-gray-600">
          This card is clickable and will trigger an action
        </p>
      </CardBody>
    </Card>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card hoverable style={{ width: "300px" }}>
      <CardBody className="p-0">
        <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg" />
      </CardBody>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Premium Plan</h3>
          <Badge color="primary-green">Popular</Badge>
        </div>
        <p className="text-gray-600 text-sm mb-3">
          Full access to all premium features
        </p>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-3xl font-bold">$29</span>
          <span className="text-gray-500">/month</span>
        </div>
        <ul className="space-y-2 mb-4">
          <li className="flex items-center text-sm">
            <span className="text-green-500 mr-2">✓</span>
            Unlimited projects
          </li>
          <li className="flex items-center text-sm">
            <span className="text-green-500 mr-2">✓</span>
            Advanced analytics
          </li>
          <li className="flex items-center text-sm">
            <span className="text-green-500 mr-2">✓</span>
            Priority support
          </li>
        </ul>
        <Button variant="filled" color="primary" fullWidth>
          Get Started
        </Button>
      </CardBody>
    </Card>
  ),
};

export const UserProfileCard: Story = {
  render: () => (
    <Card style={{ width: "350px" }}>
      <CardBody className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-green rounded-full flex items-center justify-center text-white text-2xl font-bold">
          JD
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-lg">John Doe</h4>
          <p className="text-sm text-gray-500">john.doe@example.com</p>
          <div className="flex gap-2 mt-2">
            <Badge size="sm" variant="subtle" color="primary">
              Developer
            </Badge>
            <Badge size="sm" variant="subtle" color="success">
              Active
            </Badge>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" fullWidth>
            Message
          </Button>
          <Button variant="filled" color="primary" size="sm" fullWidth>
            Follow
          </Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const StatisticsCard: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardBody>
          <p className="text-sm text-gray-500 mb-1">Total Users</p>
          <p className="text-3xl font-bold text-primary-blue">1,234</p>
          <p className="text-xs text-green-500 mt-2">↑ 12% from last month</p>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <p className="text-sm text-gray-500 mb-1">Revenue</p>
          <p className="text-3xl font-bold text-primary-green">$45,678</p>
          <p className="text-xs text-green-500 mt-2">↑ 8% from last month</p>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <p className="text-sm text-gray-500 mb-1">Active Projects</p>
          <p className="text-3xl font-bold text-orange">23</p>
          <p className="text-xs text-red-500 mt-2">↓ 3% from last month</p>
        </CardBody>
      </Card>
    </div>
  ),
};

export const NoPadding: Story = {
  render: () => (
    <Card padding="none" style={{ width: "300px" }}>
      <div className="h-40 bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xl font-bold">
        Header Image
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2">Custom Padding</h3>
        <p className="text-sm text-gray-600">
          Use padding="none" to control padding manually
        </p>
      </div>
    </Card>
  ),
};
