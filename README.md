# Divt Text Editor

A professional, high-performance Rich Text Editor built with **React**, **Tiptap**, and **Lucide Icons**. Designed specifically for Next.js and NestJS ecosystems, supporting advanced features like media uploads, custom embeds, and table management.

## 🚀 Features

-   **Typography**: Headings (H1-H6), Font Size, Bold, Italic, Underline, and Clear Formatting.
-   **Colors**: Custom Text Color and Highlight/Background Color selection.
-   **Layout**: Text alignment (Left, Center, Right, Justify) and Indentation management.
-   **Lists**: Ordered and Unordered (Bullet) lists with Tab/Shift+Tab support.
-   **Media**: 
    -   Image & Video uploads via custom API endpoints.
    -   Smart YouTube embedding.
    -   HTML Iframe/Embed support with adjustable dimensions.
-   **Advanced UI**: 
    -   Professional Custom Dialogs (No native browser prompts).
    -   Interactive Table management with resizable columns.
    -   Clean, modern toolbar interface.

## 📦 Installation

Since this library is hosted on GitHub, you can install it directly:

```bash
npm install github:votuandi/divt-text-editor
```

Or install a specific version:

```bash
npm install github:votuandi/divt-text-editor#v0.1.0
```

## 🚀 Usage in Next.js

### Next.js 13+ (App Router)

Create a client-side wrapper component:

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

## 📝 Component Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | `string` | No | `''` | Initial HTML content for the editor |
| `onChange` | `(html: string) => void` | No | - | Callback function that receives updated HTML |
| `uploadEndpoint` | `string` | No | - | API endpoint for uploading images/videos |

## 🔧 Setting Up Upload Endpoint

Create an API route in Next.js to handle file uploads:

**Next.js 13+ (App Router):**

```typescript
// app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    // Upload to your storage (S3, Cloudinary, etc.)
    const uploadedUrl = await uploadToStorage(file);
    
    return NextResponse.json({ url: uploadedUrl });
  } catch (error) {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
```

**Next.js Pages Router:**

```typescript
// pages/api/upload.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Handle file upload and return: 
  // res.status(200).json({ url: 'uploaded-file-url' });
}
```

## 🎨 Styling

The editor comes with default styles. Import the CSS file:

```tsx
import 'divt-text-editor/style.css';
```

You can override styles by targeting the CSS classes:
- `.divt-editor-container` - Main container
- `.divt-editor-toolbar` - Toolbar wrapper
- `.divt-editor-content` - Editor content area

## 📚 Examples

### Basic Usage

```tsx
import { DivtTextEditor } from 'divt-text-editor';
import 'divt-text-editor/style.css';

function MyEditor() {
  const [html, setHtml] = useState('');
  
  return (
    <DivtTextEditor 
      content={html}
      onChange={setHtml}
    />
  );
}
```

### With File Upload

```tsx
<DivtTextEditor 
  content={content}
  onChange={setContent}
  uploadEndpoint="/api/upload"
/>
```

### Read-Only Display

To display the editor content as read-only HTML:

```tsx
<div dangerouslySetInnerHTML={{ __html: content }} />
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build library
npm run build

# Run Storybook
npm run storybook
```

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions, please open an issue on [GitHub](https://github.com/votuandi/divt-text-editor/issues)
