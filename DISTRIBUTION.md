# Distribution Guide

This document explains how to distribute the `divt-text-editor` package for Next.js projects.

## Current Setup

The package is configured for **GitHub-based distribution** with two approaches:

### Approach 1: Direct GitHub Installation (Simple)

**For this approach, you need to:**
1. Build the package: `npm run build`
2. Commit the `dist/` folder to the repository
3. Push to GitHub

**Users install with:**
```bash
npm install github:votuandi/divt-text-editor
```

**Pros:**
- Simple setup
- Users always get the latest code

**Cons:**
- Build artifacts in version control (not ideal)
- Larger repository size
- No version control for users

### Approach 2: GitHub Releases (Recommended)

**For this approach:**
1. Keep `dist/` in `.gitignore` (already set)
2. Use the automated release workflow (already configured)
3. Create releases with tags

**Users install with:**
```bash
# Latest release
npm install github:votuandi/divt-text-editor#v1.0.0

# Or from release branch
npm install github:votuandi/divt-text-editor#release/v1.0.0
```

**Pros:**
- Clean repository
- Proper versioning
- Users can install specific versions
- Professional approach

**Cons:**
- Requires creating releases
- Slightly more setup

## Recommended: Use Approach 2 (GitHub Releases)

### Quick Start

1. **Make your changes and commit them**

2. **Run the release script:**

   **On Windows (PowerShell):**
   ```powershell
   .\scripts\prepare-release.ps1 patch
   ```

   **On Mac/Linux:**
   ```bash
   chmod +x scripts/prepare-release.sh
   ./scripts/prepare-release.sh patch
   ```

   Replace `patch` with:
   - `patch` - for bug fixes (0.1.0 → 0.1.1)
   - `minor` - for new features (0.1.0 → 0.2.0)
   - `major` - for breaking changes (0.1.0 → 1.0.0)

3. **Push to GitHub:**
   ```bash
   git push origin main --tags
   ```

4. **GitHub Actions will automatically:**
   - Build the package
   - Create a GitHub release
   - Create a `release/v0.1.0` branch with built files

### Manual Release (Without Scripts)

```bash
# 1. Update version
npm version patch

# 2. Build
npm run build

# 3. Commit
git add package.json package-lock.json
git commit -m "chore: bump version to v0.1.1"

# 4. Tag
git tag -a v0.1.1 -m "Release v0.1.1"

# 5. Push
git push origin main --tags
```

## For Users: Installation Instructions

Add this to your project README:

```markdown
## Installation

Install from GitHub:

\`\`\`bash
npm install github:votuandi/divt-text-editor
\`\`\`

Or install a specific version:

\`\`\`bash
npm install github:votuandi/divt-text-editor#v1.0.0
\`\`\`
```

## Switching Between Approaches

### To Switch to Approach 1 (Commit dist/)

1. Remove `dist` from `.gitignore`:
   ```bash
   # Edit .gitignore and remove the 'dist' line
   ```

2. Build and commit:
   ```bash
   npm run build
   git add dist/
   git commit -m "chore: add dist folder for direct installation"
   git push origin main
   ```

### To Switch to Approach 2 (GitHub Releases)

1. Keep `dist` in `.gitignore` (already done)
2. Remove dist from repository if it exists:
   ```bash
   git rm -r dist/
   git commit -m "chore: remove dist folder from version control"
   git push origin main
   ```
3. Use the release workflow (already configured)

## Publishing to npm (Future Option)

If you want to publish to npm later:

1. **Login to npm:**
   ```bash
   npm login
   ```

2. **Publish:**
   ```bash
   npm publish
   ```

3. **Update installation instructions:**
   ```bash
   npm install divt-text-editor
   ```

## Current Configuration

✅ **Already configured:**
- `package.json` - Removed `"private": true`
- `.npmignore` - Excludes development files
- GitHub Actions workflow - Automated releases
- Release scripts - For easy version bumping
- Repository metadata - Keywords, license, etc.

## Testing Before Release

Before creating a release, test the package locally:

1. **Build the package:**
   ```bash
   npm run build
   ```

2. **Link locally:**
   ```bash
   npm link
   ```

3. **In your Next.js test project:**
   ```bash
   npm link divt-text-editor
   ```

4. **Test the integration**

5. **Unlink when done:**
   ```bash
   npm unlink divt-text-editor
   ```

## Troubleshooting

### Users can't install the package

**Check:**
- Repository is public
- Built files exist (for Approach 1) or release exists (for Approach 2)
- Tag format is correct (v1.0.0, not 1.0.0)

### Build fails in GitHub Actions

**Check:**
- `npm ci` works locally
- All dependencies are in `package.json`
- Build script is correct

### Users get "Module not found" errors

**Check:**
- `package.json` has correct `main`, `module`, and `exports` fields
- Built files are in the `dist/` folder
- Users imported the CSS: `import 'divt-text-editor/style.css'`

## Summary

**Recommended approach:** Use GitHub Releases (Approach 2)

**To create a release:**
```bash
.\scripts\prepare-release.ps1 patch
git push origin main --tags
```

**Users install with:**
```bash
npm install github:votuandi/divt-text-editor#v0.1.0
```
