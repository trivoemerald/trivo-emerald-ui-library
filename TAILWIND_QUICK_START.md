# Tailwind CSS Quick Reference

## 🎨 Primary Colors

### Available Color Classes

```tsx
// Background Colors
bg - primary - green; // #008000 (Green)
bg - primary - blue; // #1b4357 (Blue)

// Text Colors
text - primary - green; // #008000 (Green)
text - primary - blue; // #1b4357 (Blue)

// Border Colors
border - primary - green; // #008000 (Green)
border - primary - blue; // #1b4357 (Blue)
```

### CSS Variables (for CSS Modules)

```css
var(--color-primary-green)  /* #008000 */
var(--color-primary-blue)   /* #1b4357 */
```

## 📦 What's Included

✅ **tailwind.config.js** - Tailwind configuration with custom colors
✅ **postcss.config.js** - PostCSS with Tailwind and Autoprefixer
✅ **src/styles/global.css** - Global styles with Tailwind directives
✅ **ColorDemo component** - Visual demo of all color utilities
✅ **TailwindButton component** - Example button using Tailwind classes

## 🚀 Quick Start

### 1. View in Storybook

```bash
npm run storybook
```

Navigate to:

- **Design System > Colors** - See all color utilities
- **Components > TailwindButton** - Example Tailwind component

### 2. Use in Your Components

```tsx
import React from "react";

export const MyComponent = () => {
  return (
    <div className="p-6 bg-primary-blue text-white rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Hello World</h1>
      <button className="px-4 py-2 bg-primary-green rounded hover:opacity-90">
        Click Me
      </button>
    </div>
  );
};
```

## 💡 Common Patterns

### Buttons

```tsx
// Solid Green Button
<button className="px-6 py-3 bg-primary-green text-white rounded-md hover:opacity-90">
  Click Me
</button>

// Solid Blue Button
<button className="px-6 py-3 bg-primary-blue text-white rounded-md hover:opacity-90">
  Click Me
</button>

// Outline Green Button
<button className="px-6 py-3 border-2 border-primary-green text-primary-green rounded-md hover:bg-primary-green hover:text-white">
  Click Me
</button>
```

### Cards

```tsx
<div className="p-6 bg-primary-blue rounded-lg shadow-lg">
  <h3 className="text-white text-xl font-bold">Card Title</h3>
  <p className="text-gray-100 mt-2">Card content</p>
</div>
```

### Badges

```tsx
<span className="px-3 py-1 bg-primary-green text-white text-sm font-semibold rounded-full">
  Active
</span>
```

### Alerts

```tsx
<div className="p-4 bg-primary-green bg-opacity-10 border-l-4 border-primary-green rounded">
  <p className="text-primary-green font-semibold">Success message!</p>
</div>
```

## 🔧 Utility Classes

### Responsive Design

```tsx
<div className="bg-primary-green md:bg-primary-blue">
  Green on mobile, blue on desktop
</div>
```

### Hover States

```tsx
<button className="bg-primary-green hover:opacity-90">Hover me</button>
```

### Focus States

```tsx
<button className="bg-primary-blue focus:ring-2 focus:ring-primary-blue focus:ring-offset-2">
  Focus me
</button>
```

### Opacity

```tsx
<div className="bg-primary-green opacity-50">50% opacity</div>
<div className="bg-primary-blue opacity-75">75% opacity</div>
```

## 📚 Full Documentation

See [TAILWIND.md](./TAILWIND.md) for complete documentation.

## 🎯 Next Steps

1. **Explore Storybook** - Check out the ColorDemo and TailwindButton components
2. **Create Components** - Build new components using Tailwind utilities
3. **Customize** - Add more colors to `tailwind.config.js` as needed
4. **Build** - Run `npm run build` to create production bundle

Happy coding! 🚀
