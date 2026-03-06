import { useCallback as f, useState as z } from "react";
import { EditorContent as H, useEditor as S } from "@tiptap/react";
import { StarterKit as M } from "@tiptap/starter-kit";
import { Image as D } from "@tiptap/extension-image";
import { Youtube as E } from "@tiptap/extension-youtube";
import { Underline as O } from "@tiptap/extension-underline";
import { TextAlign as B } from "@tiptap/extension-text-align";
import { Table as U } from "@tiptap/extension-table";
import { TableRow as R } from "@tiptap/extension-table-row";
import { TableCell as V } from "@tiptap/extension-table-cell";
import { TableHeader as P } from "@tiptap/extension-table-header";
import { Color as Y } from "@tiptap/extension-color";
import { TextStyle as W } from "@tiptap/extension-text-style";
import { Highlight as $ } from "@tiptap/extension-highlight";
import { Link as j } from "@tiptap/extension-link";
import { Extension as q, Node as k, mergeAttributes as y } from "@tiptap/core";
import { jsx as t, jsxs as d } from "react/jsx-runtime";
import { AlignCenter as F, AlignJustify as J, AlignLeft as K, AlignRight as _, Bold as G, CodeXml as Q, Eraser as X, Highlighter as Z, ImagePlus as ee, IndentDecrease as te, IndentIncrease as ie, Italic as ne, Link as re, List as ae, ListOrdered as le, Quote as oe, Table as se, Type as ce, Underline as de, Unlink as ue, Youtube as he } from "lucide-react";
var me = k.create({
  name: "video",
  group: "block",
  selectable: !0,
  draggable: !0,
  atom: !0,
  addAttributes() {
    return {
      src: { default: null },
      controls: { default: !0 },
      width: { default: "100%" }
    };
  },
  parseHTML() {
    return [{ tag: "video" }];
  },
  renderHTML({ HTMLAttributes: i }) {
    return [
      "video",
      y(i),
      ["source", { src: i.src }]
    ];
  },
  addCommands() {
    return { setVideo: (i) => ({ commands: s }) => s.insertContent({
      type: this.name,
      attrs: i
    }) };
  }
}), fe = q.create({
  name: "indent",
  addOptions() {
    return {
      types: ["heading", "paragraph"],
      indentSize: 24,
      minLevel: 0,
      maxLevel: 8
    };
  },
  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: { indent: {
        default: 0,
        parseHTML: (i) => {
          const s = i.style.paddingLeft;
          return s ? parseInt(s, 10) / this.options.indentSize : 0;
        },
        renderHTML: (i) => i.indent ? { style: `padding-left: ${i.indent * this.options.indentSize}px` } : {}
      } }
    }];
  },
  addCommands() {
    return {
      indent: () => ({ tr: i, state: s, dispatch: h }) => {
        const { selection: u } = s;
        let l = i, o = !1;
        return s.doc.nodesBetween(u.from, u.to, (e, m) => {
          if (this.options.types.includes(e.type.name)) {
            const g = e.attrs.indent || 0;
            g < this.options.maxLevel && (l = l.setNodeMarkup(m, null, {
              ...e.attrs,
              indent: g + 1
            }), o = !0);
          }
        }), h && o && h(l), o;
      },
      outdent: () => ({ tr: i, state: s, dispatch: h }) => {
        const { selection: u } = s;
        let l = i, o = !1;
        return s.doc.nodesBetween(u.from, u.to, (e, m) => {
          if (this.options.types.includes(e.type.name)) {
            const g = e.attrs.indent || 0;
            g > this.options.minLevel && (l = l.setNodeMarkup(m, null, {
              ...e.attrs,
              indent: g - 1
            }), o = !0);
          }
        }), h && o && h(l), o;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.indent(),
      "Shift-Tab": () => this.editor.commands.outdent()
    };
  }
}), ge = k.create({
  name: "iframe",
  group: "block",
  atom: !0,
  selectable: !0,
  draggable: !0,
  addAttributes() {
    return {
      src: { default: null },
      width: { default: "100%" },
      height: { default: "400" },
      frameborder: { default: "0" },
      allowfullscreen: { default: "true" }
    };
  },
  parseHTML() {
    return [{ tag: "iframe" }];
  },
  renderHTML({ HTMLAttributes: i }) {
    return [
      "div",
      { class: "iframe-wrapper" },
      ["iframe", y(i)]
    ];
  },
  addCommands() {
    return { setIframe: (i) => ({ commands: s }) => s.insertContent({
      type: this.name,
      attrs: i
    }) };
  }
}), pe = ({ config: i, setConfig: s, onSubmit: h, onClose: u }) => {
  if (!i.isOpen) return null;
  const l = (o, e) => {
    s((m) => ({
      ...m,
      data: {
        ...m.data,
        [o]: e
      }
    }));
  };
  return t("div", {
    className: "divt-dialog-overlay",
    onClick: u,
    children: d("div", {
      className: "divt-dialog-content",
      onClick: (o) => o.stopPropagation(),
      children: [
        d("h3", {
          className: "divt-dialog-title",
          children: [
            i.type === "link" && "Insert/Edit Link",
            i.type === "youtube" && "Embed YouTube Video",
            i.type === "iframe" && "Embed HTML / Iframe"
          ]
        }),
        d("div", {
          className: "divt-dialog-body",
          children: [d("label", { children: [i.type === "iframe" ? "URL or Embed Code:" : "URL:", t("input", {
            type: "text",
            autoFocus: !0,
            placeholder: "https://...",
            value: i.data.url,
            onChange: (o) => l("url", o.target.value)
          })] }), i.type === "iframe" && d("div", {
            className: "divt-dialog-row",
            children: [d("label", { children: ["Width:", t("input", {
              type: "text",
              placeholder: "100% or 500px",
              value: i.data.width,
              onChange: (o) => l("width", o.target.value)
            })] }), d("label", { children: ["Height:", t("input", {
              type: "text",
              placeholder: "400",
              value: i.data.height,
              onChange: (o) => l("height", o.target.value)
            })] })]
          })]
        }),
        d("div", {
          className: "divt-dialog-footer",
          children: [t("button", {
            className: "btn-cancel",
            onClick: u,
            children: "Cancel"
          }), t("button", {
            className: "btn-submit",
            onClick: h,
            children: "Save"
          })]
        })
      ]
    })
  });
}, Oe = ({ content: i = "", onChange: s, uploadEndpoint: h }) => {
  const [u, l] = z({
    isOpen: !1,
    type: "",
    data: {
      url: "",
      width: "100%",
      height: "400"
    }
  }), o = async (n) => {
    if (!h)
      return console.warn("DivtTextEditor: uploadEndpoint prop is missing."), n.type.startsWith("video/") ? "/default-video.mp4" : "/default.webp";
    try {
      const a = new FormData();
      a.append("file", n);
      const c = await fetch(h, {
        method: "POST",
        body: a
      });
      if (!c.ok) throw new Error(`Upload failed: ${c.status}`);
      return (await c.json()).url;
    } catch (a) {
      return console.error("API upload failed:", a), n.type.startsWith("video/") ? "/default-video.mp4" : "/default.webp";
    }
  }, e = S({
    extensions: [
      M,
      O,
      B.configure({ types: ["heading", "paragraph"] }),
      U.configure({ resizable: !0 }),
      R,
      P,
      V,
      D,
      E.configure({ controls: !1 }),
      me,
      fe,
      ge,
      W,
      Y,
      $.configure({ multicolor: !0 }),
      j.configure({
        openOnClick: !1,
        autolink: !0
      })
    ],
    content: i,
    onUpdate: ({ editor: n }) => {
      s && s(n.getHTML());
    }
  }), m = f(() => {
    const n = document.createElement("input");
    n.type = "file", n.accept = "image/*,video/*", n.onchange = async (a) => {
      const c = a.target.files[0];
      if (c) {
        const p = c.type.startsWith("video/"), v = c.type.startsWith("image/");
        if (!p && !v) return alert("Invalid file type.");
        const b = await o(c);
        p ? e.chain().focus().setVideo({ src: b }).run() : v && e.chain().focus().setImage({ src: b }).run();
      }
    }, n.click();
  }, [e, h]), g = f(() => {
    e && (e.can().sinkListItem("listItem") ? e.chain().focus().sinkListItem("listItem").run() : e.chain().focus().indent().run());
  }, [e]), C = f(() => {
    e && (e.can().liftListItem("listItem") ? e.chain().focus().liftListItem("listItem").run() : e.chain().focus().outdent().run());
  }, [e]), A = f(() => {
    l({
      isOpen: !0,
      type: "link",
      data: {
        url: e.getAttributes("link").href || "",
        width: "",
        height: ""
      }
    });
  }, [e]), L = f(() => {
    l({
      isOpen: !0,
      type: "youtube",
      data: {
        url: "",
        width: "",
        height: ""
      }
    });
  }, []), I = f(() => {
    if (e.isActive("iframe")) {
      const { src: n, width: a, height: c } = e.getAttributes("iframe");
      l({
        isOpen: !0,
        type: "iframe",
        data: {
          url: n || "",
          width: a || "100%",
          height: c || "400"
        }
      });
    } else l({
      isOpen: !0,
      type: "iframe",
      data: {
        url: "",
        width: "100%",
        height: "400"
      }
    });
  }, [e]), N = f(() => {
    const { type: n, data: a } = u;
    if (e.commands.focus(), n === "link") a.url === "" ? e.chain().focus().extendMarkRange("link").unsetLink().run() : e.chain().focus().extendMarkRange("link").setLink({ href: a.url }).run();
    else if (n === "youtube")
      a.url && e.commands.setYoutubeVideo({ src: a.url });
    else if (n === "iframe") {
      let c = a.url, p = a.width || "100%", v = a.height || "400";
      if (a.url.includes("<iframe")) {
        const b = new DOMParser().parseFromString(a.url, "text/html").querySelector("iframe");
        b && (c = b.getAttribute("src") || "", p = b.getAttribute("width") || p, v = b.getAttribute("height") || v);
      }
      c && (e.isActive("iframe") ? e.chain().focus().updateAttributes("iframe", {
        width: p,
        height: v
      }).run() : e.chain().focus().setIframe({
        src: c,
        width: p,
        height: v
      }).run());
    }
    l({
      isOpen: !1,
      type: "",
      data: {
        url: "",
        width: "",
        height: ""
      }
    });
  }, [e, u]), w = f(() => {
    l({
      isOpen: !1,
      type: "",
      data: {
        url: "",
        width: "",
        height: ""
      }
    });
  }, []);
  if (!e) return null;
  const T = (n) => {
    const a = n.target.value;
    a === "paragraph" ? e.chain().focus().setParagraph().run() : e.chain().focus().toggleHeading({ level: parseInt(a, 10) }).run();
  }, x = () => {
    for (let n = 1; n <= 6; n++) if (e.isActive("heading", { level: n })) return n.toString();
    return "paragraph";
  }, r = 16;
  return d("div", {
    className: "divt-editor-container",
    children: [
      t(pe, {
        config: u,
        setConfig: l,
        onSubmit: N,
        onClose: w
      }),
      d("div", {
        className: "divt-editor-toolbar",
        children: [
          d("select", {
            className: "toolbar-select",
            value: x(),
            onChange: T,
            children: [
              t("option", {
                value: "paragraph",
                children: "Paragraph"
              }),
              t("option", {
                value: "1",
                children: "Heading 1"
              }),
              t("option", {
                value: "2",
                children: "Heading 2"
              }),
              t("option", {
                value: "3",
                children: "Heading 3"
              }),
              t("option", {
                value: "4",
                children: "Heading 4"
              }),
              t("option", {
                value: "5",
                children: "Heading 5"
              }),
              t("option", {
                value: "6",
                children: "Heading 6"
              })
            ]
          }),
          t("div", { className: "toolbar-divider" }),
          t("button", {
            onClick: () => e.chain().focus().toggleBold().run(),
            className: e.isActive("bold") ? "is-active" : "",
            title: "Bold",
            children: t(G, { size: r })
          }),
          t("button", {
            onClick: () => e.chain().focus().toggleItalic().run(),
            className: e.isActive("italic") ? "is-active" : "",
            title: "Italic",
            children: t(ne, { size: r })
          }),
          t("button", {
            onClick: () => e.chain().focus().toggleUnderline().run(),
            className: e.isActive("underline") ? "is-active" : "",
            title: "Underline",
            children: t(de, { size: r })
          }),
          t("button", {
            onClick: () => e.chain().focus().unsetAllMarks().clearNodes().run(),
            title: "Clear Formatting",
            children: t(X, { size: r })
          }),
          t("div", { className: "toolbar-divider" }),
          d("label", {
            className: "custom-color-picker",
            title: "Text Color",
            children: [t(ce, {
              size: r,
              color: e.getAttributes("textStyle").color || "currentColor"
            }), t("input", {
              type: "color",
              className: "color-picker-input",
              onInput: (n) => e.chain().focus().setColor(n.target.value).run(),
              value: e.getAttributes("textStyle").color || "#000000"
            })]
          }),
          d("label", {
            className: "custom-color-picker",
            title: "Highlight Color",
            children: [t(Z, {
              size: r,
              color: e.isActive("highlight") ? e.getAttributes("highlight").color : "currentColor"
            }), t("input", {
              type: "color",
              className: "color-picker-input",
              onInput: (n) => e.chain().focus().setHighlight({ color: n.target.value }).run(),
              value: e.isActive("highlight") ? e.getAttributes("highlight").color : "#ffffff"
            })]
          }),
          t("div", { className: "toolbar-divider" }),
          t("button", {
            onClick: () => e.chain().focus().setTextAlign("left").run(),
            className: e.isActive({ textAlign: "left" }) ? "is-active" : "",
            title: "Align Left",
            children: t(K, { size: r })
          }),
          t("button", {
            onClick: () => e.chain().focus().setTextAlign("center").run(),
            className: e.isActive({ textAlign: "center" }) ? "is-active" : "",
            title: "Align Center",
            children: t(F, { size: r })
          }),
          t("button", {
            onClick: () => e.chain().focus().setTextAlign("right").run(),
            className: e.isActive({ textAlign: "right" }) ? "is-active" : "",
            title: "Align Right",
            children: t(_, { size: r })
          }),
          t("button", {
            onClick: () => e.chain().focus().setTextAlign("justify").run(),
            className: e.isActive({ textAlign: "justify" }) ? "is-active" : "",
            title: "Justify",
            children: t(J, { size: r })
          }),
          t("div", { className: "toolbar-divider" }),
          t("button", {
            onClick: () => e.chain().focus().toggleBulletList().run(),
            className: e.isActive("bulletList") ? "is-active" : "",
            title: "Bullet List",
            children: t(ae, { size: r })
          }),
          t("button", {
            onClick: () => e.chain().focus().toggleOrderedList().run(),
            className: e.isActive("orderedList") ? "is-active" : "",
            title: "Ordered List",
            children: t(le, { size: r })
          }),
          t("button", {
            onClick: g,
            title: "Increase Indent",
            children: t(ie, { size: r })
          }),
          t("button", {
            onClick: C,
            title: "Decrease Indent",
            children: t(te, { size: r })
          }),
          t("div", { className: "toolbar-divider" }),
          t("button", {
            onClick: A,
            className: e.isActive("link") ? "is-active" : "",
            title: "Insert Link",
            children: t(re, { size: r })
          }),
          t("button", {
            onClick: () => e.chain().focus().unsetLink().run(),
            disabled: !e.isActive("link"),
            style: { opacity: e.isActive("link") ? 1 : 0.5 },
            title: "Remove Link",
            children: t(ue, { size: r })
          }),
          t("button", {
            onClick: () => e.chain().focus().toggleBlockquote().run(),
            className: e.isActive("blockquote") ? "is-active" : "",
            title: "Blockquote",
            children: t(oe, { size: r })
          }),
          t("button", {
            onClick: () => e.chain().focus().insertTable({
              rows: 3,
              cols: 3,
              withHeaderRow: !0
            }).run(),
            title: "Insert Table",
            children: t(se, { size: r })
          }),
          t("div", { className: "toolbar-divider" }),
          t("button", {
            onClick: m,
            title: "Upload Media (Image/Video)",
            children: t(ee, { size: r })
          }),
          t("button", {
            onClick: L,
            title: "Embed YouTube Video",
            children: t(he, { size: r })
          }),
          t("button", {
            onClick: I,
            className: e.isActive("iframe") ? "is-active" : "",
            title: "Embed HTML / Resize Iframe",
            children: t(Q, { size: r })
          })
        ]
      }),
      t(H, {
        editor: e,
        className: "divt-editor-content"
      })
    ]
  });
};
export {
  Oe as DivtTextEditor
};

//# sourceMappingURL=divt-text-editor.es.js.map