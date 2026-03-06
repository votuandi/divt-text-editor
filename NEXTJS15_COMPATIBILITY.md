# Next.js 15 Compatibility Guide

## Overview

Next.js 15 introduces a new bundler called Rolldown (written in Rust) which requires proper configuration for external packages, especially those with peer dependencies like React.

## The Issue

When using `divt-text-editor` in Next.js 15, you might encounter errors related to:
- Module resolution with the new Rolldown bundler
- CommonJS/ESM interoperability
- Peer dependency handling (React, React-DOM)

## Solutions

### Solution 1: Configure Next.js to Transpile the Package (Recommended)

Add the package to Next.js transpilation in your `next.config.js` or `next.config.mjs`:

**For next.config.js:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['divt-text-editor'],
  // If you're installing from GitHub, you might also need:
  experimental: {
    esmExternals: 'loose'
  }
};

module.exports = nextConfig;
```

**For next.config.mjs:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['divt-text-editor'],
  // If you're installing from GitHub, you might also need:
  experimental: {
    esmExternals: 'loose'
  }
};

export default nextConfig;
```

### Solution 2: Use Dynamic Import with Client-Side Only Rendering

For Next.js 15 App Router, create a client component wrapper:

```tsx
// components/TextEditor.tsx
'use client';

import dynamic from 'next/dynamic';
import { ComponentProps } from 'react';
import 'divt-text-editor/style.css';

// Dynamically import the editor with no SSR
const DivtTextEditor = dynamic(
  () => import('divt-text-editor').then((mod) => mod.DivtTextEditor),
  { 
    ssr: false,
    loading: () => <div>Loading editor...</div>
  }
);

type EditorProps = ComponentProps<typeof DivtTextEditor>;

export default function TextEditor(props: EditorProps) {
  return <DivtTextEditor {...props} />;
}
```

Then use it in your page:

```tsx
// app/page.tsx
'use client';

import { useState } from 'react';
import TextEditor from '@/components/TextEditor';

export default function Page() {
  const [content, setContent] = useState('<p>Hello World!</p>');

  return (
    <div>
      <h1>My Editor</h1>
      <TextEditor 
        content={content}
        onChange={setContent}
        uploadEndpoint="/api/upload"
      />
    </div>
  );
}
```

### Solution 3: Configure Webpack Externals (For Advanced Users)

If you need more control, you can configure webpack externals in `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['divt-text-editor'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't bundle these on the client side
      config.externals = config.externals || [];
      config.externals.push({
        'react': 'React',
        'react-dom': 'ReactDOM'
      });
    }
    return config;
  }
};

module.exports = nextConfig;
```

## Package Configuration Changes (v0.1.4+)

The package has been updated with the following improvements for Next.js 15 compatibility:

### 1. Updated package.json

- **Peer Dependencies**: Now supports both React 18 and 19
  ```json
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0"
  }
  ```

- **Side Effects**: Properly declared for CSS files
  ```json
  "sideEffects": ["*.css"]
  ```

- **Exports**: Multiple export paths for flexibility
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

### 2. Updated vite.config.js

- **External Dependencies**: All dependencies are now externalized
  - React and React-DOM (peer dependencies)
  - All Tiptap packages
  - Lucide React icons

- **Better Module Formats**: Optimized ESM and UMD builds
  ```javascript
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    /^@tiptap\//,
    'lucide-react'
  ]
  ```

- **Improved Interop**: Better CommonJS/ESM compatibility
  ```javascript
  output: {
    exports: 'named',
    interop: 'auto'
  }
  ```

## Installation Instructions

### From GitHub (Recommended for Latest)

```bash
npm install github:votuandi/divt-text-editor#v0.1.4
```

### From npm (When Published)

```bash
npm install divt-text-editor
```

## Complete Example for Next.js 15

### 1. Install the Package

```bash
npm install github:votuandi/divt-text-editor
```

### 2. Configure next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['divt-text-editor'],
};

module.exports = nextConfig;
```

### 3. Create Editor Component

```tsx
// components/RichTextEditor.tsx
'use client';

import { DivtTextEditor } from 'divt-text-editor';
import 'divt-text-editor/style.css';
import { useState } from 'react';

export default function RichTextEditor() {
  const [content, setContent] = useState('<p>Start typing...</p>');

  return (
    <div className="max-w-4xl mx-auto p-4">
      <DivtTextEditor 
        content={content}
        onChange={(html) => {
          setContent(html);
          console.log('Content updated:', html);
        }}
        uploadEndpoint="/api/upload"
      />
      
      {/* Preview */}
      <div className="mt-8 p-4 border rounded">
        <h2 className="text-xl font-bold mb-4">Preview:</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
```

### 4. Use in Your Page

```tsx
// app/editor/page.tsx
'use client';

import RichTextEditor from '@/components/RichTextEditor';

export default function EditorPage() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-center my-8">
        Rich Text Editor
      </h1>
      <RichTextEditor />
    </main>
  );
}
```

### 5. Create Upload API Route

```typescript
// app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save to public directory
    const filename = `${Date.now()}-${file.name}`;
    const filepath = path.join(process.cwd(), 'public', 'uploads', filename);
    
    await writeFile(filepath, buffer);
    
    // Return the public URL
    const url = `/uploads/${filename}`;
    
    return NextResponse.json({ url });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    );
  }
}
```

## Troubleshooting

### Error: "Module not found" with rolldown.rs

**Cause**: Next.js 15's Rolldown bundler needs the package to be transpiled.

**Solution**: Add `transpilePackages: ['divt-text-editor']` to your `next.config.js`.

### Error: "React is not defined"

**Cause**: Peer dependency not properly resolved.

**Solution**: 
1. Ensure React and React-DOM are installed in your project
2. Add `esmExternals: 'loose'` to experimental config
3. Use dynamic import with `ssr: false`

### Error: "Cannot find module './dist/divt-text-editor.es.js'"

**Cause**: The dist folder is missing (only if installing from GitHub before v0.1.3).

**Solution**: 
1. Install v0.1.3 or later: `npm install github:votuandi/divt-text-editor#v0.1.3`
2. Or build manually: `cd node_modules/divt-text-editor && npm install && npm run build`

### CSS Not Loading

**Cause**: CSS import path incorrect or not transpiled.

**Solution**:
1. Import CSS in your component: `import 'divt-text-editor/style.css'`
2. Or use the full path: `import 'divt-text-editor/dist/style.css'`
3. Ensure `transpilePackages` includes the package

## Performance Optimization

### 1. Code Splitting

Use dynamic imports to reduce initial bundle size:

```tsx
const DivtTextEditor = dynamic(
  () => import('divt-text-editor').then((mod) => mod.DivtTextEditor),
  { ssr: false }
);
```

### 2. Lazy Loading

Only load the editor when needed:

```tsx
'use client';

import { useState, lazy, Suspense } from 'react';

const TextEditor = lazy(() => import('@/components/TextEditor'));

export default function Page() {
  const [showEditor, setShowEditor] = useState(false);

  return (
    <div>
      <button onClick={() => setShowEditor(true)}>
        Open Editor
      </button>
      
      {showEditor && (
        <Suspense fallback={<div>Loading editor...</div>}>
          <TextEditor />
        </Suspense>
      )}
    </div>
  );
}
```

## Migration from Previous Versions

If you're upgrading from v0.1.2 or earlier:

1. **Update your installation**:
   ```bash
   npm uninstall divt-text-editor
   npm install github:votuandi/divt-text-editor#v0.1.4
   ```

2. **Update next.config.js**:
   ```javascript
   // Add this line
   transpilePackages: ['divt-text-editor']
   ```

3. **Update CSS imports** (if needed):
   ```tsx
   // Old (still works)
   import 'divt-text-editor/style.css';
   
   // New (more explicit)
   import 'divt-text-editor/dist/style.css';
   ```

4. **Rebuild your project**:
   ```bash
   rm -rf .next
   npm run dev
   ```

## Additional Resources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Rolldown Bundler](https://rolldown.rs/)
- [Tiptap Editor](https://tiptap.dev/)
- [Package Repository](https://github.com/votuandi/divt-text-editor)

## Support

If you encounter issues:

1. Check this guide first
2. Review the [main README](./README.md)
3. Check [GitHub Issues](https://github.com/votuandi/divt-text-editor/issues)
4. Open a new issue with:
   - Next.js version
   - Node.js version
   - Error message
   - Your configuration files

---

**Last Updated**: March 6, 2026
**Package Version**: v0.1.4+
**Next.js Version**: 15.x
