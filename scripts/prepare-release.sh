#!/bin/bash

# Script to prepare a release for divt-text-editor
# Usage: ./scripts/prepare-release.sh [patch|minor|major]

set -e

VERSION_TYPE=${1:-patch}

echo "🚀 Preparing release..."

# Check if working directory is clean
if [[ -n $(git status -s) ]]; then
  echo "❌ Working directory is not clean. Please commit or stash changes first."
  exit 1
fi

# Update version
echo "📦 Updating version ($VERSION_TYPE)..."
npm version $VERSION_TYPE --no-git-tag-version

NEW_VERSION=$(node -p "require('./package.json').version")
echo "✅ New version: v$NEW_VERSION"

# Build the package
echo "🔨 Building package..."
npm run build

if [ ! -d "dist" ]; then
  echo "❌ Build failed - dist directory not found"
  exit 1
fi

echo "✅ Build successful"

# Commit changes
echo "📝 Committing changes..."
git add package.json package-lock.json
git commit -m "chore: bump version to v$NEW_VERSION"

# Create and push tag
echo "🏷️  Creating tag v$NEW_VERSION..."
git tag -a "v$NEW_VERSION" -m "Release v$NEW_VERSION"

echo ""
echo "✅ Release prepared successfully!"
echo ""
echo "Next steps:"
echo "1. Review the changes: git log -1"
echo "2. Push to GitHub: git push origin main --tags"
echo "3. The GitHub Action will automatically create a release"
echo ""
echo "Or to push now, run:"
echo "  git push origin main --tags"
