# GitHub Package Installation Guide

## The Problem

When installing npm packages directly from GitHub (e.g., `npm install github:votuandi/divt-text-editor#v0.1.2`), you may encounter a "Module not found" error. This happens because:

1. **GitHub repositories contain source code, not built artifacts**
   - The repository has source files in `src/`
   - The `package.json` points to files in the `dist/` folder
   - The `dist/` folder is typically git-ignored in most projects

2. **npm doesn't run build scripts for GitHub installations**
   - Unlike npm registry packages (which are pre-built before publishing)
   - GitHub installations clone the raw repository
   - No build process runs automatically

3. **Result**: The `dist/` folder doesn't exist, causing import failures

## The Solution

### Option 1: Commit the dist folder (Recommended for this project)

This is the **permanent fix** that benefits all users:

1. **Remove `dist` from `.gitignore`**
   ```diff
   node_modules
   - dist
   dist-ssr
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Commit the dist folder**
   ```bash
   git add dist/
   git commit -m "Include dist folder for GitHub installations"
   git push
   ```

4. **Create a new release/tag**
   ```bash
   git tag v0.1.3
   git push origin v0.1.3
   ```

**Pros:**
- ✅ Works immediately for all users
- ✅ No extra setup required by consumers
- ✅ Faster installation (no build step needed)

**Cons:**
- ❌ Larger repository size
- ❌ Git diffs include built files
- ❌ Need to rebuild and commit after every change

### Option 2: Manual build after installation

If you prefer to keep `dist` git-ignored, users must build manually:

```bash
# After npm install
cd node_modules/divt-text-editor
npm install
npm run build
cd ../..
```

**Pros:**
- ✅ Cleaner git history
- ✅ Smaller repository size

**Cons:**
- ❌ Extra manual steps for every user
- ❌ Must repeat after every `npm install`
- ❌ Easy to forget

### Option 3: Postinstall script (Automated build)

Add a `postinstall` script to the **consumer project's** `package.json`:

```json
{
  "scripts": {
    "postinstall": "cd node_modules/divt-text-editor && npm install && npm run build || true"
  }
}
```

**Pros:**
- ✅ Automatic build after installation
- ✅ Cleaner git history for the package

**Cons:**
- ❌ Slower installation process
- ❌ Requires setup in every consumer project
- ❌ May fail in CI/CD environments with read-only node_modules
- ❌ Can cause issues with package managers like pnpm/yarn

### Option 4: Publish to npm registry

The most professional solution:

```bash
npm publish
```

Then users install via:
```bash
npm install divt-text-editor
```

**Pros:**
- ✅ Standard npm workflow
- ✅ Pre-built packages
- ✅ Version management
- ✅ Better discoverability

**Cons:**
- ❌ Requires npm account
- ❌ Package name must be available
- ❌ Public packages are... public

## Recommendation

For this project, **Option 1** (committing the dist folder) is recommended because:

1. This is a library meant to be consumed by others
2. The dist folder is relatively small
3. It provides the best user experience
4. It's the most reliable solution

## Implementation Checklist

- [x] Remove `dist` from `.gitignore`
- [x] Add explanatory comment in `.gitignore`
- [x] Build the project (`npm run build`)
- [ ] Commit the dist folder
- [ ] Create a new version tag
- [ ] Update README with troubleshooting section
- [ ] Test installation from GitHub

## Testing the Fix

After implementing Option 1, test the installation:

```bash
# In a test project
npm install github:votuandi/divt-text-editor#v0.1.3

# Try importing
import { DivtTextEditor } from 'divt-text-editor';
```

It should work without any additional build steps!

## Additional Resources

- [npm package.json documentation](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)
- [GitHub package installation](https://docs.npmjs.com/cli/v10/commands/npm-install#description)
- [Publishing to npm](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
