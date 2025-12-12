# Deploy Instructions for Portfolio

## Current Status
✅ **Local build works successfully**
✅ **All dependencies fixed** (`@tailwindcss/postcss`, `autoprefixer`, etc.)
✅ **Updated contact info** (johnkrentschler@icloud.com, @rntschlr)

## Problem
Cloudflare Pages is building from old commit `e84bc11` instead of latest commit `fb86012`

## Solution - Upload to GitHub

### Option 1: GitHub Web Interface (Recommended)
1. Go to: https://github.com/rntschlr/pp
2. Delete all current files in the repository
3. Upload these essential files:
   - `package.json` (with new dependencies)
   - `postcss.config.js` (fixed config)
   - `vite.config.ts`
   - `tailwind.config.ts`
   - `vercel.json`
   - `_redirects`
   - Entire `client/` folder (with all subfolders)

### Option 2: ZIP Upload
1. Create a ZIP of this entire folder
2. Upload to GitHub
3. GitHub will extract automatically

## After Upload
1. Go to Cloudflare Pages dashboard
2. Find your "pp" project
3. Click "Retry deployment"
4. Build should succeed with message: "✓ built in ~800ms"

## Build Settings (verify these in Cloudflare)
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** (leave empty)

## Key Files That Must Be Uploaded
```
package.json          ← Contains fixed dependencies
postcss.config.js     ← Uses @tailwindcss/postcss
vite.config.ts        ← Build configuration
client/index.html     ← Main website file
client/src/           ← All source code
```