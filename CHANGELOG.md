# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.4] - 2026-03-06

### Added
- Next.js 15 compatibility with Rolldown bundler support
- Comprehensive Next.js 15 compatibility guide (`NEXTJS15_COMPATIBILITY.md`)
- Support for React 19 in peer dependencies
- Source maps for better debugging
- `sideEffects` declaration in package.json for better tree-shaking
- Multiple CSS export paths for flexibility

### Changed
- **BREAKING**: All dependencies (Tiptap, Lucide React) are now externalized
  - Reduces bundle size from ~580KB to ~18KB (ES module)
  - Peer projects must have these dependencies installed
- Updated peer dependencies to support React 18 and 19
- Changed minification from terser to esbuild (faster builds)
- Improved ESM/CommonJS interoperability
- Updated CSS filename to `divt-text-editor.css` (was `style.css`)
- Enhanced package.json exports with multiple paths

### Fixed
- Module resolution issues with Next.js 15's Rolldown bundler
- CommonJS/ESM compatibility issues
- Peer dependency handling in modern bundlers
- CSS import path flexibility

### Documentation
- Added Next.js 15 specific troubleshooting section to README
- Created comprehensive Next.js 15 compatibility guide
- Added performance optimization tips
- Included migration guide from previous versions

## [0.1.3] - 2026-03-06

### Added
- Committed `dist` folder to repository for GitHub installations
- Comprehensive documentation:
  - `GITHUB_INSTALLATION.md` - Guide for GitHub package installation
  - `DIST_FOLDER_FIX.md` - Explanation of dist folder solution
  - `ARCHITECTURE.md` - Project architecture overview
  - `SOLUTION_SUMMARY.md` - Summary of solutions implemented

### Changed
- Removed `dist` from `.gitignore` to support direct GitHub installations
- Updated README with troubleshooting section

### Fixed
- "Module not found" error when installing from GitHub
- Missing dist folder issue for GitHub installations

## [0.1.2] - 2026-03-06

### Changed
- Minor version bump
- Updated documentation

## [0.1.1] - 2026-03-06

### Changed
- Initial release preparation
- Package configuration improvements

## [0.1.0] - 2026-03-06

### Added
- Initial release of Divt Text Editor
- Rich text editing with Tiptap
- Typography controls (headings, font size, bold, italic, underline)
- Color controls (text color, highlight)
- Layout controls (alignment, indentation)
- Lists (ordered, unordered)
- Media support (images, videos, YouTube embeds)
- Table management
- Custom dialogs for better UX
- Next.js integration examples
- Storybook documentation

### Features
- Built with React 18
- Powered by Tiptap editor
- Lucide React icons
- Professional toolbar interface
- Custom upload endpoint support
- TypeScript type definitions

---

## Version Numbering

- **Major** (X.0.0): Breaking changes, major rewrites
- **Minor** (0.X.0): New features, non-breaking changes
- **Patch** (0.0.X): Bug fixes, documentation updates

## Upgrade Guide

### From 0.1.3 to 0.1.4

**Important**: Version 0.1.4 externalizes all dependencies. Your project must have these installed:

```bash
npm install react react-dom @tiptap/react @tiptap/starter-kit @tiptap/extension-image @tiptap/extension-youtube @tiptap/extension-underline @tiptap/extension-text-align @tiptap/extension-table @tiptap/extension-table-row @tiptap/extension-table-cell @tiptap/extension-table-header @tiptap/extension-color @tiptap/extension-text-style @tiptap/extension-highlight @tiptap/extension-link lucide-react
```

Or install the editor which will pull in dependencies:

```bash
npm install github:votuandi/divt-text-editor#v0.1.4
```

**Next.js 15 users**: Add to your `next.config.js`:

```javascript
module.exports = {
  transpilePackages: ['divt-text-editor'],
};
```

**CSS Import**: Both paths work:
```javascript
import 'divt-text-editor/style.css';        // Still works
import 'divt-text-editor/dist/style.css';   // Also works
```

### From 0.1.2 to 0.1.3

No breaking changes. The dist folder is now committed to the repository, making GitHub installations work out of the box.

### From 0.1.0-0.1.1 to 0.1.2+

No breaking changes. Documentation improvements only.

## Support

For issues, questions, or contributions:
- GitHub Issues: https://github.com/votuandi/divt-text-editor/issues
- Documentation: See README.md and related guides

---

**Note**: This project is under active development. APIs may change before v1.0.0.
