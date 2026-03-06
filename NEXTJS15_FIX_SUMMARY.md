# Next.js 15 Compatibility Fix - Summary

## Problem Statement

The `divt-text-editor` package was encountering issues when used with Next.js 15 due to the new Rolldown bundler (written in Rust). The error mentioned "rolldown.rs" and suggested that CommonJS dependencies like React needed to be externalized properly.

## Root Causes

1. **New Bundler**: Next.js 15 uses Rolldown instead of Webpack/Turbopack
2. **Dependency Bundling**: The package was bundling all dependencies (~580KB), including React and Tiptap
3. **Module Resolution**: Rolldown has stricter requirements for ESM/CommonJS interoperability
4. **Peer Dependencies**: React and React-DOM were listed as peers but also bundled in dependencies

## Solutions Implemented

### 1. Package Configuration Updates (`package.json`)

#### Changed Peer Dependencies
```json
"peerDependencies": {
  "react": "^18.0.0 || ^19.0.0",      // Added React 19 support
  "react-dom": "^18.0.0 || ^19.0.0"
}
```

#### Removed React from Dependencies
React and React-DOM are now **only** peer dependencies, not bundled dependencies.

#### Added Side Effects Declaration
```json
"sideEffects": ["*.css"]
```
This tells bundlers that only CSS files have side effects, enabling better tree-shaking.

#### Enhanced Exports
```json
"exports": {
  ".": {
    "types": "./index.d.ts",
    "import": "./dist/divt-text-editor.es.js",
    "require": "./dist/divt-text-editor.umd.js"
  },
  "./style.css": "./dist/divt-text-editor.css",
  "./dist/style.css": "./dist/divt-text-editor.css"
}
```
Multiple export paths for flexibility.

#### Updated Style Path
```json
"style": "./dist/divt-text-editor.css"
```
More explicit naming (was `style.css`).

### 2. Build Configuration Updates (`vite.config.js`)

#### Externalized All Dependencies
```javascript
external: [
  'react',
  'react-dom',
  'react/jsx-runtime',
  /^@tiptap\//,        // All Tiptap packages
  'lucide-react'
]
```

**Impact**: Bundle size reduced from ~580KB to ~18KB (97% reduction!)

#### Changed Minification Strategy
```javascript
minify: 'esbuild'  // Was 'terser'
```
- Faster builds
- No additional dependencies required
- Better compatibility with modern bundlers

#### Added Source Maps
```javascript
sourcemap: true
```
Better debugging experience for developers.

#### Improved Output Configuration
```javascript
output: {
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react/jsx-runtime': 'jsxRuntime'
  },
  preserveModules: false,
  exports: 'named'
}
```

### 3. Documentation

Created comprehensive guides:

1. **NEXTJS15_QUICKSTART.md** - 5-minute setup guide
2. **NEXTJS15_COMPATIBILITY.md** - Detailed compatibility guide with:
   - Multiple solution approaches
   - Troubleshooting section
   - Complete examples
   - Performance optimization tips
   - Migration guide

3. **CHANGELOG.md** - Version history and upgrade guides

4. **NEXTJS15_FIX_SUMMARY.md** - This document

### 4. Updated README.md

Added prominent links to Next.js 15 guides at the top of the usage section.

## How to Use (For Consumers)

### Installation

```bash
npm install github:votuandi/divt-text-editor#v0.1.4
```

### Next.js Configuration

Add to `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['divt-text-editor'],
};

module.exports = nextConfig;
```

### Usage

```tsx
'use client';

import { DivtTextEditor } from 'divt-text-editor';
import 'divt-text-editor/style.css';

export default function Editor() {
  const [content, setContent] = useState('<p>Hello</p>');
  
  return <DivtTextEditor content={content} onChange={setContent} />;
}
```

## Technical Details

### Why Externalize Dependencies?

1. **Smaller Bundle**: Package is now ~18KB instead of ~580KB
2. **Avoid Duplication**: React isn't bundled twice (once in package, once in app)
3. **Version Control**: App controls which React version to use
4. **Better Tree-Shaking**: Bundlers can optimize better
5. **Rolldown Compatibility**: Modern bundlers expect this pattern

### Why Transpile in Next.js?

```javascript
transpilePackages: ['divt-text-editor']
```

This tells Next.js to:
1. Process the package through its bundler
2. Resolve external dependencies properly
3. Handle ESM/CommonJS interop
4. Apply optimizations

### Bundle Size Comparison

| Version | ES Module | UMD Module |
|---------|-----------|------------|
| v0.1.3  | 582.26 KB | 461.73 KB  |
| v0.1.4  | 17.91 KB  | 13.83 KB   |
| **Reduction** | **97%** | **97%** |

## Testing

### Verified Scenarios

✅ Next.js 15 App Router
✅ Next.js 15 Pages Router  
✅ Dynamic imports with SSR disabled
✅ Client-side only rendering
✅ TypeScript support
✅ CSS imports (multiple paths)
✅ File uploads
✅ All editor features

### Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Breaking Changes (v0.1.3 → v0.1.4)

### Required Dependencies

Projects must now install all dependencies:

```bash
npm install react react-dom \
  @tiptap/react @tiptap/starter-kit \
  @tiptap/extension-image @tiptap/extension-youtube \
  @tiptap/extension-underline @tiptap/extension-text-align \
  @tiptap/extension-table @tiptap/extension-table-row \
  @tiptap/extension-table-cell @tiptap/extension-table-header \
  @tiptap/extension-color @tiptap/extension-text-style \
  @tiptap/extension-highlight @tiptap/extension-link \
  lucide-react
```

**Note**: Most projects already have React. Installing the editor package will pull in other dependencies automatically.

### Next.js Configuration Required

Must add to `next.config.js`:

```javascript
transpilePackages: ['divt-text-editor']
```

### CSS Path (Optional)

Both paths work, but new path is more explicit:

```tsx
// Old (still works)
import 'divt-text-editor/style.css';

// New (recommended)
import 'divt-text-editor/dist/style.css';
```

## Migration Guide

### From v0.1.3 to v0.1.4

1. **Update package**:
   ```bash
   npm uninstall divt-text-editor
   npm install github:votuandi/divt-text-editor#v0.1.4
   ```

2. **Update next.config.js**:
   ```javascript
   module.exports = {
     transpilePackages: ['divt-text-editor'],
   };
   ```

3. **Rebuild**:
   ```bash
   rm -rf .next
   npm run dev
   ```

4. **Test**: Verify editor loads and functions correctly

## Future Improvements

### Planned for v0.2.0
- [ ] Publish to npm registry
- [ ] Add more customization options
- [ ] Improve TypeScript types
- [ ] Add more examples

### Planned for v1.0.0
- [ ] Stable API
- [ ] Full test coverage
- [ ] Performance benchmarks
- [ ] Accessibility improvements

## Support

### Getting Help

1. **Quick Start**: See [NEXTJS15_QUICKSTART.md](./NEXTJS15_QUICKSTART.md)
2. **Detailed Guide**: See [NEXTJS15_COMPATIBILITY.md](./NEXTJS15_COMPATIBILITY.md)
3. **General Usage**: See [README.md](./README.md)
4. **Issues**: https://github.com/votuandi/divt-text-editor/issues

### Reporting Issues

When reporting issues, include:
- Next.js version
- Node.js version  
- Package version
- Error message
- Minimal reproduction code
- Configuration files (next.config.js, package.json)

## Credits

- **Tiptap**: https://tiptap.dev/
- **Lucide Icons**: https://lucide.dev/
- **Next.js**: https://nextjs.org/
- **Vite**: https://vitejs.dev/

## License

MIT License - See [LICENSE](./LICENSE) file

---

**Version**: 0.1.4  
**Date**: March 6, 2026  
**Author**: votuandi  
**Repository**: https://github.com/votuandi/divt-text-editor
