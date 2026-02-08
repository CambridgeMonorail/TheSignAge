#!/usr/bin/env node

/**
 * Script to clean up Storybook story titles by removing numeric prefixes
 * 
 * Removes:
 * - 1-Signage/ → Signage/
 * - 2-Shadcnui/ → Shadcnui/
 * - 3-Shadcnui Blocks/ → Shadcnui Blocks/
 * - 4-Landing/ → Landing/
 * - 5-Shell/ → Shell/
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Mapping of prefixes to remove
const replacements = [
  { old: "title: '1-Signage/", new: "title: 'Signage/" },
  { old: 'title: "1-Signage/', new: 'title: "Signage/' },
  { old: "title: '2-Shadcnui/", new: "title: 'Shadcnui/" },
  { old: 'title: "2-Shadcnui/', new: 'title: "Shadcnui/' },
  { old: "title: '3-Shadcnui Blocks/", new: "title: 'Shadcnui Blocks/" },
  { old: 'title: "3-Shadcnui Blocks/', new: 'title: "Shadcnui Blocks/' },
  { old: "title: '4-Landing/", new: "title: 'Landing/" },
  { old: 'title: "4-Landing/', new: 'title: "Landing/' },
  { old: "title: '5-Shell/", new: "title: 'Shell/" },
  { old: 'title: "5-Shell/', new: 'title: "Shell/' },
];

function findStoryFiles() {
  const result = execSync('find libs -name "*.stories.tsx" -o -name "*.stories.ts"', {
    encoding: 'utf-8',
    cwd: path.resolve(__dirname, '..'),
  });
  return result.trim().split('\n').filter(Boolean);
}

function updateFile(filePath) {
  const fullPath = path.resolve(__dirname, '..', filePath);
  let content = fs.readFileSync(fullPath, 'utf-8');
  let modified = false;

  for (const { old, new: newStr } of replacements) {
    if (content.includes(old)) {
      content = content.replace(new RegExp(old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newStr);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(fullPath, content, 'utf-8');
    console.log(`Updated: ${filePath}`);
    return true;
  }
  return false;
}

function main() {
  console.log('Finding story files...');
  const storyFiles = findStoryFiles();
  console.log(`Found ${storyFiles.length} story files\n`);

  let updatedCount = 0;
  for (const file of storyFiles) {
    if (updateFile(file)) {
      updatedCount++;
    }
  }

  console.log(`\nUpdated ${updatedCount} files`);
}

main();
