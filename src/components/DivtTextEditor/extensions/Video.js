// src/components/DivtTextEditor/extensions/Video.js
import { Node, mergeAttributes } from '@tiptap/core';

const Video = Node.create({
  name: 'video', // The name of the node

  group: 'block', // Renders as a block-level element
  selectable: true,
  draggable: true,
  atom: true, // Treats the video as a single indivisible unit

  addAttributes() {
    return {
      src: {
        default: null,
      },
      controls: {
        default: true, // Enable play/pause controls by default
      },
      width: {
        default: '100%',
      },
    };
  },

  // Parse HTML when pasting content containing <video> tags
  parseHTML() {
    return [
      {
        tag: 'video',
      },
    ];
  },

  // Render the <video> tag in the editor and in the final HTML output
  renderHTML({ HTMLAttributes }) {
    return [
      'video', 
      mergeAttributes(HTMLAttributes), 
      // Add a fallback <source> tag inside the video
      ['source', { src: HTMLAttributes.src }]
    ];
  },

  addCommands() {
    return {
      setVideo:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },
});

export default Video;