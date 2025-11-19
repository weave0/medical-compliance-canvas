#!/usr/bin/env pwsh
# Connect Netlify site to GitHub repository

Write-Host "🔗 Connecting Netlify to GitHub..." -ForegroundColor Cyan
Write-Host ""
Write-Host "GitHub Repo: https://github.com/weave0/medical-compliance-canvas" -ForegroundColor Green
Write-Host "Netlify Site: https://app.netlify.com/sites/sparkly-rolypoly-83b440" -ForegroundColor Green
Write-Host ""
Write-Host "To connect your GitHub repo to Netlify:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Visit: https://app.netlify.com/sites/sparkly-rolypoly-83b440/settings/deploys" -ForegroundColor White
Write-Host ""
Write-Host "2. Under 'Build settings', click 'Link repository'" -ForegroundColor White
Write-Host ""
Write-Host "3. Select 'GitHub' and authorize if needed" -ForegroundColor White
Write-Host ""
Write-Host "4. Choose repository: weave0/medical-compliance-canvas" -ForegroundColor White
Write-Host ""
Write-Host "5. Configure build settings:" -ForegroundColor White
Write-Host "   - Base directory: portal" -ForegroundColor Cyan
Write-Host "   - Build command: npm run build" -ForegroundColor Cyan
Write-Host "   - Publish directory: portal/dist" -ForegroundColor Cyan
Write-Host ""
Write-Host "6. Click 'Deploy site'" -ForegroundColor White
Write-Host ""
Write-Host "Once connected, every push to 'main' will automatically deploy! 🚀" -ForegroundColor Green
