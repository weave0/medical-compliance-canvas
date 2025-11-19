#!/usr/bin/env pwsh
# Manual deployment script that bypasses Netlify build command

Write-Host "🚀 Medical Compliance Portal - Manual Deployment" -ForegroundColor Cyan
Write-Host ""

# Ensure content is copied to dist
Write-Host "📋 Copying content to dist folder..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path "dist/content" | Out-Null
Copy-Item -Path "public/content/*" -Destination "dist/content/" -Recurse -Force

# Check if content was copied
$contentFiles = (Get-ChildItem -Path "dist/content" -Recurse -File).Count
Write-Host "✅ Copied $contentFiles content files" -ForegroundColor Green
Write-Host ""

# Instructions for manual deployment
Write-Host "⚠️  MANUAL DEPLOYMENT REQUIRED" -ForegroundColor Red
Write-Host ""
Write-Host "The Netlify site has a build command configured in the UI that prevents CLI deployment." -ForegroundColor Yellow
Write-Host ""
Write-Host "Please follow these steps:" -ForegroundColor Cyan
Write-Host "1. Go to: https://app.netlify.com/sites/sparkly-rolypoly-83b440/settings/deploys" -ForegroundColor White
Write-Host "2. Scroll to 'Build settings'" -ForegroundColor White
Write-Host "3. Click 'Edit settings'" -ForegroundColor White
Write-Host "4. Clear the 'Build command' field (remove 'npm run build')" -ForegroundColor White
Write-Host "5. Click 'Save'" -ForegroundColor White
Write-Host ""
Write-Host "Then run:" -ForegroundColor Cyan
Write-Host "  netlify deploy --prod --dir=dist" -ForegroundColor Green
Write-Host ""
Write-Host "OR drag-and-drop the 'dist' folder to Netlify's web interface:" -ForegroundColor Cyan
Write-Host "  https://app.netlify.com/drop" -ForegroundColor Green
