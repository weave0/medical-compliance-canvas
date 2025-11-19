# Deploy Medical Compliance Portal to Netlify
# Run this from: o:\Medical Compliance

Write-Host "🚀 Medical Compliance Portal - Netlify Deployment Helper" -ForegroundColor Cyan
Write-Host ""

$portalPath = "o:\Medical Compliance\portal"
$distPath = Join-Path $portalPath "dist"

# Check if dist folder exists from previous successful build
if (Test-Path $distPath) {
    Write-Host "✅ Found existing build in dist/ folder" -ForegroundColor Green
    Write-Host ""
    
    $useDist = Read-Host "Use existing build? (Y/n)"
    if ($useDist -ne 'n' -and $useDist -ne 'N') {
        Write-Host ""
        Write-Host "📦 Deploying existing build..." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "OPTION 1: Netlify Drop (Easiest)" -ForegroundColor Cyan
        Write-Host "  1. Go to: https://app.netlify.com/drop"
        Write-Host "  2. Drag the folder: $distPath"
        Write-Host "  3. Done!"
        Write-Host ""
        Write-Host "OPTION 2: Netlify CLI" -ForegroundColor Cyan
        Write-Host "  Run: netlify deploy --prod --dir=`"$distPath`""
        Write-Host ""
        
        $openDrop = Read-Host "Open Netlify Drop in browser? (Y/n)"
        if ($openDrop -ne 'n' -and $openDrop -ne 'N') {
            Start-Process "https://app.netlify.com/drop"
            Write-Host "✅ Opened Netlify Drop - drag your dist folder there!" -ForegroundColor Green
        }
        
        Write-Host ""
        Write-Host "📂 Dist folder location:" -ForegroundColor Yellow
        Write-Host "  $distPath"
        Write-Host ""
        
        explorer $distPath
        exit
    }
}

# Rebuild option
Write-Host "🔨 Rebuilding portal..." -ForegroundColor Yellow
Write-Host ""

Set-Location $portalPath

# Try to build
Write-Host "Running: npm run build" -ForegroundColor Cyan
try {
    npm run build 2>&1 | Tee-Object -Variable buildOutput
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ Build successful!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Now deploy using one of these methods:" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "1. Netlify Drop:" -ForegroundColor Yellow
        Write-Host "   https://app.netlify.com/drop"
        Write-Host "   Drag: $distPath"
        Write-Host ""
        Write-Host "2. Netlify CLI:" -ForegroundColor Yellow
        Write-Host "   netlify deploy --prod --dir=dist"
        Write-Host ""
        
        $openDrop = Read-Host "Open Netlify Drop? (Y/n)"
        if ($openDrop -ne 'n' -and $openDrop -ne 'N') {
            Start-Process "https://app.netlify.com/drop"
            explorer $distPath
        }
    } else {
        Write-Host ""
        Write-Host "❌ Build failed. Trying alternative..." -ForegroundColor Red
        Write-Host ""
        Write-Host "Running: npx vite build" -ForegroundColor Cyan
        
        npx vite build 2>&1 | Tee-Object -Variable buildOutput2
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "✅ Build successful with npx!" -ForegroundColor Green
        } else {
            Write-Host ""
            Write-Host "❌ Build failed." -ForegroundColor Red
            Write-Host ""
            Write-Host "MANUAL STEPS:" -ForegroundColor Yellow
            Write-Host "1. cd `"$portalPath`""
            Write-Host "2. Remove-Item -Recurse node_modules, package-lock.json"
            Write-Host "3. npm install"
            Write-Host "4. npx vite build"
            Write-Host ""
            Write-Host "OR use the earlier successful build if dist/ folder exists"
        }
    }
} catch {
    Write-Host "Error during build: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "📖 See DEPLOYMENT.md for detailed instructions" -ForegroundColor Cyan
