import { Extension } from '@tiptap/core';

export default Extension.create({
    name: 'indent',
  
    addOptions() {
      return {
        types: ['heading', 'paragraph'], // Apply to paragraphs and headings
        indentSize: 24, // Indentation size in pixels per level
        minLevel: 0,
        maxLevel: 8, // Maximum allowed indentation levels
      };
    },

    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    indent: {
                        default: 0,
                        parseHTML: element => {
                            const paddingLeft = element.style.paddingLeft;
                            return paddingLeft ? parseInt(paddingLeft, 10) / this.options.indentSize : 0;
                        },
                        renderHTML: attributes => {
                            if (!attributes.indent) {
                                return {};
                            }
                            return {
                                style: `padding-left: ${attributes.indent * this.options.indentSize}px`,
                            };
                        },
                    },
                },
            },
        ];
    },

    addCommands() {
        return {
            indent: () => ({ tr, state, dispatch }) => {
                const { selection } = state;
                let transaction = tr;
                let hasChanged = false;

                state.doc.nodesBetween(selection.from, selection.to, (node, pos) => {
                    if (this.options.types.includes(node.type.name)) {
                        const currentLevel = node.attrs.indent || 0;
                        if (currentLevel < this.options.maxLevel) {
                            transaction = transaction.setNodeMarkup(pos, null, {
                                ...node.attrs,
                                indent: currentLevel + 1,
                            });
                            hasChanged = true;
                        }
                    }
                });

                if (dispatch && hasChanged) {
                    dispatch(transaction);
                }
                return hasChanged;
            },
            outdent: () => ({ tr, state, dispatch }) => {
                const { selection } = state;
                let transaction = tr;
                let hasChanged = false;

                state.doc.nodesBetween(selection.from, selection.to, (node, pos) => {
                    if (this.options.types.includes(node.type.name)) {
                        const currentLevel = node.attrs.indent || 0;
                        if (currentLevel > this.options.minLevel) {
                            transaction = transaction.setNodeMarkup(pos, null, {
                                ...node.attrs,
                                indent: currentLevel - 1,
                            });
                            hasChanged = true;
                        }
                    }
                });

                if (dispatch && hasChanged) {
                    dispatch(transaction);
                }
                return hasChanged;
            },
        };
    },

    // Add keyboard shortcuts for Tab and Shift+Tab
    addKeyboardShortcuts() {
        return {
            Tab: () => this.editor.commands.indent(),
            'Shift-Tab': () => this.editor.commands.outdent(),
        };
    },
});