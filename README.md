# Trivo UI Library

A modern React UI component library built with TypeScript, featuring customizable components with a clean design system.

## Features

- 🎨 **Customizable Theme System** - Built-in theme provider with customizable colors, spacing, and border radius
- 🎨 **Tailwind CSS Integration** - Pre-configured with custom primary colors (Green #008000, Blue #1b4357)
- 🔧 **TypeScript Support** - Full TypeScript support with comprehensive type definitions
- 📱 **Responsive Design** - Components work seamlessly across different screen sizes
- 🎯 **Tree Shakeable** - Only import the components you need
- 📖 **Storybook Documentation** - Interactive component documentation and examples

## Installation

```bash
npm install trivo-ui-library
# or
yarn add trivo-ui-library
```

## Quick Start

### Prerequisites

**This library uses Tailwind CSS utility classes.** Your project must have Tailwind CSS configured.

If you don't have Tailwind installed:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 1. Configure Tailwind to scan library files

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/trivo-ui-library/**/*.{js,ts,jsx,tsx}", // Add this!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 2. Import CSS variables and Tailwind

In your main file (`App.tsx` or `index.tsx`):

```tsx
import "trivo-ui-library/variables.css"; // Library color variables
import "./index.css"; // Your Tailwind CSS
```

Make sure your `index.css` includes Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Use components

```tsx
import React from "react";
import { Button } from "trivo-ui-library";

function MyComponent() {
  return (
    <div>
      <Button variant="filled" color="primary">
        Click me!
      </Button>
      <Button variant="outline" color="primary-green">
        Green Button
      </Button>
      <Button color="secondary-light-rose">Custom Color</Button>
    </div>
  );
}
```

## Components

This library includes the following components:

- **Button** - Versatile button with multiple variants
- **Input** - Text input with validation states
- **Modal** - Accessible modal dialog
- **Drawer** - Slide-in panel from any direction
- **SideBar** - Collapsible navigation sidebar
- **Table** - Sortable data table with custom rendering
- **TailwindButton** - Button component using Tailwind CSS
- **ColorDemo** - Visual demo of Tailwind color utilities

For detailed documentation, see the [Tailwind Quick Start Guide](./TAILWIND_QUICK_START.md).

### Button

A versatile button component with multiple variants, colors, and sizes.

#### Props

| Prop        | Type                                                            | Default     | Description            |
| ----------- | --------------------------------------------------------------- | ----------- | ---------------------- |
| `variant`   | `"filled" \| "outline" \| "subtle"`                             | `"filled"`  | Button style variant   |
| `color`     | `"primary" \| "secondary" \| "success" \| "warning" \| "error"` | `"primary"` | Button color theme     |
| `size`      | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                          | `"md"`      | Button size            |
| `fullWidth` | `boolean`                                                       | `false`     | Make button full width |
| `loading`   | `boolean`                                                       | `false`     | Show loading spinner   |
| `disabled`  | `boolean`                                                       | `false`     | Disable button         |

#### Examples

```tsx
// Basic usage
<Button>Default Button</Button>

// Different variants
<Button variant="filled" color="primary">Filled</Button>
<Button variant="outline" color="secondary">Outline</Button>
<Button variant="subtle" color="success">Subtle</Button>

// Different sizes
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// Loading state
<Button loading>Loading...</Button>

// Full width
<Button fullWidth>Full Width Button</Button>
```

## Theme Customization

You can customize the theme by passing a custom theme object to the ThemeProvider:

```tsx
import { ThemeProvider, Theme } from "trivo-ui-library";

const customTheme: Partial<Theme> = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    warning: "#ffc107",
    error: "#dc3545",
    text: "#333333",
    background: "#ffffff",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
};

function App() {
  return <ThemeProvider theme={customTheme}>{/* Your app */}</ThemeProvider>;
}
```

## Development

### Prerequisites

- Node.js >= 16
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/trivo-ui-library.git
cd trivo-ui-library

# Install dependencies
npm install

# Start Storybook for development
npm run storybook

# Build the library
npm run build
```

### Scripts

- `npm run build` - Build the library for production
- `npm run dev` - Build in watch mode for development
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run test` - Run tests

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [Your Name]

## Changelog

### 1.0.0

- Initial release
- Button component with multiple variants
- Theme system with ThemeProvider
- TypeScript support
