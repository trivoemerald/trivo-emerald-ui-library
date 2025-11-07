# Trivo UI Library - Usage Guide

## ✅ Fixed in v1.0.7

The CSS conflict issue has been resolved! This version no longer conflicts with consuming projects' Tailwind setups.

## How It Works Now

### What Changed:

1. **Removed Tailwind imports** from the exported CSS
2. **Pure CSS variables only** - `variables.css` contains just color definitions (no `@import "tailwindcss"`)
3. **Components use inline styles** - Button and other components use `style={{ backgroundColor: var(...) }}` which works without Tailwind

### Installation

```bash
npm install trivo-ui-library@1.0.7
```

## Usage in Your Project

### Step 1: Import CSS Variables

In your main `App.tsx` or `index.tsx`:

```tsx
import "trivo-ui-library/variables.css";
```

### Step 2: Use Components

```tsx
import { Button } from "trivo-ui-library";

function MyApp() {
  return (
    <div>
      {/* Primary colors */}
      <Button color="primary">Primary Blue</Button>
      <Button color="primary-green">Primary Green</Button>

      {/* Sector colors */}
      <Button color="energy">Energy</Button>
      <Button color="water">Water</Button>
      <Button color="logistics">Logistics</Button>

      {/* Any color from the palette */}
      <Button color="secondary-light-rose">Light Rose</Button>
      <Button color="teal">Teal</Button>
    </div>
  );
}
```

## Available Colors

All colors from `variables.css` work automatically:

### Primary Colors

- `primary` (blue: #1b4357)
- `primary-green` (#008000)

### Green Shades

- `primary-green-90` through `primary-green-10`

### Blue Shades

- `primary-blue-90` through `primary-blue-10`

### Sector Colors

- `energy`, `water`, `logistics`, `electronics`, `environment`, `agriculture`

### Accent Colors

- `warning`, `error`, `success`, `info`

### Standard Colors

- `slate`, `gray`, `zinc`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

### Light Variants

- `secondary-light-slate`, `secondary-light-gray`, etc.

## Why This Works

1. **No Tailwind Dependency**: The library doesn't force Tailwind onto your project
2. **Pure CSS Variables**: All colors are defined as CSS custom properties in `:root`
3. **Inline Styles**: Components use `style={{ backgroundColor: var(--color-xxx) }}` which works everywhere
4. **No Conflicts**: Your project's Tailwind setup won't conflict with the library

## Example: Full Component

```tsx
import "trivo-ui-library/variables.css";
import { Button, Input, Modal, Drawer } from "trivo-ui-library";

function App() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Trivo Components</h1>

      <div className="space-y-4">
        <Button variant="filled" color="primary-green" size="lg">
          Green Button
        </Button>

        <Button variant="outline" color="energy">
          Energy Sector
        </Button>

        <Input label="Email" placeholder="Enter your email" type="email" />
      </div>
    </div>
  );
}
```

## Troubleshooting

### Colors not showing?

Make sure you imported the CSS:

```tsx
import "trivo-ui-library/variables.css";
```

### TypeScript errors?

The library includes full TypeScript definitions. Make sure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "moduleResolution": "node"
  }
}
```

## Migration from v1.0.3

If you were using v1.0.3 or earlier:

1. Update to v1.0.7:

   ```bash
   npm install trivo-ui-library@1.0.7
   ```

2. Change the import:

   ```tsx
   // OLD (caused conflicts)
   import "trivo-ui-library/dist/trivo-ui-library.css";

   // NEW (no conflicts)
   import "trivo-ui-library/variables.css";
   ```

3. That's it! Everything else works the same.

## Need More Help?

Check out:

- [Main README](./README.md)
- [Storybook Documentation](https://your-storybook-url.com)
- [GitHub Issues](https://github.com/trivoemerald/trivo-ui-library/issues)
