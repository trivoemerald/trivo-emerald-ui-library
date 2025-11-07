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

// All available colors from global.css
const allColors: ColorItemProps[] = [
  // Primary Colors
  {
    name: "Primary Green",
    variable: "--color-primary-green",
    value: "#008000",
    category: "Primary Colors",
  },
  {
    name: "Primary Blue",
    variable: "--color-primary-blue",
    value: "#1b4357",
    category: "Primary Colors",
  },
  {
    name: "Blue",
    variable: "--color-blue",
    value: "#25607e",
    category: "Primary Colors",
  },
  {
    name: "Dark Blue",
    variable: "--dark-blue",
    value: "#002148",
    category: "Primary Colors",
  },

  // Primary Green Variations
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

  // Primary Blue Variations
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
  {
    name: "Primary Blue 5%",
    variable: "--color-primary-blue-5",
    value: "#2e8bc0",
    category: "Primary Blue Shades",
  },

  // Blue Variations
  {
    name: "Blue 50%",
    variable: "--color-blue-50",
    value: "#92b0bf",
    category: "Blue Shades",
  },
  {
    name: "Blue 70%",
    variable: "--color-blue-70",
    value: "#5c889f",
    category: "Blue Shades",
  },
  {
    name: "Blue Lavender",
    variable: "--color-blue-lavender",
    value: "#98aefb",
    category: "Blue Shades",
  },
  {
    name: "Other Blue",
    variable: "--color-other-blue",
    value: "#2196f3",
    category: "Blue Shades",
  },
  {
    name: "Dark Blue",
    variable: "--color-dark-blue",
    value: "#0c567b",
    category: "Blue Shades",
  },
  {
    name: "Light Blue",
    variable: "--color-light-blue",
    value: "#f0f6ff",
    category: "Blue Shades",
  },

  // Secondary Colors
  {
    name: "Light Rose",
    variable: "--color-secondary-light-rose",
    value: "#e1bab7",
    category: "Secondary Colors",
  },
  {
    name: "Dark Rose",
    variable: "--color-secondary-dark-rose",
    value: "#9d5b65",
    category: "Secondary Colors",
  },
  {
    name: "Fire",
    variable: "--color-secondary-fire",
    value: "#b33106",
    category: "Secondary Colors",
  },
  {
    name: "Accent Persian",
    variable: "--color-secondary-accent-persion",
    value: "#ff614a",
    category: "Secondary Colors",
  },

  // Accent Colors
  {
    name: "Green Mint",
    variable: "--color-green-mint",
    value: "#a3cea3",
    category: "Accent Colors",
  },
  {
    name: "Sea Green",
    variable: "--color-sea-green",
    value: "#257e70",
    category: "Accent Colors",
  },
  {
    name: "Orange",
    variable: "--color-orange",
    value: "#d78e29",
    category: "Accent Colors",
  },
  {
    name: "Golden Glow",
    variable: "--color-golden-glow",
    value: "#fbe498",
    category: "Accent Colors",
  },

  // Neutral Colors
  {
    name: "Slate",
    variable: "--color-slate",
    value: "#454545",
    category: "Neutral Colors",
  },
  {
    name: "Grey",
    variable: "--color-grey",
    value: "#ccc",
    category: "Neutral Colors",
  },
  {
    name: "Grey Light",
    variable: "--color-grey-light",
    value: "#fbfbfb",
    category: "Neutral Colors",
  },
  {
    name: "Light Grey",
    variable: "--color-light-grey",
    value: "#f7f8fa",
    category: "Neutral Colors",
  },
  {
    name: "Disabled Light",
    variable: "--color-disabled-light",
    value: "#cacaca",
    category: "Neutral Colors",
  },
  {
    name: "Disabled Dark",
    variable: "--color-disabled-dark",
    value: "#939393",
    category: "Neutral Colors",
  },

  // Sector Colors
  {
    name: "Energy 1",
    variable: "--color-energy-1",
    value: "#ffefc6",
    category: "Sector Colors",
  },
  {
    name: "Energy 2",
    variable: "--color-energy-2",
    value: "#fffaf2",
    category: "Sector Colors",
  },
  {
    name: "Water 1",
    variable: "--color-water-1",
    value: "#c6eaff",
    category: "Sector Colors",
  },
  {
    name: "Water 2",
    variable: "--color-water-2",
    value: "#f2fdff",
    category: "Sector Colors",
  },
  {
    name: "Logistics 1",
    variable: "--color-logistics-1",
    value: "#ffc6c6",
    category: "Sector Colors",
  },
  {
    name: "Logistics 2",
    variable: "--color-logistics-2",
    value: "#fff2f2",
    category: "Sector Colors",
  },
  {
    name: "Electronics 1",
    variable: "--color-electronics-1",
    value: "#c6d9ff",
    category: "Sector Colors",
  },
  {
    name: "Electronics 2",
    variable: "--color-electronics-2",
    value: "#f3f2ff",
    category: "Sector Colors",
  },
  {
    name: "Environment 1",
    variable: "--color-environment-1",
    value: "#8bfff8",
    category: "Sector Colors",
  },
  {
    name: "Environment 2",
    variable: "--color-environment-2",
    value: "#f2fffd",
    category: "Sector Colors",
  },
  {
    name: "Agriculture 1",
    variable: "--color-agriculture-1",
    value: "#c6ffd9",
    category: "Sector Colors",
  },
  {
    name: "Agriculture 2",
    variable: "--color-agriculture-2",
    value: "#f2fff5",
    category: "Sector Colors",
  },
  {
    name: "Material Sector",
    variable: "--color-material-sector",
    value: "#8399e7",
    category: "Sector Colors",
  },

  // Special Purpose
  {
    name: "Emerald User",
    variable: "--color-emerald-user",
    value: "#004a00",
    category: "Special Purpose",
  },
  {
    name: "Business Potential",
    variable: "--color-business-potential",
    value: "#526fa7",
    category: "Special Purpose",
  },
  {
    name: "Error Dark",
    variable: "--color-error-dark",
    value: "#d32f2f",
    category: "Special Purpose",
  },
  {
    name: "Info Light",
    variable: "--color-info-light",
    value: "#e5f6fd",
    category: "Special Purpose",
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
    colors: allColors.filter((c) => c.category === "Primary Green Shades"),
    title: "Primary Green Variations",
  },
};

export const BlueShades: Story = {
  args: {
    colors: allColors.filter((c) => c.category?.includes("Blue")),
    title: "Blue Color Variations",
  },
};

export const SectorColors: Story = {
  args: {
    colors: allColors.filter((c) => c.category === "Sector Colors"),
    title: "Industry Sector Colors",
  },
};
