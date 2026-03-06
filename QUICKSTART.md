# 🚀 Quick Start Guide

Get your package released in 5 minutes!

## Step 1: Push the Workflow to GitHub

```bash
# Add all the setup files
git add .

# Commit
git commit -m "chore: setup automated releases"

# Push to GitHub
git push origin main
```

## Step 2: Enable GitHub Actions

1. Go to your GitHub repository
2. Click the **"Actions"** tab
3. If prompted, click **"I understand my workflows, go ahead and enable them"**
4. Enable **"Read and write permissions"** in Settings → Actions → General → Workflow permissions

## Step 3: Create Your First Release

**On Windows (PowerShell):**
```powershell
.\scripts\prepare-release.ps1 minor
git push origin main --tags
```

**On Mac/Linux:**
```bash
chmod +x scripts/prepare-release.sh
./scripts/prepare-release.sh minor
git push origin main --tags
```

## Step 4: Watch It Work! 🎉

1. Go to **Actions** tab on GitHub
2. Watch the "Release Package" workflow run
3. Go to **Releases** to see your new release

## Step 5: Test Installation

In any Next.js project:

```bash
npm install github:votuandi/divt-text-editor#v0.1.0
```

---

## 📖 What Each Command Does

### Version Types

```bash
# Patch: 0.1.0 → 0.1.1 (bug fixes)
.\scripts\prepare-release.ps1 patch

# Minor: 0.1.0 → 0.2.0 (new features)
.\scripts\prepare-release.ps1 minor

# Major: 0.1.0 → 1.0.0 (breaking changes)
.\scripts\prepare-release.ps1 major
```

### The Workflow Does:

1. ✅ Installs dependencies
2. ✅ Builds your package
3. ✅ Creates a GitHub Release
4. ✅ Creates a release branch with built files
5. ✅ Generates release notes automatically

---

## 🎯 Common Tasks

### Create a bug fix release
```bash
.\scripts\prepare-release.ps1 patch
git push origin main --tags
```

### Create a feature release
```bash
.\scripts\prepare-release.ps1 minor
git push origin main --tags
```

### View all releases
```bash
git tag -l
```

### Delete a release (if mistake)
```bash
git tag -d v0.1.0
git push origin :refs/tags/v0.1.0
```

---

## 🐛 Troubleshooting

### Build fails locally?
```bash
npm run build
# Fix any errors before releasing
```

### Workflow not running?
- Check if tag format is correct: `v1.0.0` (must start with 'v')
- Verify GitHub Actions is enabled
- Check workflow permissions (Settings → Actions → General)

### Can't push tags?
```bash
# Make sure you have push access
git remote -v
```

---

## 📚 Full Documentation

- **GITHUB_ACTIONS_SETUP.md** - Complete setup guide
- **RELEASE.md** - Release process details
- **DISTRIBUTION.md** - Distribution strategies
- **README.md** - User documentation

---

## ✅ You're Done!

Your package is now set up for automated releases. Every time you:

1. Run the release script
2. Push with tags

GitHub Actions will automatically build and publish your release! 🎉

**Next release:**
```bash
.\scripts\prepare-release.ps1 patch
git push origin main --tags
```
