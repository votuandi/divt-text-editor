import { FC } from 'react';

export interface DivtTextEditorProps {
  /**
   * Initial HTML content for the editor
   */
  content?: string;
  
  /**
   * Callback function that receives updated HTML content
   */
  onChange?: (html: string) => void;
  
  /**
   * API endpoint for uploading images and videos
   * The endpoint should accept a POST request with FormData containing a 'file' field
   * and return JSON with a 'url' field containing the uploaded file URL
   */
  uploadEndpoint?: string;
}

/**
 * A professional, high-performance Rich Text Editor built with React and Tiptap
 * 
 * @example
 * ```tsx
 * import { DivtTextEditor } from 'divt-text-editor';
 * import 'divt-text-editor/style.css';
 * 
 * function MyEditor() {
 *   const [content, setContent] = useState('<p>Hello World!</p>');
 *   
 *   return (
 *     <DivtTextEditor 
 *       content={content}
 *       onChange={setContent}
 *       uploadEndpoint="/api/upload"
 *     />
 *   );
 * }
 * ```
 */
export const DivtTextEditor: FC<DivtTextEditorProps>;
