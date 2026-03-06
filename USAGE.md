# 📖 Usage Guide

## Installation

```bash
npm install github:votuandi/divt-text-editor
```

Or install a specific version:

```bash
npm install github:votuandi/divt-text-editor#v0.1.1
```

## ✅ Correct Import (IMPORTANT!)

Always import from the package root:

```tsx
import { DivtTextEditor } from 'divt-text-editor';
import 'divt-text-editor/style.css';
```

### ❌ Common Mistakes to Avoid

**DO NOT** try to import from internal source paths:

```tsx
// ❌ This will NOT work!
import DivtTextEditor from 'divt-text-editor/src/components/DivtTextEditor/DivtTextEditor.jsx';

// ❌ This will NOT work either!
import { DivtTextEditor } from 'divt-text-editor/dist/divt-text-editor.es.js';
```

The package uses the `exports` field in `package.json` to control what can be imported. Only these paths are available:
- `divt-text-editor` - The main component
- `divt-text-editor/style.css` - The stylesheet

## Next.js Integration

### Next.js 13+ (App Router)

Create a client component wrapper:

```tsx
// components/RichTextEditor.tsx
'use client';

import { DivtTextEditor } from 'divt-text-editor';
import 'divt-text-editor/style.css';

export default function RichTextEditor({ content, onChange, uploadEndpoint }) {
  return (
    <DivtTextEditor 
      content={content}
      onChange={onChange}
      uploadEndpoint={uploadEndpoint}
    />
  );
}
```

Use it in your page:

```tsx
// app/page.tsx
'use client';

import { useState } from 'react';
import RichTextEditor from '@/components/RichTextEditor';

export default function Home() {
  const [content, setContent] = useState('<p>Hello World!</p>');

  return (
    <div>
      <h1>My Editor</h1>
      <RichTextEditor 
        content={content}
        onChange={(html) => setContent(html)}
        uploadEndpoint="/api/upload"
      />
    </div>
  );
}
```

### Next.js 12 or Pages Router

Use dynamic import with `ssr: false`:

```tsx
// pages/index.tsx
import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'divt-text-editor/style.css';

const DivtTextEditor = dynamic(
  () => import('divt-text-editor').then(mod => mod.DivtTextEditor),
  { ssr: false }
);

export default function Home() {
  const [content, setContent] = useState('<p>Hello World!</p>');

  return (
    <div>
      <h1>My Editor</h1>
      <DivtTextEditor 
        content={content}
        onChange={(html) => setContent(html)}
        uploadEndpoint="/api/upload"
      />
    </div>
  );
}
```

## TypeScript Support

The package includes TypeScript declarations. Your IDE will provide autocomplete and type checking:

```tsx
import { DivtTextEditor, DivtTextEditorProps } from 'divt-text-editor';

const MyEditor: React.FC = () => {
  const [content, setContent] = useState<string>('');
  
  const handleChange = (html: string) => {
    setContent(html);
  };
  
  return (
    <DivtTextEditor 
      content={content}
      onChange={handleChange}
      uploadEndpoint="/api/upload"
    />
  );
};
```

## Troubleshooting

### "Module not found" Error

If you see:
```
Module not found: Package path ./src/components/... is not exported
```

**Cause**: You're trying to import from an internal path that isn't exported.

**Solution**: Use the correct import (see "Correct Import" section above).

### SSR Errors in Next.js

If you see errors during server-side rendering:

**For App Router**: Make sure your component has `'use client'` at the top.

**For Pages Router**: Use `dynamic` import with `ssr: false`.

### Styles Not Loading

Make sure you import the CSS file:

```tsx
import 'divt-text-editor/style.css';
```

This should be done once in your app, typically in:
- App Router: `app/layout.tsx` or your component file
- Pages Router: `_app.tsx` or your component file

## Need Help?

- [GitHub Issues](https://github.com/votuandi/divt-text-editor/issues)
- [Full Documentation](README.md)
