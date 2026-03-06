# Next.js 15 Quick Start Guide

## 🚀 5-Minute Setup

### Step 1: Install the Package

```bash
npm install github:votuandi/divt-text-editor#v0.1.4
```

### Step 2: Configure Next.js

Create or update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['divt-text-editor'],
};

module.exports = nextConfig;
```

Or for `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['divt-text-editor'],
};

export default nextConfig;
```

### Step 3: Create Editor Component

Create `components/RichTextEditor.tsx`:

```tsx
'use client';

import { DivtTextEditor } from 'divt-text-editor';
import 'divt-text-editor/style.css';

export default function RichTextEditor({ 
  content, 
  onChange 
}: { 
  content: string; 
  onChange: (html: string) => void;
}) {
  return (
    <DivtTextEditor 
      content={content}
      onChange={onChange}
      uploadEndpoint="/api/upload"
    />
  );
}
```

### Step 4: Use in Your Page

Create or update `app/page.tsx`:

```tsx
'use client';

import { useState } from 'react';
import RichTextEditor from '@/components/RichTextEditor';

export default function Home() {
  const [content, setContent] = useState('<p>Hello World!</p>');

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">My Editor</h1>
      <RichTextEditor 
        content={content}
        onChange={setContent}
      />
    </main>
  );
}
```

### Step 5 (Optional): Create Upload API

Create `app/api/upload/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${Date.now()}-${file.name}`;
    const filepath = path.join(process.cwd(), 'public/uploads', filename);
    
    await writeFile(filepath, buffer);
    
    return NextResponse.json({ url: `/uploads/${filename}` });
  } catch (error) {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
```

### Step 6: Run Your App

```bash
npm run dev
```

Visit `http://localhost:3000` and start editing!

---

## 🔧 Troubleshooting

### Error: "Module not found" with rolldown.rs

**Solution**: Make sure you added `transpilePackages: ['divt-text-editor']` to `next.config.js`.

### Error: "React is not defined"

**Solution**: Ensure React is installed:
```bash
npm install react react-dom
```

### CSS Not Loading

**Solution**: Import the CSS in your component:
```tsx
import 'divt-text-editor/style.css';
```

---

## 📚 More Information

- **Full Guide**: See [NEXTJS15_COMPATIBILITY.md](./NEXTJS15_COMPATIBILITY.md)
- **General Usage**: See [README.md](./README.md)
- **Changelog**: See [CHANGELOG.md](./CHANGELOG.md)

---

## 💡 Tips

### Use Dynamic Import for Better Performance

```tsx
import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(
  () => import('@/components/RichTextEditor'),
  { ssr: false, loading: () => <div>Loading...</div> }
);
```

### TypeScript Support

The package includes TypeScript definitions:

```tsx
import { DivtTextEditorProps } from 'divt-text-editor';

const props: DivtTextEditorProps = {
  content: '<p>Hello</p>',
  onChange: (html) => console.log(html),
  uploadEndpoint: '/api/upload'
};
```

### Custom Styling

Override default styles:

```css
/* app/globals.css */
.divt-editor-container {
  border: 2px solid #e5e7eb;
  border-radius: 8px;
}

.divt-editor-toolbar {
  background: #f9fafb;
}

.divt-editor-content {
  min-height: 300px;
  padding: 1rem;
}
```

---

**Need Help?** Open an issue at https://github.com/votuandi/divt-text-editor/issues
