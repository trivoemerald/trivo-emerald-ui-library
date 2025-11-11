import type { Meta, StoryObj } from "@storybook/react";
import { BaseAccordion } from "./BaseAccordion";

const meta: Meta<typeof BaseAccordion> = {
  title: "Components/BaseAccordion",
  component: BaseAccordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A simplified wrapper around the shadcn Accordion component for easy reuse.

Perfect for quickly creating accordions with a simple data structure.

## Features
- Simplified API with data-driven approach
- Support for single or multiple open items
- Built on top of shadcn/ui Accordion
- Full TypeScript support

## Usage
\`\`\`tsx
import { BaseAccordion } from "trivo-ui-library";

const items = [
  {
    id: "1",
    title: "Question 1",
    content: "Answer 1"
  },
  {
    id: "2",
    title: "Question 2",
    content: "Answer 2"
  }
];

<BaseAccordion items={items} type="single" />
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "Determines whether one or multiple items can be open",
    },
    collapsible: {
      control: "boolean",
      description: "When type is 'single', allow closing all items",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseAccordion>;

const simpleItems = [
  {
    id: "item-1",
    title: "What is Trivo UI Library?",
    content:
      "Trivo UI Library is a modern React component library built with TypeScript, Tailwind CSS, and shadcn/ui components.",
  },
  {
    id: "item-2",
    title: "How do I install it?",
    content:
      "You can install it using npm: npm install trivo-ui-library, then import the components you need.",
  },
  {
    id: "item-3",
    title: "Is it customizable?",
    content:
      "Yes! All components are built with Tailwind CSS and can be customized using utility classes or your own theme.",
  },
];

export const Default: Story = {
  args: {
    items: simpleItems,
    type: "single",
    collapsible: true,
  },
  render: (args) => (
    <div className="w-[600px]">
      <BaseAccordion {...args} />
    </div>
  ),
};

export const MultipleOpen: Story = {
  args: {
    items: simpleItems,
    type: "multiple",
    defaultValue: ["item-1", "item-2"],
  },
  render: (args) => (
    <div className="w-[600px]">
      <BaseAccordion {...args} />
    </div>
  ),
};

export const DefaultOpen: Story = {
  args: {
    items: simpleItems,
    type: "single",
    defaultValue: "item-2",
    collapsible: true,
  },
  render: (args) => (
    <div className="w-[600px]">
      <BaseAccordion {...args} />
    </div>
  ),
};

export const WithRichContent: Story = {
  args: {
    items: [
      {
        id: "features",
        title: "🚀 Features",
        content: (
          <div className="space-y-2">
            <p className="font-semibold">Key Features:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>TypeScript support</li>
              <li>Tailwind CSS styling</li>
              <li>shadcn/ui components</li>
              <li>Full accessibility</li>
              <li>Dark mode ready</li>
            </ul>
          </div>
        ),
      },
      {
        id: "colors",
        title: "🎨 Color System",
        content: (
          <div className="space-y-2">
            <p>Custom color palette with:</p>
            <div className="flex gap-2 mt-2">
              <div className="w-12 h-12 bg-[--color-primary-green] rounded" />
              <div className="w-12 h-12 bg-[--color-primary-blue] rounded" />
              <div className="w-12 h-12 bg-[--color-blue] rounded" />
            </div>
          </div>
        ),
      },
      {
        id: "components",
        title: "📦 Components",
        content: (
          <div>
            <p className="mb-2">Available components:</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span>• Button</span>
              <span>• Input</span>
              <span>• Modal</span>
              <span>• Drawer</span>
              <span>• Table</span>
              <span>• Accordion</span>
            </div>
          </div>
        ),
      },
    ],
    type: "single",
    collapsible: true,
  },
  render: (args) => (
    <div className="w-[600px]">
      <BaseAccordion {...args} />
    </div>
  ),
};

export const FAQ: Story = {
  args: {
    items: [
      {
        id: "q1",
        title: "How do I customize the accordion?",
        content:
          "You can pass a className prop to style the accordion container, or customize individual items by modifying the items array.",
      },
      {
        id: "q2",
        title: "Can I use custom icons?",
        content:
          "The accordion uses ChevronDown from lucide-react by default. You can create a custom accordion component if you need different icons.",
      },
      {
        id: "q3",
        title: "Is it accessible?",
        content:
          "Yes! Built on Radix UI primitives, it follows WAI-ARIA design patterns and supports full keyboard navigation.",
      },
      {
        id: "q4",
        title: "Does it work with forms?",
        content:
          "Absolutely! You can include form inputs, buttons, or any React content inside accordion items.",
      },
      {
        id: "q5",
        title: "Can I nest accordions?",
        content:
          "Yes, you can nest accordions by including another BaseAccordion or Accordion component in the content.",
      },
    ],
    type: "single",
    collapsible: true,
  },
  render: (args) => (
    <div className="w-[700px]">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <BaseAccordion {...args} />
    </div>
  ),
};

export const NotCollapsible: Story = {
  args: {
    items: simpleItems,
    type: "single",
    collapsible: false,
    defaultValue: "item-1",
  },
  render: (args) => (
    <div className="w-[600px]">
      <p className="text-sm text-gray-600 mb-4">
        This accordion always has one item open (not collapsible)
      </p>
      <BaseAccordion {...args} />
    </div>
  ),
};
