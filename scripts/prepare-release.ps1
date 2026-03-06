# PowerShell script to prepare a release for divt-text-editor
# Usage: .\scripts\prepare-release.ps1 [patch|minor|major]

param(
    [ValidateSet('patch', 'minor', 'major')]
    [string]$VersionType = 'patch'
)

$ErrorActionPreference = "Stop"

Write-Host "🚀 Preparing release..." -ForegroundColor Cyan

# Check if working directory is clean
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "❌ Working directory is not clean. Please commit or stash changes first." -ForegroundColor Red
    exit 1
}

# Update version
Write-Host "📦 Updating version ($VersionType)..." -ForegroundColor Yellow
npm version $VersionType --no-git-tag-version

$packageJson = Get-Content "package.json" | ConvertFrom-Json
$newVersion = $packageJson.version
Write-Host "✅ New version: v$newVersion" -ForegroundColor Green

# Build the package
Write-Host "🔨 Building package..." -ForegroundColor Yellow
npm run build

if (-not (Test-Path "dist")) {
    Write-Host "❌ Build failed - dist directory not found" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful" -ForegroundColor Green

# Commit changes
Write-Host "📝 Committing changes..." -ForegroundColor Yellow
git add package.json package-lock.json
git commit -m "chore: bump version to v$newVersion"

# Create and push tag
Write-Host "🏷️  Creating tag v$newVersion..." -ForegroundColor Yellow
git tag -a "v$newVersion" -m "Release v$newVersion"

Write-Host ""
Write-Host "✅ Release prepared successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Review the changes: git log -1"
Write-Host "2. Push to GitHub: git push origin main --tags"
Write-Host "3. The GitHub Action will automatically create a release"
Write-Host ""
Write-Host "Or to push now, run:" -ForegroundColor Yellow
Write-Host "  git push origin main --tags"
