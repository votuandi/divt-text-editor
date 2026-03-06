# GitHub Actions Setup Guide

This guide walks you through setting up and using the GitHub Action for automated releases.

## 📋 Prerequisites

- GitHub repository for your project
- Repository must be **public** (or have GitHub Actions enabled for private repos)
- Push access to the repository

## ✅ What's Already Configured

The GitHub Action workflow is already created at:
```
.github/workflows/release.yml
```

This workflow will automatically:
1. ✅ Trigger when you push a version tag (e.g., `v1.0.0`)
2. ✅ Install dependencies
3. ✅ Build the package
4. ✅ Create a GitHub Release with release notes
5. ✅ Create a release branch with built files

## 🚀 Step-by-Step Setup

### Step 1: Commit and Push the Workflow File

First, make sure the workflow file is committed to your repository:

```bash
# Check if the file exists
ls .github/workflows/release.yml

# Add all the new files
git add .github/workflows/release.yml
git add package.json
git add .npmignore
git add scripts/
git add *.md

# Commit
git commit -m "chore: setup GitHub Actions for automated releases"

# Push to GitHub
git push origin main
```

### Step 2: Verify GitHub Actions is Enabled

1. Go to your GitHub repository
2. Click on the **"Actions"** tab
3. You should see "Release Package" workflow listed

If you see a message saying "Workflows aren't being run on this repository", click **"I understand my workflows, go ahead and enable them"**

### Step 3: Create Your First Release

Now you're ready to create your first release!

#### Option A: Using the PowerShell Script (Windows)

```powershell
# Navigate to your project directory
cd d:\Workspace\Projects\divt-text-editor

# Run the release script (creates v0.1.0)
.\scripts\prepare-release.ps1 minor

# Push to GitHub with tags
git push origin main --tags
```

#### Option B: Using the Bash Script (Mac/Linux)

```bash
# Navigate to your project directory
cd /path/to/divt-text-editor

# Make script executable
chmod +x scripts/prepare-release.sh

# Run the release script
./scripts/prepare-release.sh minor

# Push to GitHub with tags
git push origin main --tags
```

#### Option C: Manual Process

```bash
# 1. Update version in package.json
npm version minor  # This creates v0.1.0 (or increments existing version)

# 2. Build the package
npm run build

# 3. Commit the version change
git add package.json package-lock.json
git commit -m "chore: bump version to v0.1.0"

# 4. Create a git tag
git tag -a v0.1.0 -m "Release v0.1.0"

# 5. Push to GitHub with tags
git push origin main --tags
```

### Step 4: Watch the Action Run

1. Go to your GitHub repository
2. Click on the **"Actions"** tab
3. You should see a new workflow run for "Release Package"
4. Click on it to see the progress

The workflow will:
- ✅ Checkout your code
- ✅ Setup Node.js
- ✅ Install dependencies with `npm ci`
- ✅ Build the package with `npm run build`
- ✅ Create a GitHub Release
- ✅ Create a `release/v0.1.0` branch with built files

### Step 5: Verify the Release

1. Go to your GitHub repository
2. Click on **"Releases"** (on the right sidebar)
3. You should see your new release (e.g., "v0.1.0")
4. The release will include:
   - Auto-generated release notes
   - Built files from the `dist/` folder

## 📊 Understanding the Workflow

### Trigger Condition

```yaml
on:
  push:
    tags:
      - 'v*.*.*'  # Matches v1.0.0, v0.1.0, v2.3.4, etc.
```

The workflow **only runs** when you push a tag that matches the pattern `v*.*.*`

### Key Steps Explained

1. **Checkout code** - Gets your repository code
2. **Setup Node.js** - Installs Node.js 18 with npm caching
3. **Install dependencies** - Runs `npm ci` (clean install)
4. **Build package** - Runs `npm run build` to create the `dist/` folder
5. **Create Release** - Creates a GitHub Release with:
   - The tag name as the release name
   - Auto-generated release notes
   - Built files attached
6. **Commit to release branch** - Creates a branch like `release/v0.1.0` with built files

## 🔧 Customizing the Workflow

### Change Node.js Version

Edit `.github/workflows/release.yml`:

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'  # Change to your preferred version
    cache: 'npm'
```

### Add Tests Before Release

Add a test step before building:

```yaml
- name: Run tests
  run: npm test

- name: Build package
  run: npm run build
```

### Customize Release Notes

Modify the release step:

```yaml
- name: Create Release
  uses: softprops/action-gh-release@v1
  with:
    files: |
      dist/**/*
    generate_release_notes: true
    body: |
      ## What's Changed
      See the full changelog for details.
    draft: false
    prerelease: false
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## 🐛 Troubleshooting

### Issue: "Workflow not found"

**Solution:** Make sure the workflow file is committed and pushed to GitHub:
```bash
git add .github/workflows/release.yml
git commit -m "Add release workflow"
git push origin main
```

### Issue: "npm ci failed"

**Possible causes:**
- `package-lock.json` is out of sync
- Missing dependencies in `package.json`

**Solution:**
```bash
# Regenerate package-lock.json
rm package-lock.json
npm install
git add package-lock.json
git commit -m "Update package-lock.json"
git push origin main
```

### Issue: "Build failed"

**Solution:** Test the build locally first:
```bash
npm run build
```

Fix any build errors before creating a release.

### Issue: "Permission denied" when pushing release branch

**Solution:** Make sure GitHub Actions has write permissions:
1. Go to your repository settings
2. Click **"Actions"** → **"General"**
3. Under "Workflow permissions", select **"Read and write permissions"**
4. Click **"Save"**

### Issue: "Tag already exists"

**Solution:** Delete the tag and recreate:
```bash
# Delete local tag
git tag -d v0.1.0

# Delete remote tag
git push origin :refs/tags/v0.1.0

# Create new tag
git tag -a v0.1.0 -m "Release v0.1.0"
git push origin v0.1.0
```

### Issue: Workflow runs but no release is created

**Check:**
1. Go to Actions tab and check for errors
2. Verify the tag format matches `v*.*.*` (must start with 'v')
3. Check if GitHub Actions has the necessary permissions

## 📝 Version Naming Convention

Use semantic versioning with a 'v' prefix:

- ✅ `v1.0.0` - Major release
- ✅ `v0.1.0` - Minor release
- ✅ `v0.0.1` - Patch release
- ❌ `1.0.0` - Missing 'v' prefix (won't trigger workflow)
- ❌ `v1.0` - Incomplete version (won't trigger workflow)

## 🎯 Quick Reference Commands

### Create a new patch release (0.1.0 → 0.1.1)
```bash
.\scripts\prepare-release.ps1 patch
git push origin main --tags
```

### Create a new minor release (0.1.0 → 0.2.0)
```bash
.\scripts\prepare-release.ps1 minor
git push origin main --tags
```

### Create a new major release (0.1.0 → 1.0.0)
```bash
.\scripts\prepare-release.ps1 major
git push origin main --tags
```

### View all tags
```bash
git tag -l
```

### Delete a tag (if you made a mistake)
```bash
# Local
git tag -d v0.1.0

# Remote
git push origin :refs/tags/v0.1.0
```

## 🔐 Security Notes

- The workflow uses `GITHUB_TOKEN` which is automatically provided by GitHub
- No additional secrets or tokens need to be configured
- The token has limited permissions scoped to your repository

## ✅ Checklist

Before creating your first release:

- [ ] Workflow file is committed and pushed
- [ ] GitHub Actions is enabled in repository settings
- [ ] Repository has write permissions for GitHub Actions
- [ ] `npm run build` works locally without errors
- [ ] All changes are committed
- [ ] You're ready to create a version tag

## 🎉 Success!

Once the workflow completes successfully:

1. ✅ A new release appears on your GitHub Releases page
2. ✅ A `release/v0.1.0` branch is created with built files
3. ✅ Users can install with: `npm install github:votuandi/divt-text-editor#v0.1.0`

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Semantic Versioning](https://semver.org/)
- [npm version command](https://docs.npmjs.com/cli/v8/commands/npm-version)

## 🆘 Need Help?

If you encounter issues:
1. Check the Actions tab for detailed error logs
2. Review the troubleshooting section above
3. Verify all prerequisites are met
4. Test the build locally first
