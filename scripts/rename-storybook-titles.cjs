#!/usr/bin/env node

/**
 * Script to rename Storybook story titles to prioritize Signage components
 *
 * New structure:
 * - 1-Signage/... (primary focus)
 * - 2-Shadcnui/... (base components)
 * - 3-Shadcnui Blocks/... (composite components)
 * - 4-Landing/... (landing sections)
 * - 5-Shell/... (shell components)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Mapping of old prefixes to new prefixes
const replacements = [
  { old: "title: 'Signage/", new: "title: '1-Signage/" },
  { old: 'title: "Signage/', new: 'title: "1-Signage/' },
  { old: "title: 'Shadcnui/", new: "title: '2-Shadcnui/" },
  { old: 'title: "Shadcnui/', new: 'title: "2-Shadcnui/' },
  { old: "title: 'Shadcnui Blocks/", new: "title: '3-Shadcnui Blocks/" },
  { old: 'title: "Shadcnui Blocks/', new: 'title: "3-Shadcnui Blocks/' },
  { old: "title: 'Landing/", new: "title: '4-Landing/" },
  { old: 'title: "Landing/', new: 'title: "4-Landing/' },
  { old: "title: 'Shell/", new: "title: '5-Shell/" },
  { old: 'title: "Shell/', new: 'title: "5-Shell/' },
];

function findStoryFiles() {
  const result = execSync(
    'find libs -name "*.stories.tsx" -o -name "*.stories.ts"',
    {
      encoding: 'utf-8',
      cwd: path.resolve(__dirname, '..'),
    },
  );
  return result.trim().split('\n').filter(Boolean);
}

function updateFile(filePath) {
  const fullPath = path.resolve(__dirname, '..', filePath);
  let content = fs.readFileSync(fullPath, 'utf-8');
  let modified = false;

  for (const { old, new: newStr } of replacements) {
    if (content.includes(old)) {
      content = content.replace(
        new RegExp(old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
        newStr,
      );
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
