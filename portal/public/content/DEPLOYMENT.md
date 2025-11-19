# Medical Compliance Portal - Deployment Guide

## 🚀 Quick Deploy to Netlify

### Option 1: Netlify Drop (Easiest)

1. **Use the pre-built version** from the successful build (in `dist/` folder if it exists)
2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the entire `dist` folder
4. Your site will be live in seconds!

### Option 2: GitHub + Netlify Auto-Deploy

1. **Initialize Git & Push to GitHub:**
   ```powershell
   cd "o:\Medical Compliance"
   git init
   git add .
   git commit -m "Initial commit: Medical Compliance Portal"
   
   # Create a new GitHub repo, then:
   git remote add origin https://github.com/YOUR_USERNAME/medical-compliance.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [https://app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Build settings:
     - **Base directory:** `portal`
     - **Build command:** `npm run build`
     - **Publish directory:** `portal/dist`
   - Click "Deploy site"

### Option 3: Netlify CLI

```powershell
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from portal directory
cd "o:\Medical Compliance\portal"
netlify deploy --prod --dir=dist
```

## 🔧 Build Issues & Solutions

If you encounter build issues with Vite:

### Fix 1: Use Working Build
The portal was successfully built earlier. If the `dist` folder exists with these files:
- `index.html`
- `assets/index-*.css`
- `assets/index-*.js`

Just deploy that `dist` folder directly to Netlify!

### Fix 2: Rebuild from Scratch

```powershell
cd "o:\Medical Compliance\portal"

# Clean everything
Remove-Item -Recurse -Force node_modules, package-lock.json, dist -ErrorAction SilentlyContinue

# Reinstall with exact versions
npm install

# Build
npx vite build
```

### Fix 3: Use Alternative Bundler

If Vite continues to have issues, you can switch to Create React App or use the standalone HTML approach.

## 📝 Custom Domain Setup

Once deployed to Netlify:

1. Go to your site settings in Netlify
2. Click "Domain management" → "Add custom domain"
3. Enter your domain (e.g., `compliance.yourcompany.com`)
4. Follow DNS instructions (add CNAME record pointing to your Netlify URL)
5. Enable HTTPS (automatic with Netlify)

## 🌐 Environment Variables

No environment variables needed for this static site! All content is bundled at build time.

## 📊 Current Status

### ✅ Completed Features
- **PDF Export** - Download any document as PDF
- **Mobile Responsive** - Works on all screen sizes
- **Bookmarks & Recent** - Persistent user preferences
- **Role-Based Theming** - 6 color schemes
- **3D Background** - Three.js starfield
- **Executive Hub** - Role-based landing page
- **Full-Text Search** - MiniSearch with fuzzy matching
- **Tag Filtering** - Multi-select tag filters
- **Content Library** - 15+ resources, 40+ templates

### 📦 Built Files (from successful build)
```
dist/
├── index.html (0.42 kB)
├── assets/
│   ├── index-c0x8HwFO.css (18.85 kB)
│   └── index-4lDc3W4W.js (1,507.74 kB)
```

## 🔄 Updates & Maintenance

### Adding New Content
1. Add `.md` files to `Resources/` or `Templates/` folders
2. Rebuild: `npm run build`
3. Deploy updated `dist` folder

### Updating Styles
1. Edit `portal/src/styles.css` or `tailwind.config.ts`
2. Rebuild and redeploy

## 🆘 Troubleshooting

### "vite is not recognized"
- Use `npx vite build` instead of `npm run build`
- Or deploy the existing `dist` folder if build was successful earlier

### Port already in use (dev mode)
```powershell
npm run dev -- --port 5174
```

### Build succeeds but site is blank
- Check browser console for errors
- Ensure all markdown files are being loaded from `../` paths
- Verify `vite.config.ts` has correct `server.fs.allow` settings

## 📞 Support

Issues with:
- **Content:** Update markdown files in `Resources/` or `Templates/`
- **Styling:** Edit `portal/src/styles.css`
- **Features:** Modify `portal/src/App.tsx` or component files
- **Build:** Check `vite.config.ts` and `package.json`

---

**Ready to Deploy!** 🎉

Use the pre-built `dist` folder from the successful earlier build, or follow Fix 2 above to rebuild fresh.
