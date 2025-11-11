import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const meta: Meta<typeof Accordion> = {
  title: "shadcn/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A vertically stacked set of interactive headings that each reveal a section of content.

Based on Radix UI Accordion primitive with full keyboard navigation support.

## Features
- Full keyboard navigation
- Can expand one or multiple items
- Can be controlled or uncontrolled
- Smooth animations

## Usage
\`\`\`tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "trivo-ui-library/ui/accordion";

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Single: Story = {
  render: () => (
    <div className="w-[500px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components'
            aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="w-[500px]">
      <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
          <AccordionContent>
            Yes! When type is set to "multiple", you can have multiple items
            expanded at the same time.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What about default open?</AccordionTrigger>
          <AccordionContent>
            You can set defaultValue to an array of item values to have them
            open by default.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Does it support keyboard?</AccordionTrigger>
          <AccordionContent>
            Yes, full keyboard navigation with Tab, Enter, and Arrow keys.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <div className="w-[600px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="features">
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Full keyboard navigation</li>
              <li>Can expand one or multiple items</li>
              <li>Smooth animations with Radix UI</li>
              <li>Fully accessible (WAI-ARIA)</li>
              <li>Customizable with Tailwind CSS</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="installation">
          <AccordionTrigger>Installation</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p className="font-semibold">Install the component:</p>
              <code className="block bg-gray-100 p-2 rounded text-sm">
                npm install trivo-ui-library
              </code>
              <p className="text-sm text-gray-600 mt-2">
                Then import and use the accordion components in your project.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="customization">
          <AccordionTrigger>Customization</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              You can customize the accordion using Tailwind CSS classes:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Add custom styling to AccordionItem</li>
              <li>Change trigger colors and fonts</li>
              <li>Modify content padding and layout</li>
              <li>Override animations if needed</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <div className="w-[500px]">
      <Accordion type="single" defaultValue="item-2" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>First Item</AccordionTrigger>
          <AccordionContent>This item is closed by default.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second Item (Default Open)</AccordionTrigger>
          <AccordionContent>
            This item is open by default because defaultValue="item-2".
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Third Item</AccordionTrigger>
          <AccordionContent>
            This item is also closed by default.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
