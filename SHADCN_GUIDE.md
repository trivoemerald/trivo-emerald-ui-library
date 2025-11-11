# Using shadcn/ui with Trivo UI Library

Your library is now set up to work with shadcn/ui components!

## What's Included

✅ **shadcn/ui dependencies installed:**

- `@radix-ui/react-slot` - Primitive components
- `class-variance-authority` - For component variants
- `clsx` - Conditional class names
- `tailwind-merge` - Smart class merging

✅ **Utility function exported:**

- `cn()` - Combines and merges Tailwind classes

✅ **Path aliases configured:**

- `@/` points to `./src/`

## How to Add shadcn Components

### 1. Add a shadcn component to your library:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
# etc...
```

This will create components in `src/components/ui/`

### 2. Export the shadcn component from your library:

Edit `src/index.ts`:

```typescript
// shadcn/ui components
export { Button as ShadcnButton } from "./components/ui/button";
export { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card";
```

### 3. Build and publish:

```bash
npm run build
npm version patch
npm publish
```

### 4. Use in your projects:

```tsx
import { cn, ShadcnButton, Card } from "trivo-ui-library";

function MyComponent() {
  return (
    <div className={cn("flex", "gap-4", "p-4")}>
      <ShadcnButton variant="default">Click me</ShadcnButton>
      <Card>
        <CardHeader>
          <CardTitle>Hello</CardTitle>
        </CardHeader>
        <CardContent>Content here</CardContent>
      </Card>
    </div>
  );
}
```

## Using the cn() Utility

The `cn()` utility is now exported from your library:

```tsx
import { cn } from "trivo-ui-library";

// Combine classes
<div className={cn("text-base", "font-bold", "text-blue-500")} />

// Conditional classes
<div className={cn(
  "p-4",
  isActive && "bg-blue-500",
  isDisabled && "opacity-50"
)} />

// Override classes (rightmost wins)
<div className={cn("p-2", "p-4")} /> // p-4 wins
```

## Example: Add a shadcn Button

```bash
# In your library folder
npx shadcn@latest add button
```

Then export it:

```typescript
// src/index.ts
export { Button as UIButton } from "./components/ui/button";
```

Build and use:

```tsx
import { UIButton } from "trivo-ui-library";

<UIButton variant="outline" size="lg">
  Click me
</UIButton>;
```

## Benefits

✅ Access to 50+ high-quality shadcn components
✅ Fully customizable with Tailwind
✅ Works with your existing color system
✅ Type-safe with TypeScript
✅ Tree-shakeable (only import what you use)

## Available shadcn Components

Run these commands to add components:

```bash
npx shadcn@latest add accordion
npx shadcn@latest add alert
npx shadcn@latest add avatar
npx shadcn@latest add badge
npx shadcn@latest add button
npx shadcn@latest add calendar
npx shadcn@latest add card
npx shadcn@latest add checkbox
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add select
npx shadcn@latest add table
npx shadcn@latest add tabs
npx shadcn@latest add toast
# ... and many more!
```

See all components at: https://ui.shadcn.com/docs/components
