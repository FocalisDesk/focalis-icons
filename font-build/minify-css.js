#!/usr/bin/env node

/**
 * CSS Minification Script
 * 
 * Minifies CSS files for both icon styles using clean-css with O2 optimization
 */

const { execSync } = require('child_process');
const path = require('path');

const CSS_FILES = [
  {
    input: 'dist/css/focalis_regular_rounded.css',
    output: 'dist/css/focalis_regular_rounded.min.css',
  },
  {
    input: 'dist/css/focalis_thin_rounded.css',
    output: 'dist/css/focalis_thin_rounded.min.css',
  },
];

console.log('🗜️  Minifying CSS files...\n');

for (const file of CSS_FILES) {
  try {
    const command = `cleancss -O2 specialComments:0 --output ${file.output} ${file.input}`;
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ Minified: ${file.output}`);
  } catch (error) {
    console.error(`❌ Failed to minify ${file.input}`);
    process.exit(1);
  }
}

console.log('\n✨ CSS minification complete!');
