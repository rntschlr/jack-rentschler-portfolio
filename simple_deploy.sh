#!/bin/bash

# Simple Portfolio Deployment Script
echo "🚀 Simple deployment to GitHub..."

# Navigate to project directory
cd "/Users/jkr/untitled folder/PersonalPortfolio"

# Configure git
git config user.name "Jack Rentschler"
git config user.email "johnkrentschler@icloud.com"

# Add all files and commit
echo "📁 Adding and committing files..."
git add .
git commit -m "Deploy portfolio - $(date)"

echo ""
echo "🔑 GitHub Authentication Options:"
echo ""
echo "1️⃣  EASIEST: Manual upload"
echo "   - Go to: https://github.com/rntschlr/pp"
echo "   - Delete all files"
echo "   - Upload this entire folder"
echo ""
echo "2️⃣  COMMAND LINE: Use this command manually"
echo "   git push --force origin main"
echo "   (Enter your GitHub username and password/token when prompted)"
echo ""
echo "3️⃣  WITH TOKEN: Create token at https://github.com/settings/tokens"
echo "   Then run: git push https://rntschlr:YOUR_TOKEN@github.com/rntschlr/pp.git main --force"
echo ""

# Show what files are ready
echo "📦 Files ready to deploy:"
echo "✅ package.json (with fixed dependencies)"
echo "✅ postcss.config.js (updated config)"
echo "✅ client/index.html (your website)"
echo "✅ All source code and assets"
echo ""
echo "🌐 After upload, go to Cloudflare Pages and click 'Retry deployment'"

# Try a simple push (will likely fail but worth trying)
echo "🔄 Attempting simple push..."
git push origin main 2>/dev/null

if [ $? -eq 0 ]; then
    echo "🎉 SUCCESS! Files pushed to GitHub!"
    echo "Now go to Cloudflare Pages and retry deployment"
else
    echo "⚠️  Authentication needed. Use one of the options above."
fi