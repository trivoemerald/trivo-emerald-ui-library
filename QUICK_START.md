# Quick Start Guide - trivo-ui-library v1.0.9

## ✅ Follow these 4 steps exactly:

### Step 1: Install the library

```bash
npm install trivo-ui-library@1.0.9
```

### Step 2: Install Tailwind CSS (if you don't have it)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3: Configure Tailwind

Edit `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // 👇 Add this line to scan library files
    "./node_modules/trivo-ui-library/dist/**/*.{js,cjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Step 4: Import CSS files

In your **main entry file** (like `src/main.tsx` or `src/App.tsx`):

```tsx
// 1. Import library CSS modules (component styles)
import "trivo-ui-library/styles";

// 2. Import color variables
import "trivo-ui-library/variables.css";

// 3. Your Tailwind CSS
import "./index.css";
```

Make sure your `src/index.css` has:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 5: Use the components!

```tsx
import { Button, Input, Modal, Drawer } from "trivo-ui-library";

function App() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">My App</h1>

      {/* Primary blue button */}
      <Button variant="filled" color="primary">
        Click Me
      </Button>

      {/* Primary green button */}
      <Button variant="outline" color="primary-green">
        Green Button
      </Button>

      {/* Other colors */}
      <Button color="energy">Energy</Button>
      <Button color="water">Water</Button>

      {/* Input field */}
      <Input label="Email" type="email" placeholder="Enter your email" />
    </div>
  );
}

export default App;
```

## Available Colors

All these colors work out of the box:

- **Primary**: `primary` (blue), `primary-green`
- **Sectors**: `energy`, `water`, `logistics`, `electronics`, `environment`, `agriculture`
- **Accents**: `success`, `warning`, `error`, `info`
- **Standard**: `red`, `orange`, `yellow`, `green`, `blue`, `purple`, `pink`, `teal`, `cyan`, etc.
- **Light variants**: `secondary-light-rose`, `secondary-light-blue`, etc.

## Troubleshooting

### Problem: Styles not showing up?

**Solution**: Make sure you imported the CSS files in the correct order:

```tsx
import "trivo-ui-library/styles"; // ← Library styles
import "trivo-ui-library/variables.css"; // ← Color variables
import "./index.css"; // ← Your Tailwind
```

### Problem: Tailwind classes not working?

**Solution**: Update `tailwind.config.js` to include library files:

```js
content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/trivo-ui-library/dist/**/*.{js,cjs}", // Add this!
],
```

### Problem: Colors not working?

**Solution**: Make sure you imported `variables.css`:

```tsx
import "trivo-ui-library/variables.css";
```

## Complete Example

Here's a complete `main.tsx` or `App.tsx`:

```tsx
// CSS imports (order matters!)
import "trivo-ui-library/styles";
import "trivo-ui-library/variables.css";
import "./index.css";

// Component imports
import { Button, Input } from "trivo-ui-library";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Welcome to My App</h1>

        <div className="flex gap-4">
          <Button variant="filled" color="primary">
            Primary
          </Button>
          <Button variant="outline" color="primary-green">
            Green
          </Button>
          <Button variant="subtle" color="energy">
            Energy
          </Button>
        </div>

        <Input label="Name" placeholder="Enter your name" fullWidth />
      </div>
    </div>
  );
}

export default App;
```

That's it! 🎉 Your library should now work perfectly.
