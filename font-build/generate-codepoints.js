#!/usr/bin/env node

/**
 * Generate codepoint mappings for icon fonts
 * 
 * This script generates static codepoint mappings for each icon style
 * to ensure consistent Unicode values across builds.
 */

const fs = require('fs');
const path = require('path');

// Code point ranges configuration
const CODE_POINT_RANGES = {
  'regular-rounded': {
    start: 0xE000,  // Private Use Area start
    dir: './src/icons/regular-rounded'
  },
  'thin-rounded': {
    start: 0xF000,  // Private Use Area for thin
    dir: './src/icons/thin-rounded'
  }
};

/**
 * Get all SVG files from a directory
 */
function getSVGFiles(directory) {
  const files = fs.readdirSync(directory);
  return files
    .filter(file => file.endsWith('.svg'))
    .map(file => path.basename(file, '.svg'))
    .sort(); // Sort alphabetically for consistency
}

/**
 * Generate codepoint mapping for a style
 */
function generateCodepointMapping(style, config) {
  const iconNames = getSVGFiles(config.dir);
  const codepoints = {};
  
  iconNames.forEach((name, index) => {
    const codepoint = config.start + index;
    // Convert icon name to lowercase and replace spaces/special chars
    const normalizedName = name.toLowerCase().replace(/[^a-z0-9-]/g, '-');
    codepoints[normalizedName] = codepoint;
  });
  
  return codepoints;
}

/**
 * Main function
 */
function main() {
  console.log('Generating codepoint mappings...\n');
  
  const mappings = {};
  
  for (const [style, config] of Object.entries(CODE_POINT_RANGES)) {
    const codepoints = generateCodepointMapping(style, config);
    mappings[style] = codepoints;
    
    const iconCount = Object.keys(codepoints).length;
    const lastCodepoint = config.start + iconCount - 1;
    
    console.log(`${style}:`);
    console.log(`  Icons: ${iconCount}`);
    console.log(`  Range: 0x${config.start.toString(16).toUpperCase()} - 0x${lastCodepoint.toString(16).toUpperCase()}`);
    console.log(`  Range: ${config.start} - ${lastCodepoint} (decimal)`);
    console.log('');
    
    // Write to JSON file for documentation
    const outputPath = path.join(__dirname, 'configs', `${style}-codepoints.json`);
    fs.writeFileSync(
      outputPath,
      JSON.stringify(codepoints, null, 2),
      'utf8'
    );
    console.log(`  Saved to: ${outputPath}\n`);
  }
  
  console.log('✅ Codepoint mappings generated successfully!');
}

if (require.main === module) {
  main();
}

module.exports = { generateCodepointMapping, CODE_POINT_RANGES };
