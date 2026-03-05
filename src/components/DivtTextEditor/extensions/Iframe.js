// src/components/DivtTextEditor/extensions/Iframe.js
import { Node, mergeAttributes } from '@tiptap/core';

export default Node.create({
    name: 'iframe',

    group: 'block',
    atom: true, // Treats the iframe as a single block that can be selected/deleted
    selectable: true,
    draggable: true,

    addAttributes() {
        return {
            src: {
                default: null,
            },
            width: {
                default: '100%',
            },
            height: {
                default: '400',
            },
            frameborder: {
                default: '0',
            },
            allowfullscreen: {
                default: 'true',
            },
        };
    },

    parseHTML() {
        return [
            {
                tag: 'iframe',
            },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        return ['div', { class: 'iframe-wrapper' }, ['iframe', mergeAttributes(HTMLAttributes)]];
    },

    addCommands() {
        return {
            setIframe:
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