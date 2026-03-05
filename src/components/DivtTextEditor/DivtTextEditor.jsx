import React, { useCallback, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';

// Tiptap Core & Extensions
import { StarterKit } from '@tiptap/starter-kit';
import { Image } from '@tiptap/extension-image';
import { Youtube } from '@tiptap/extension-youtube';
import { Underline } from '@tiptap/extension-underline';
import { TextAlign } from '@tiptap/extension-text-align';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { Color } from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import { Highlight } from '@tiptap/extension-highlight';
import { Link as TiptapLink } from '@tiptap/extension-link';

// Custom Extensions
import Video from './extensions/Video';
import Indent from './extensions/Indent';
import Iframe from './extensions/Iframe';

// External Components
import { EditorDialog } from '../EditorDialog';

// Lucide Icons (Aliased where necessary to avoid naming conflicts)
import {
    Bold, Italic, Underline as UnderlineIcon, Eraser,
    AlignLeft, AlignCenter, AlignRight, AlignJustify,
    List, ListOrdered, IndentIncrease, IndentDecrease,
    Quote, Table as TableIcon, ImagePlus, Youtube as YoutubeIcon,
    Type, Highlighter,
    Link as LinkIcon, Unlink, CodeXml
} from 'lucide-react';

// Styles
import './styles.css';

const DivtTextEditor = ({ content = '', onChange, uploadEndpoint }) => {
    // -------------------------------------------------------------
    // STATE MANAGEMENT
    // -------------------------------------------------------------
    const [dialogConfig, setDialogConfig] = useState({
        isOpen: false,
        type: '', // 'link', 'youtube', 'iframe'
        data: { url: '', width: '100%', height: '400' }
    });

    // -------------------------------------------------------------
    // HELPER FUNCTIONS (No React Hooks inside)
    // -------------------------------------------------------------
    const uploadToServer = async (file) => {
        if (!uploadEndpoint) {
            console.warn('DivtTextEditor: uploadEndpoint prop is missing.');
            return file.type.startsWith('video/') ? '/default-video.mp4' : '/default.webp';
        }
        try {
            const formData = new FormData();
            formData.append('file', file);
            const response = await fetch(uploadEndpoint, { method: 'POST', body: formData });
            if (!response.ok) throw new Error(`Upload failed: ${response.status}`);
            const data = await response.json();
            return data.url;
        } catch (error) {
            console.error('API upload failed:', error);
            return file.type.startsWith('video/') ? '/default-video.mp4' : '/default.webp';
        }
    };

    // -------------------------------------------------------------
    // EDITOR INITIALIZATION
    // -------------------------------------------------------------
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            Table.configure({ resizable: true }),
            TableRow, TableHeader, TableCell,
            Image,
            Youtube.configure({ controls: false }),
            Video,
            Indent,
            Iframe,
            TextStyle,
            Color,
            Highlight.configure({ multicolor: true }),
            TiptapLink.configure({ openOnClick: false, autolink: true }),
        ],
        content: content,
        onUpdate: ({ editor }) => {
            if (onChange) onChange(editor.getHTML());
        },
    });

    // -------------------------------------------------------------
    // TOOLBAR HANDLERS (useCallback hooks)
    // -------------------------------------------------------------

    // Media Upload Handler
    const handleAddMedia = useCallback(() => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*,video/*';
        input.onchange = async (event) => {
            const file = event.target.files[0];
            if (file) {
                const isVideo = file.type.startsWith('video/');
                const isImage = file.type.startsWith('image/');

                if (!isVideo && !isImage) return alert('Invalid file type.');

                const url = await uploadToServer(file);

                if (isVideo) {
                    editor.chain().focus().setVideo({ src: url }).run();
                } else if (isImage) {
                    editor.chain().focus().setImage({ src: url }).run();
                }
            }
        };
        input.click();
    }, [editor, uploadEndpoint]);

    // Indentation Handlers
    const handleIncreaseIndent = useCallback(() => {
        if (!editor) return;
        if (editor.can().sinkListItem('listItem')) {
            editor.chain().focus().sinkListItem('listItem').run();
        } else {
            editor.chain().focus().indent().run();
        }
    }, [editor]);

    const handleDecreaseIndent = useCallback(() => {
        if (!editor) return;
        if (editor.can().liftListItem('listItem')) {
            editor.chain().focus().liftListItem('listItem').run();
        } else {
            editor.chain().focus().outdent().run();
        }
    }, [editor]);

    // Dialog Openers
    const openLinkDialog = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href || '';
        setDialogConfig({
            isOpen: true,
            type: 'link',
            data: { url: previousUrl, width: '', height: '' }
        });
    }, [editor]);

    const openYoutubeDialog = useCallback(() => {
        setDialogConfig({
            isOpen: true,
            type: 'youtube',
            data: { url: '', width: '', height: '' }
        });
    }, []);

    const openIframeDialog = useCallback(() => {
        if (editor.isActive('iframe')) {
            const { src, width, height } = editor.getAttributes('iframe');
            setDialogConfig({
                isOpen: true,
                type: 'iframe',
                data: { url: src || '', width: width || '100%', height: height || '400' }
            });
        } else {
            setDialogConfig({
                isOpen: true,
                type: 'iframe',
                data: { url: '', width: '100%', height: '400' }
            });
        }
    }, [editor]);

    // Dialog Submit Handler
    const handleDialogSubmit = useCallback(() => {
        const { type, data } = dialogConfig;

        // Focus the editor before executing commands to ensure proper insertion
        editor.commands.focus();

        if (type === 'link') {
            if (data.url === '') {
                editor.chain().focus().extendMarkRange('link').unsetLink().run();
            } else {
                editor.chain().focus().extendMarkRange('link').setLink({ href: data.url }).run();
            }
        }
        else if (type === 'youtube') {
            if (data.url) {
                editor.commands.setYoutubeVideo({ src: data.url });
            }
        }
        else if (type === 'iframe') {
            let finalSrc = data.url;
            let finalWidth = data.width || '100%';
            let finalHeight = data.height || '400';

            // Parse if user pasted raw HTML iframe code
            if (data.url.includes('<iframe')) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data.url, 'text/html');
                const iframeElement = doc.querySelector('iframe');
                if (iframeElement) {
                    finalSrc = iframeElement.getAttribute('src') || '';
                    finalWidth = iframeElement.getAttribute('width') || finalWidth;
                    finalHeight = iframeElement.getAttribute('height') || finalHeight;
                }
            }

            if (finalSrc) {
                if (editor.isActive('iframe')) {
                    editor.chain().focus().updateAttributes('iframe', { width: finalWidth, height: finalHeight }).run();
                } else {
                    editor.chain().focus().setIframe({ src: finalSrc, width: finalWidth, height: finalHeight }).run();
                }
            }
        }

        // Close dialog after submission
        setDialogConfig({ isOpen: false, type: '', data: { url: '', width: '', height: '' } });
    }, [editor, dialogConfig]);

    const closeDialog = useCallback(() => {
        setDialogConfig({ isOpen: false, type: '', data: { url: '', width: '', height: '' } });
    }, []);

    // =============================================================
    // EARLY RETURN (Must be placed AFTER all hooks)
    // =============================================================
    if (!editor) return null;

    // -------------------------------------------------------------
    // RENDER HELPERS
    // -------------------------------------------------------------
    const handleBlockTypeChange = (e) => {
        const value = e.target.value;
        if (value === 'paragraph') {
            editor.chain().focus().setParagraph().run();
        } else {
            editor.chain().focus().toggleHeading({ level: parseInt(value, 10) }).run();
        }
    };

    const getCurrentBlockType = () => {
        for (let i = 1; i <= 6; i++) {
            if (editor.isActive('heading', { level: i })) return i.toString();
        }
        return 'paragraph';
    };

    const iconSize = 16;

    // -------------------------------------------------------------
    // RENDER COMPONENT
    // -------------------------------------------------------------
    return (
        <div className="divt-editor-container">

            {/* External Dialog Component */}
            <EditorDialog
                config={dialogConfig}
                setConfig={setDialogConfig}
                onSubmit={handleDialogSubmit}
                onClose={closeDialog}
            />

            {/* Editor Toolbar */}
            <div className="divt-editor-toolbar">

                {/* GROUP 1: Block Type */}
                <select className="toolbar-select" value={getCurrentBlockType()} onChange={handleBlockTypeChange}>
                    <option value="paragraph">Paragraph</option>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                    <option value="4">Heading 4</option>
                    <option value="5">Heading 5</option>
                    <option value="6">Heading 6</option>
                </select>

                <div className="toolbar-divider" />

                {/* GROUP 2: Text Styles */}
                <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''} title="Bold">
                    <Bold size={iconSize} />
                </button>
                <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''} title="Italic">
                    <Italic size={iconSize} />
                </button>
                <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={editor.isActive('underline') ? 'is-active' : ''} title="Underline">
                    <UnderlineIcon size={iconSize} />
                </button>
                <button onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()} title="Clear Formatting">
                    <Eraser size={iconSize} />
                </button>

                <div className="toolbar-divider" />

                {/* GROUP 3: Colors */}
                <label className="custom-color-picker" title="Text Color">
                    <Type size={iconSize} color={editor.getAttributes('textStyle').color || 'currentColor'} />
                    <input
                        type="color"
                        className="color-picker-input"
                        onInput={e => editor.chain().focus().setColor(e.target.value).run()}
                        value={editor.getAttributes('textStyle').color || '#000000'}
                    />
                </label>
                <label className="custom-color-picker" title="Highlight Color">
                    <Highlighter size={iconSize} color={editor.isActive('highlight') ? editor.getAttributes('highlight').color : 'currentColor'} />
                    <input
                        type="color"
                        className="color-picker-input"
                        onInput={e => editor.chain().focus().setHighlight({ color: e.target.value }).run()}
                        value={editor.isActive('highlight') ? editor.getAttributes('highlight').color : '#ffffff'}
                    />
                </label>

                <div className="toolbar-divider" />

                {/* GROUP 4: Alignment */}
                <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''} title="Align Left">
                    <AlignLeft size={iconSize} />
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''} title="Align Center">
                    <AlignCenter size={iconSize} />
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''} title="Align Right">
                    <AlignRight size={iconSize} />
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''} title="Justify">
                    <AlignJustify size={iconSize} />
                </button>

                <div className="toolbar-divider" />

                {/* GROUP 5: Lists & Indentation */}
                <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'is-active' : ''} title="Bullet List">
                    <List size={iconSize} />
                </button>
                <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'is-active' : ''} title="Ordered List">
                    <ListOrdered size={iconSize} />
                </button>
                <button onClick={handleIncreaseIndent} title="Increase Indent">
                    <IndentIncrease size={iconSize} />
                </button>
                <button onClick={handleDecreaseIndent} title="Decrease Indent">
                    <IndentDecrease size={iconSize} />
                </button>

                <div className="toolbar-divider" />

                {/* GROUP 6: Links, Quotes & Tables */}
                <button onClick={openLinkDialog} className={editor.isActive('link') ? 'is-active' : ''} title="Insert Link">
                    <LinkIcon size={iconSize} />
                </button>
                <button onClick={() => editor.chain().focus().unsetLink().run()} disabled={!editor.isActive('link')} style={{ opacity: !editor.isActive('link') ? 0.5 : 1 }} title="Remove Link">
                    <Unlink size={iconSize} />
                </button>
                <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive('blockquote') ? 'is-active' : ''} title="Blockquote">
                    <Quote size={iconSize} />
                </button>
                <button onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()} title="Insert Table">
                    <TableIcon size={iconSize} />
                </button>

                <div className="toolbar-divider" />

                {/* GROUP 7: Media */}
                <button onClick={handleAddMedia} title="Upload Media (Image/Video)">
                    <ImagePlus size={iconSize} />
                </button>
                <button onClick={openYoutubeDialog} title="Embed YouTube Video">
                    <YoutubeIcon size={iconSize} />
                </button>
                <button onClick={openIframeDialog} className={editor.isActive('iframe') ? 'is-active' : ''} title="Embed HTML / Resize Iframe">
                    <CodeXml size={iconSize} />
                </button>

            </div>

            {/* Editor Content Area */}
            <EditorContent editor={editor} className="divt-editor-content" />
        </div>
    );
};

export default DivtTextEditor;