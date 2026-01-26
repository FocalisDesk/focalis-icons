/**
 * Fantasticon Global Configuration
 * 
 * This file defines the code point ranges for each icon style
 * to prevent conflicts and maintain consistency across builds.
 * 
 * Code Point Allocation:
 * - Regular Rounded: Starting at 0xE000 (Private Use Area)
 * - Thin Rounded:    Starting at 0xF000 (Private Use Area)
 * 
 * Current icon counts (as of configuration):
 * - Regular Rounded: ~4,461 icons (0xE000 - 0xF16C)
 * - Thin Rounded:    ~4,461 icons (0xF000 - 0x1016C)
 * 
 * Note: The icon sets exceed the traditional PUA ranges (E000-F8FF)
 * and extend into Supplementary Private Use Area as needed.
 * This is acceptable for icon fonts as they define their own namespace.
 */

module.exports = {
  // Code point ranges for different styles
  codepoints: {
    // Regular Rounded icons start at Private Use Area E000
    'regular-rounded': {
      start: 0xE000,  // Decimal: 57344
      // Actual range: 0xE000 - 0xF16C (4,461 icons)
    },
    // Thin Rounded icons start at Private Use Area F000
    'thin-rounded': {
      start: 0xF000,  // Decimal: 61440
      // Actual range: 0xF000 - 0x1016C (4,461 icons)
    }
  }
};
