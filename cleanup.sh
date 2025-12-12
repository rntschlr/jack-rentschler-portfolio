#!/bin/bash

# Portfolio cleanup script - remove unused React/TypeScript files

echo "Starting portfolio cleanup..."

# Remove directories
echo "Removing client/src directory..."
rm -rf "client/src"

echo "Removing server directory..."
rm -rf "server"

echo "Removing shared directory..."
rm -rf "shared"

# Remove individual files
echo "Removing config files..."
rm -f "tailwind.config.ts"
rm -f "postcss.config.js"
rm -f "drizzle.config.ts"
rm -f "components.json"
rm -f "tsconfig.json"
rm -f "replit.md"
rm -f "package-lock.json"

echo "Cleanup complete!"
echo "Remaining files:"
ls -la