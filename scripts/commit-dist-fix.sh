#!/bin/bash
# Script to commit the dist folder fix and create a new release

set -e  # Exit on error

echo "🔧 Committing dist folder fix..."
echo ""

# Stage all the changes
echo "📝 Staging changes..."
git add dist/
git add .gitignore
git add README.md
git add GITHUB_INSTALLATION.md
git add DIST_FOLDER_FIX.md
git add scripts/commit-dist-fix.sh
git add scripts/commit-dist-fix.ps1

echo ""
echo "📋 Files to be committed:"
git status --short

echo ""
read -p "Do you want to commit these changes? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Commit the changes
    echo "💾 Committing changes..."
    git commit -m "fix: include dist folder for GitHub installations

- Remove dist from .gitignore to fix GitHub package installations
- Add comprehensive troubleshooting section to README
- Create GITHUB_INSTALLATION.md with detailed explanation
- Document the fix in DIST_FOLDER_FIX.md

Fixes the 'Module not found' error when installing from GitHub.
The dist folder must be committed because npm doesn't run build
scripts for GitHub installations."

    echo ""
    echo "✅ Changes committed successfully!"
    echo ""
    
    # Ask about version bump
    echo "📦 Current version: $(node -p "require('./package.json').version")"
    echo ""
    echo "What type of version bump?"
    echo "  1) patch (0.1.2 -> 0.1.3) - Bug fixes"
    echo "  2) minor (0.1.2 -> 0.2.0) - New features"
    echo "  3) major (0.1.2 -> 1.0.0) - Breaking changes"
    echo "  4) Skip version bump"
    echo ""
    read -p "Enter choice (1-4): " version_choice
    
    case $version_choice in
        1)
            echo "🔢 Bumping patch version..."
            npm version patch
            ;;
        2)
            echo "🔢 Bumping minor version..."
            npm version minor
            ;;
        3)
            echo "🔢 Bumping major version..."
            npm version major
            ;;
        4)
            echo "⏭️  Skipping version bump"
            ;;
        *)
            echo "❌ Invalid choice, skipping version bump"
            ;;
    esac
    
    echo ""
    echo "🚀 Ready to push to GitHub!"
    echo ""
    read -p "Push to origin/main now? (y/n) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "📤 Pushing to GitHub..."
        git push origin main
        git push origin --tags
        echo ""
        echo "✅ Successfully pushed to GitHub!"
        echo ""
        echo "🎉 All done! Your package is now ready for GitHub installation."
        echo ""
        echo "📝 Test the installation with:"
        echo "   npm install github:votuandi/divt-text-editor#$(git describe --tags --abbrev=0 2>/dev/null || echo 'main')"
    else
        echo "⏸️  Push skipped. Run 'git push origin main && git push origin --tags' when ready."
    fi
else
    echo "❌ Commit cancelled"
    exit 1
fi
