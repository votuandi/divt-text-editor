# Release Guide

This document explains how to create releases for the divt-text-editor package.

## Two Distribution Options

### Option 1: Install from GitHub (Current Setup)

Users can install directly from GitHub:

```bash
npm install github:votuandi/divt-text-editor
```

**Note:** This requires the `dist/` folder to be committed to the repository.

### Option 2: Install from GitHub Releases (Recommended)

Users can install from specific release tags:

```bash
npm install github:votuandi/divt-text-editor#v1.0.0
```

## Creating a Release

### Manual Release Process

1. **Update version in package.json:**
   ```bash
   npm version patch  # for bug fixes (0.1.0 -> 0.1.1)
   npm version minor  # for new features (0.1.0 -> 0.2.0)
   npm version major  # for breaking changes (0.1.0 -> 1.0.0)
   ```

2. **Build the package:**
   ```bash
   npm run build
   ```

3. **Commit the dist folder (if using Option 1):**
   ```bash
   git add dist/
   git commit -m "Build for release v0.1.0"
   ```

4. **Push the tag:**
   ```bash
   git push origin main --tags
   ```

5. **Create GitHub Release:**
   - Go to your GitHub repository
   - Click "Releases" → "Create a new release"
   - Select the tag you just pushed
   - Add release notes
   - Publish release

### Automated Release (GitHub Actions)

The repository includes a GitHub Actions workflow that automatically:
- Builds the package when you push a version tag
- Creates a GitHub release
- Commits built files to a release branch

**To trigger automated release:**

```bash
# Update version
npm version patch

# Push with tags
git push origin main --tags
```

The GitHub Action will automatically:
1. Build the package
2. Create a release with built files
3. Create a `release/v0.1.0` branch with the dist folder

## For Next.js Projects

### Installation Instructions for Users

**Install latest from main branch:**
```bash
npm install github:votuandi/divt-text-editor
```

**Install specific version:**
```bash
npm install github:votuandi/divt-text-editor#v1.0.0
```

**Install from release branch:**
```bash
npm install github:votuandi/divt-text-editor#release/v1.0.0
```

### Usage in Next.js

See the main README.md for complete usage instructions.

## Publishing to npm (Future)

If you decide to publish to npm later:

1. **Create npm account** and login:
   ```bash
   npm login
   ```

2. **Publish:**
   ```bash
   npm publish
   ```

3. **Users can then install via:**
   ```bash
   npm install divt-text-editor
   ```

## Versioning Guidelines

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): New features, backward compatible
- **PATCH** (0.0.1): Bug fixes, backward compatible

## Checklist Before Release

- [ ] All tests pass
- [ ] Update CHANGELOG.md (if exists)
- [ ] Update version in package.json
- [ ] Build succeeds without errors
- [ ] Test in a Next.js project
- [ ] Update documentation if needed
- [ ] Create git tag
- [ ] Push to GitHub
- [ ] Create GitHub release with notes
