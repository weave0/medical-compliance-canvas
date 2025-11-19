# Medical Compliance Portal - Feature Guide

## 🎨 Visual Design Features

### Futuristic UI/UX
- **3D Starfield Background**: Immersive Three.js animation with 5,000 stars
- **Glassmorphism**: Frosted glass cards with backdrop blur effects
- **Smooth Animations**: Framer Motion for fluid page transitions and interactions
- **Role-Based Color Themes**: Dynamic accent colors that change based on selected role

## 🎯 Navigation Features

### Executive Hub (Landing Page)
- **Role-Based Entry Points**: Six specialized tiles for different user roles:
  - 🎯 Executive Leadership (Purple/Pink theme)
  - ⚖️ Compliance Officers (Blue/Cyan theme)
  - 🌍 Health Equity Directors (Emerald/Teal theme)
  - ⭐ Quality Directors (Amber/Orange theme)
  - 🏥 Clinical Leaders (Red/Rose theme)
  - 💻 Digital Health (Indigo/Violet theme)
- Each role pre-filters the library with relevant tags on click

### Top Navigation Bar
- **Home Link**: Quick return to Executive Hub
- **Role Switcher**: Dropdown to change color theme and persona
- **Bookmarks Button**: Toggle saved documents view (shows count)
- **Recent Button**: Toggle recently opened documents (shows count)

## 📚 Library Features

### Knowledge Canvas (Main View)
- **Grid Layout**: Animated cards showing all filtered documents
- **Hover Effects**: Cards scale and glow on hover
- **Bookmark Icons**: Hover over any card to reveal bookmark toggle
- **Tag Display**: Up to 6 tags shown per card
- **Category Badges**: Color-coded by role theme

### Search & Filtering
- **Full-Text Search**: MiniSearch with fuzzy matching and prefix search
- **Category Filters**: Filter by Resource, Template, Core, or specific compliance areas
- **Multi-Tag Filtering**: Toggle multiple tags (HIPAA, EMTALA, OSHA, Stark/AKS, etc.)
- **URL-Based Filtering**: Pre-filtered views via `?tags=...&role=...` query params

### Bookmarks System
- **Persistent Storage**: Bookmarks saved to localStorage
- **Dedicated View**: Toggle to see only bookmarked documents
- **Visual Indicators**: Gold bookmark icon for saved documents
- **Quick Access**: One-click to toggle bookmark on/off

### Recently Opened
- **Auto-Tracking**: Last 10 opened documents tracked automatically
- **Persistent Storage**: Recent history saved to localStorage
- **Dedicated View**: Toggle to see recent documents in chronological order

## 📖 Document Viewer

### Smart Content Display
- **Markdown Rendering**: Full GitHub-Flavored Markdown support with syntax highlighting
- **Brief/Summary Detection**: Automatically extracts and highlights "Brief", "Executive Brief", or "Summary" sections
- **Responsive Prose**: Clean typography optimized for reading compliance documents
- **Raw HTML Support**: Renders tables, custom HTML elements via rehype-raw

### Reading Experience
- **Fixed Right Panel**: Viewer stays visible while browsing cards
- **Auto-Scroll**: Opens to top of document on selection
- **Path Display**: Shows document location for reference

## 🎨 Theme System

### Role-Based Color Schemes
Each role has custom accent gradients and glow effects:

| Role | Accent Colors | Badge/Border Color |
|------|--------------|-------------------|
| Executive | Purple → Pink | Purple |
| Compliance | Blue → Cyan | Blue |
| Equity | Emerald → Teal | Emerald |
| Quality | Amber → Orange | Amber |
| Clinical | Red → Rose | Red |
| Digital | Indigo → Violet | Indigo |

### Visual Consistency
- All interactive elements inherit role theme
- Bookmarks and Recent views use current theme
- Smooth transitions when switching roles

## 🔧 Technical Features

### Performance
- **Vite Build**: Fast HMR dev server, optimized production builds
- **Code Splitting**: Lazy-loaded markdown content via `import.meta.glob`
- **Tree Shaking**: Minimal bundle size through modern build tools

### Data Management
- **Auto-Loading**: All markdown files loaded from `../Resources`, `../Templates`, `../` on mount
- **Smart Tag Inference**: Automatic tag generation from filename and content
- **Category Detection**: Files auto-categorized by folder and keywords

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (ES2020+)
- **Responsive**: Works on desktop, tablet (grid adapts)
- **LocalStorage**: Bookmarks and recent persist across sessions

## 🚀 Deployment

### Netlify Ready
- `netlify.toml` configured
- Build command: `npm run build`
- Publish directory: `dist`
- Client-side routing support (SPA redirect rules)

### Development
```bash
cd portal
npm install
npm run dev
```
Open http://localhost:5173

### Production Build
```bash
npm run build
```
Deploy `dist/` folder to any static host (Netlify, Vercel, S3, etc.)

## 📊 Content Coverage

The portal currently indexes:
- **Core Documents**: README, Quick Reference, Index
- **Resources**: 15+ detailed compliance guides (HIPAA, EMTALA, OSHA, Stark/AKS, CMS CoPs, NCQA, Joint Commission, CLAS, Section 1557, SDOH, Value-Based Care, Digital Health, etc.)
- **Templates**: 40+ implementation tools, checklists, executive quick sheets, trackers, monitoring logs

## 🔜 Future Enhancements

Potential additions:
- **PDF Export**: Generate printable reports from any document
- **Collaborative Notes**: Add personal annotations to documents
- **Smart Recommendations**: "Related documents" suggestions
- **Timeline View**: Filter by compliance deadlines and effective dates
- **Dashboard**: Visual metrics for compliance status across domains
- **Multi-Language**: Support for Spanish, Chinese, and other languages per CLAS Standards
- **Offline Mode**: Service worker for offline access
- **Dark/Light Toggle**: Manual theme override (currently dark only)

---

Built with ❤️ for Strategic Globalization Operations Consulting
