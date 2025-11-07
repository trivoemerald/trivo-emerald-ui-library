# Tailwind CSS Integration

This UI library now includes Tailwind CSS with custom primary colors configured for your design system.

## 🎨 Primary Colors

Two primary colors have been configured in the Tailwind theme:

- **Primary Green**: `#008000`
- **Primary Blue**: `#1b4357`

## 📦 Configuration Files

### 1. `tailwind.config.js`

```javascript
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#008000",
          blue: "#1b4357",
        },
      },
    },
  },
  plugins: [],
};
```

### 2. `postcss.config.js`

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 3. `src/styles/global.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-primary-green: #008000;
    --color-primary-blue: #1b4357;
  }
}
```

## 🚀 Usage

### Using Tailwind Classes

You can now use these colors in your components with Tailwind utility classes:

```tsx
// Background
<div className="bg-primary-green">Green background</div>
<div className="bg-primary-blue">Blue background</div>

// Text
<p className="text-primary-green">Green text</p>
<p className="text-primary-blue">Blue text</p>

// Border
<div className="border-4 border-primary-green">Green border</div>
<div className="border-4 border-primary-blue">Blue border</div>

// Hover states
<button className="bg-primary-green hover:opacity-90">Button</button>

// Combining utilities
<div className="bg-primary-blue text-white p-4 rounded-lg shadow-md">
  Card with blue background
</div>
```

### Using CSS Variables (for CSS Modules)

If you're using CSS Modules, you can access the colors via CSS variables:

```css
.myComponent {
  background-color: var(--color-primary-green);
  color: var(--color-primary-blue);
}

.myButton {
  border: 2px solid var(--color-primary-green);
}
```

## 📚 Example Component

Check out the **ColorDemo** component in Storybook under **Design System > Colors** to see all the ways you can use these primary colors.

```tsx
import { ColorDemo } from "trivo-ui-library";

function App() {
  return <ColorDemo />;
}
```

## 🎯 Common Patterns

### Button Variants

```tsx
// Primary Green Button
<button className="px-6 py-3 bg-primary-green text-white rounded-md hover:opacity-90 transition-opacity font-medium">
  Green Button
</button>

// Primary Blue Button
<button className="px-6 py-3 bg-primary-blue text-white rounded-md hover:opacity-90 transition-opacity font-medium">
  Blue Button
</button>

// Outline Green Button
<button className="px-6 py-3 border-2 border-primary-green text-primary-green rounded-md hover:bg-primary-green hover:text-white transition-all font-medium">
  Outline Button
</button>
```

### Cards

```tsx
<div className="bg-primary-blue rounded-lg p-6 text-white shadow-lg">
  <h3 className="text-xl font-bold mb-2">Card Title</h3>
  <p className="text-gray-100">Card content goes here</p>
  <button className="mt-4 px-4 py-2 bg-primary-green text-white rounded hover:opacity-90">
    Action
  </button>
</div>
```

### Badges

```tsx
<span className="inline-block px-3 py-1 bg-primary-green text-white text-sm font-semibold rounded-full">
  Active
</span>

<span className="inline-block px-3 py-1 bg-primary-blue text-white text-sm font-semibold rounded-full">
  Info
</span>
```

## 🛠️ Development

### Running Storybook

```bash
npm run storybook
```

Visit `http://localhost:6006` to see all components and color examples.

### Building

```bash
npm run build
```

Tailwind will automatically purge unused styles in production builds.

## 📝 Notes

- Tailwind CSS is configured to scan all component files in `src/`, `stories/`, and `.storybook/` directories
- PostCSS with Autoprefixer is configured for better browser compatibility
- The global CSS file includes both Tailwind directives and CSS custom properties for maximum flexibility
- All Tailwind utilities are available including responsive variants, hover states, etc.

## 🌈 Extending Colors

To add more colors to your theme, edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        green: '#008000',
        blue: '#1b4357',
        // Add more colors here
      },
      secondary: {
        // Add secondary colors
      }
    },
  },
},
```
