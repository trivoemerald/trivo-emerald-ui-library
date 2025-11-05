# Publishing Guide for Trivo UI Library

## Prerequisites

1. **npm account**: Make sure you have an npm account at [npmjs.com](https://www.npmjs.com)
2. **npm CLI**: Ensure you're logged into npm CLI:
   ```bash
   npm login
   ```

## Before Publishing

### 1. Update package.json metadata

Before publishing, update these fields in `package.json`:

- `author`: Your name and email
- `repository`: Your GitHub repository URL
- `bugs`: Your GitHub issues URL
- `homepage`: Your GitHub repository or documentation URL

### 2. Choose your package name

The current name is `trivo-ui-library`. You may want to:

- Check if the name is available: `npm view trivo-ui-library`
- Consider a scoped package: `@yourusername/trivo-ui-library`
- Use a unique name if this one is taken

### 3. Set the correct version

- For first publish: Keep `1.0.0`
- For updates: Use semantic versioning (patch: 1.0.1, minor: 1.1.0, major: 2.0.0)

## Publishing Steps

### 1. Build the package

```bash
npm run build
```

### 2. Test the package locally (optional)

```bash
# Create a tarball to test locally
npm pack

# Or link it locally for testing
npm link
```

### 3. Publish to npm

```bash
# For public package
npm publish

# For scoped package (if using @username/package-name)
npm publish --access public
```

### 4. Verify publication

- Check your package at: `https://www.npmjs.com/package/trivo-ui-library`
- Test installation: `npm install trivo-ui-library`

## Using Your Published Package

Once published, users can install and use your library:

```bash
npm install trivo-ui-library
```

```tsx
import React from "react";
import { Button, ThemeProvider } from "trivo-ui-library";
import "trivo-ui-library/styles";

function App() {
  return (
    <ThemeProvider>
      <Button variant="filled" color="primary">
        Hello from Trivo UI!
      </Button>
    </ThemeProvider>
  );
}
```

## Updating Your Package

When you make changes:

1. Update the version in `package.json`:

   ```bash
   npm version patch  # for bug fixes
   npm version minor  # for new features
   npm version major  # for breaking changes
   ```

2. Build and publish:
   ```bash
   npm run build
   npm publish
   ```

## Package Information

Your package includes:

- ✅ React components with TypeScript definitions
- ✅ CSS styles
- ✅ Theme system
- ✅ Tree-shakable exports
- ✅ CommonJS and ESM builds
- ✅ Source maps for debugging

Package size: ~7.4 KB (compressed)
Unpacked size: ~23.8 KB

## Notes

- The `prepublishOnly` script automatically builds before publishing
- Only the `dist/` folder and necessary files are included (see `.npmignore`)
- TypeScript definitions are generated automatically
- CSS is bundled separately for optional importing
