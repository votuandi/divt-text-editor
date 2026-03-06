# PowerShell script to commit the dist folder fix and create a new release

$ErrorActionPreference = "Stop"

Write-Host "🔧 Committing dist folder fix..." -ForegroundColor Cyan
Write-Host ""

# Stage all the changes
Write-Host "📝 Staging changes..." -ForegroundColor Yellow
git add dist/
git add .gitignore
git add README.md
git add GITHUB_INSTALLATION.md
git add DIST_FOLDER_FIX.md
git add scripts/commit-dist-fix.sh
git add scripts/commit-dist-fix.ps1

Write-Host ""
Write-Host "📋 Files to be committed:" -ForegroundColor Yellow
git status --short

Write-Host ""
$commit = Read-Host "Do you want to commit these changes? (y/n)"

if ($commit -eq "y" -or $commit -eq "Y") {
    # Commit the changes
    Write-Host ""
    Write-Host "💾 Committing changes..." -ForegroundColor Green
    
    $commitMessage = @"
fix: include dist folder for GitHub installations

- Remove dist from .gitignore to fix GitHub package installations
- Add comprehensive troubleshooting section to README
- Create GITHUB_INSTALLATION.md with detailed explanation
- Document the fix in DIST_FOLDER_FIX.md

Fixes the 'Module not found' error when installing from GitHub.
The dist folder must be committed because npm doesn't run build
scripts for GitHub installations.
"@
    
    git commit -m $commitMessage

    Write-Host ""
    Write-Host "✅ Changes committed successfully!" -ForegroundColor Green
    Write-Host ""
    
    # Get current version
    $packageJson = Get-Content "package.json" | ConvertFrom-Json
    $currentVersion = $packageJson.version
    
    Write-Host "📦 Current version: $currentVersion" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "What type of version bump?" -ForegroundColor Yellow
    Write-Host "  1) patch ($currentVersion -> patch bump) - Bug fixes"
    Write-Host "  2) minor ($currentVersion -> minor bump) - New features"
    Write-Host "  3) major ($currentVersion -> major bump) - Breaking changes"
    Write-Host "  4) Skip version bump"
    Write-Host ""
    $versionChoice = Read-Host "Enter choice (1-4)"
    
    switch ($versionChoice) {
        "1" {
            Write-Host "🔢 Bumping patch version..." -ForegroundColor Yellow
            npm version patch
        }
        "2" {
            Write-Host "🔢 Bumping minor version..." -ForegroundColor Yellow
            npm version minor
        }
        "3" {
            Write-Host "🔢 Bumping major version..." -ForegroundColor Yellow
            npm version major
        }
        "4" {
            Write-Host "⏭️  Skipping version bump" -ForegroundColor Gray
        }
        default {
            Write-Host "❌ Invalid choice, skipping version bump" -ForegroundColor Red
        }
    }
    
    Write-Host ""
    Write-Host "🚀 Ready to push to GitHub!" -ForegroundColor Cyan
    Write-Host ""
    $push = Read-Host "Push to origin/main now? (y/n)"
    
    if ($push -eq "y" -or $push -eq "Y") {
        Write-Host ""
        Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
        git push origin main
        git push origin --tags
        
        Write-Host ""
        Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
        Write-Host ""
        Write-Host "🎉 All done! Your package is now ready for GitHub installation." -ForegroundColor Green
        Write-Host ""
        
        # Get latest tag
        try {
            $latestTag = git describe --tags --abbrev=0 2>$null
            Write-Host "📝 Test the installation with:" -ForegroundColor Cyan
            Write-Host "   npm install github:votuandi/divt-text-editor#$latestTag" -ForegroundColor White
        } catch {
            Write-Host "📝 Test the installation with:" -ForegroundColor Cyan
            Write-Host "   npm install github:votuandi/divt-text-editor#main" -ForegroundColor White
        }
    } else {
        Write-Host ""
        Write-Host "⏸️  Push skipped. Run 'git push origin main && git push origin --tags' when ready." -ForegroundColor Yellow
    }
} else {
    Write-Host ""
    Write-Host "❌ Commit cancelled" -ForegroundColor Red
    exit 1
}
