import type { Meta, StoryObj } from "@storybook/react";
import { ColorPalette, ColorItemProps } from "./ColorPalette";

const meta: Meta<typeof ColorPalette> = {
  title: "Design System/Colors",
  component: ColorPalette,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
# Color System Documentation

This is the complete color palette for the Trivo UI Library. All colors are available as CSS custom properties (CSS variables) 
and can be used throughout the application using Tailwind CSS v4.

## Usage

### In CSS/SCSS
\`\`\`css
.my-element {
  background-color: var(--color-primary-green);
  color: var(--color-primary-blue);
}
\`\`\`

### With Tailwind v4
\`\`\`jsx
<div className="bg-[--color-primary-green] text-[--color-primary-blue]">
  Custom colored element
</div>
\`\`\`

### In Component Props (Button)
\`\`\`jsx
<Button color="primary-green">Green Button</Button>
<Button color="primary-blue">Blue Button</Button>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPalette>;

// All available colors from variables.css
const allColors: ColorItemProps[] = [
  // Primary Colors - Green
  {
    name: "Primary Green",
    variable: "--color-primary-green",
    value: "#008d00",
    category: "Primary Colors",
  },
  {
    name: "Primary Green 90%",
    variable: "--color-primary-green-90",
    value: "#369a36",
    category: "Primary Green Shades",
  },
  {
    name: "Primary Green 80%",
    variable: "--color-primary-green-80",
    value: "#52a752",
    category: "Primary Green Shades",
  },
  {
    name: "Primary Green 70%",
    variable: "--color-primary-green-70",
    value: "#6db46d",
    category: "Primary Green Shades",
  },
  {
    name: "Primary Green 60%",
    variable: "--color-primary-green-60",
    value: "#80c080",
    category: "Primary Green Shades",
  },
  {
    name: "Primary Green 50%",
    variable: "--color-primary-green-50",
    value: "#a3cea3",
    category: "Primary Green Shades",
  },
  {
    name: "Primary Green 35%",
    variable: "--color-primary-green-35",
    value: "#bfdbbf",
    category: "Primary Green Shades",
  },
  {
    name: "Primary Green 25%",
    variable: "--color-primary-green-25",
    value: "#dae8da",
    category: "Primary Green Shades",
  },
  {
    name: "Primary Green 15%",
    variable: "--color-primary-green-15",
    value: "#f5f5f5",
    category: "Primary Green Shades",
  },

  // Primary Colors - Blue
  {
    name: "Primary Blue",
    variable: "--color-primary-blue",
    value: "#1b4357",
    category: "Primary Colors",
  },
  {
    name: "Primary Blue 90%",
    variable: "--color-primary-blue-90",
    value: "#345667",
    category: "Primary Blue Shades",
  },
  {
    name: "Primary Blue 80%",
    variable: "--color-primary-blue-80",
    value: "#4c6978",
    category: "Primary Blue Shades",
  },
  {
    name: "Primary Blue 70%",
    variable: "--color-primary-blue-70",
    value: "#637c8a",
    category: "Primary Blue Shades",
  },
  {
    name: "Primary Blue 60%",
    variable: "--color-primary-blue-60",
    value: "#7b919c",
    category: "Primary Blue Shades",
  },
  {
    name: "Primary Blue 50%",
    variable: "--color-primary-blue-50",
    value: "#94a5ae",
    category: "Primary Blue Shades",
  },
  {
    name: "Primary Blue 35%",
    variable: "--color-primary-blue-35",
    value: "#adbbc1",
    category: "Primary Blue Shades",
  },
  {
    name: "Primary Blue 25%",
    variable: "--color-primary-blue-25",
    value: "#c7d0d4",
    category: "Primary Blue Shades",
  },
  {
    name: "Primary Blue 15%",
    variable: "--color-primary-blue-15",
    value: "#e1e6e8",
    category: "Primary Blue Shades",
  },

  // Blue Variations
  {
    name: "Blue",
    variable: "--color-blue",
    value: "#25607e",
    category: "Blue Shades",
  },
  {
    name: "Blue 70%",
    variable: "--color-blue-70",
    value: "#5c889f",
    category: "Blue Shades",
  },
  {
    name: "Blue 50%",
    variable: "--color-blue-50",
    value: "#92b0bf",
    category: "Blue Shades",
  },

  // Secondary Colors - Pinks
  {
    name: "Light Rose",
    variable: "--color-light-rose",
    value: "#e1bab7",
    category: "Secondary Colors",
  },
  {
    name: "Dark Rose",
    variable: "--color-dark-rose",
    value: "#9d5b65",
    category: "Secondary Colors",
  },
  {
    name: "Fire",
    variable: "--color-fire",
    value: "#b33106",
    category: "Secondary Colors",
  },
  {
    name: "Access Persimon",
    variable: "--color-access-persimon",
    value: "#ff614a",
    category: "Secondary Colors",
  },

  // Secondary Colors - Neutrals
  {
    name: "State",
    variable: "--color-state",
    value: "#454545",
    category: "Neutral Colors",
  },
  {
    name: "Porcelain",
    variable: "--color-porcelain",
    value: "#e1e6e8",
    category: "Neutral Colors",
  },
  {
    name: "Off White",
    variable: "--color-off-white",
    value: "#f5f5f5",
    category: "Neutral Colors",
  },
  {
    name: "Golden Flow",
    variable: "--color-golden-flow",
    value: "#fbe498",
    category: "Neutral Colors",
  },

  // Secondary Colors - Greens
  {
    name: "Pine Green",
    variable: "--color-pine-green",
    value: "#004a00",
    category: "Green Shades",
  },
  {
    name: "Sea Green",
    variable: "--color-sea-green",
    value: "#257e70",
    category: "Green Shades",
  },
  {
    name: "Spark Green",
    variable: "--color-spark-green",
    value: "#80c080",
    category: "Green Shades",
  },

  // Feedback Colors
  {
    name: "Success Light",
    variable: "--color-success-light",
    value: "#edf7ed",
    category: "Feedback Colors",
  },
  {
    name: "Success Dark",
    variable: "--color-success-dark",
    value: "#2e7d32",
    category: "Feedback Colors",
  },
  {
    name: "Error Light",
    variable: "--color-error-light",
    value: "#fdeded",
    category: "Feedback Colors",
  },
  {
    name: "Error Dark",
    variable: "--color-error-dark",
    value: "#d32f2f",
    category: "Feedback Colors",
  },
  {
    name: "Info Light",
    variable: "--color-info-light",
    value: "#e5f6fd",
    category: "Feedback Colors",
  },
  {
    name: "Info Dark",
    variable: "--color-info-dark",
    value: "#0288d1",
    category: "Feedback Colors",
  },
  {
    name: "Warning Light",
    variable: "--color-warning-light",
    value: "#fff4e5",
    category: "Feedback Colors",
  },
  {
    name: "Warning Dark",
    variable: "--color-warning-dark",
    value: "#ef6c00",
    category: "Feedback Colors",
  },

  // System Colors
  {
    name: "Link Blue",
    variable: "--color-link-blue",
    value: "#3e9ac2",
    category: "System Colors",
  },
  {
    name: "Water Sector",
    variable: "--color-water-sector",
    value: "#71bec9",
    category: "System Colors",
  },
  {
    name: "Energy Sector",
    variable: "--color-energy-sector",
    value: "#c9bb71",
    category: "System Colors",
  },
  {
    name: "Agriculture Sector",
    variable: "--color-agriculture-sector",
    value: "#71c9a4",
    category: "System Colors",
  },
  {
    name: "Logistics & Packaging",
    variable: "--color-logistics-packaging",
    value: "#c97171",
    category: "System Colors",
  },
  {
    name: "Advanced Materials Sector",
    variable: "--color-advanced-materials-sector",
    value: "#8399e7",
    category: "System Colors",
  },
  {
    name: "Rejected Assessment Status",
    variable: "--color-rejected-assessment-status",
    value: "#b90000",
    category: "System Colors",
  },
  {
    name: "Very Light Grey",
    variable: "--color-very-light-grey",
    value: "#f7f8fa",
    category: "System Colors",
  },
  {
    name: "Business Potential",
    variable: "--color-business-potential",
    value: "#526fa7",
    category: "System Colors",
  },
  {
    name: "Attractiveness Transaction",
    variable: "--color-attractiveness-transaction",
    value: "#9652a7",
    category: "System Colors",
  },
  {
    name: "Blue Other",
    variable: "--color-blue-other",
    value: "#2196f3",
    category: "System Colors",
  },
  {
    name: "Dark Blue",
    variable: "--color-dark-blue",
    value: "#0c567b",
    category: "System Colors",
  },

  // Disabled States
  {
    name: "Disabled Dark",
    variable: "--color-disabled-dark",
    value: "#939393",
    category: "Disabled States",
  },
  {
    name: "Disabled Light",
    variable: "--color-disabled-light",
    value: "#cacaca",
    category: "Disabled States",
  },
];

export const AllColors: Story = {
  args: {
    colors: allColors,
    title: "Trivo UI Library - Complete Color Palette",
  },
};

export const PrimaryColors: Story = {
  args: {
    colors: allColors.filter((c) => c.category === "Primary Colors"),
    title: "Primary Colors",
  },
};

export const GreenShades: Story = {
  args: {
    colors: allColors.filter(
      (c) =>
        c.category === "Primary Green Shades" || c.category === "Green Shades"
    ),
    title: "Green Color Variations",
  },
};

export const BlueShades: Story = {
  args: {
    colors: allColors.filter(
      (c) =>
        c.category === "Primary Blue Shades" || c.category === "Blue Shades"
    ),
    title: "Blue Color Variations",
  },
};

export const SecondaryColors: Story = {
  args: {
    colors: allColors.filter((c) => c.category === "Secondary Colors"),
    title: "Secondary Colors",
  },
};

export const NeutralColors: Story = {
  args: {
    colors: allColors.filter((c) => c.category === "Neutral Colors"),
    title: "Neutral Colors",
  },
};

export const FeedbackColors: Story = {
  args: {
    colors: allColors.filter((c) => c.category === "Feedback Colors"),
    title: "Feedback & Status Colors",
  },
};

export const SystemColors: Story = {
  args: {
    colors: allColors.filter((c) => c.category === "System Colors"),
    title: "System & Sector Colors",
  },
};

export const DisabledStates: Story = {
  args: {
    colors: allColors.filter((c) => c.category === "Disabled States"),
    title: "Disabled States",
  },
};
