#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Starting portfolio deployment to GitHub..."

# Navigate to the project directory
cd "/Users/jkr/untitled folder/PersonalPortfolio"

# Configure git user (you can change these)
echo "⚙️  Configuring git user..."
git config user.name "Jack Rentschler"
git config user.email "johnkrentschler@icloud.com"

# Check if we have any changes to commit
echo "📋 Checking git status..."
git status

# Add all files
echo "📁 Adding all files..."
git add .

# Check if there are any changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit, trying to push existing commits..."
else
    echo "💾 Committing changes..."
    git commit -m "Deploy portfolio with build fixes

- Fixed dependencies: @tailwindcss/postcss, autoprefixer
- Updated contact info: johnkrentschler@icloud.com
- Build tested and working locally
- Ready for Cloudflare Pages deployment"
fi

# Show current remote
echo "🔗 Current remote:"
git remote -v

# Try to push
echo "⬆️  Pushing to GitHub..."
echo "Note: You may need to enter your GitHub username and Personal Access Token"
echo "If you don't have a token, create one at: https://github.com/settings/tokens"
echo ""

# Force push to overwrite any conflicts
git push --force-with-lease origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 Now go to Cloudflare Pages and retry deployment"
    echo "📍 Your repo: https://github.com/rntschlr/pp"
else
    echo "❌ Push failed. You may need to:"
    echo "1. Create a Personal Access Token at https://github.com/settings/tokens"
    echo "2. Use your GitHub username and token as password when prompted"
    echo "3. Or try: git push --force origin main"
fi