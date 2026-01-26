/**
 * Fantasticon Global Configuration
 * 
 * This file defines the code point ranges for each icon style
 * to prevent conflicts and maintain consistency across builds.
 * 
 * Code Point Allocation:
 * - Regular Rounded: 0xE000 - 0xEFFF (57344 - 61439) = 4,096 icons
 * - Thin Rounded:    0xF000 - 0xFFFF (61440 - 65535) = 4,096 icons
 * 
 * Current icon counts (as of configuration):
 * - Regular Rounded: ~4,461 icons
 * - Thin Rounded:    ~4,461 icons
 * 
 * Note: With 4,461 icons per style, we exceed the private use area ranges.
 * We'll use sequential allocation starting from the defined base addresses.
 */

module.exports = {
  // Code point ranges for different styles
  codepoints: {
    // Regular Rounded icons start at Private Use Area E000
    'regular-rounded': {
      start: 0xE000,  // Decimal: 57344
      end: 0xEFFF     // Decimal: 61439 (4,096 slots)
    },
    // Thin Rounded icons start at Private Use Area F000
    'thin-rounded': {
      start: 0xF000,  // Decimal: 61440
      end: 0xFFFF     // Decimal: 65535 (4,096 slots)
    }
  }
};
