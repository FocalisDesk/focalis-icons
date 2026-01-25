Font Build Documentation

Overview

The font build system uses Fantasticon v4.1.0 to convert SVG icons into web fonts and generate accompanying CSS and JSON files. This system supports multiple icon styles (currently regular-rounded and thin-rounded) with easy extensibility for future styles.

Directory Structure

```
font-build/
├── configs/                    # Fantasticon configuration files
│   ├── focalis-regular-rounded.json
│   └── focalis-thin-rounded.json
├── templates/                  # Handlebars templates
│   ├── css.hbs                # CSS template
│   └── demo.html.hbs          # Demo page template
└── README.md                  # This file
```

Configuration Files

Each configuration file defines how a specific icon style is processed:

Key Configuration Parameters

Parameter Description Example
name Font family name (used in filenames) focalis-regular-rounded
prefix CSS class prefix for icons fi-rr- (regular), fi-tr- (thin)
classSelector Base CSS selector .fi
cssFontFamily CSS font-family name "Focalis Icons Regular Rounded"
inputDir Source SVG directory ./src/icons/regular-rounded
outputDir Font output directory ./dist/fonts/regular-rounded
fontTypes Font formats to generate ["woff2", "woff", "ttf", "eot"]
assetTypes Additional files to generate ["css", "html", "json"]
templates Paths to Handlebars templates See below
pathOptions Custom output paths for assets See below

Template Configuration

```json
"templates": {
  "css": "./font-build/templates/css.hbs",
  "html": "./font-build/templates/demo.html.hbs"
},
"pathOptions": {
  "css": "../css/focalis_regular_rounded.css",
  "html": "../demo-regular-rounded.html",
  "json": "../data/focalis-regular-rounded.icons.json"
}
```

Adding a New Style

Step 1: Create SVG Directory

Add your new SVG icons to src/icons/{style-name}/ following these rules:

· All files must be .svg
· Use kebab-case naming (e.g., user-profile.svg)
· Ensure consistent stroke width and corner radius for the style
· Optimize SVGs (remove metadata, use single path where possible)

Step 2: Create Configuration File

Create font-build/configs/focalis-{style-name}.json based on existing configs:

```json
{
  "name": "focalis-{style-name}",
  "prefix": "fi-{abbreviation}",
  "classSelector": ".fi",
  "cssFontFamily": "Focalis Icons {Style Name}",
  "cssFontWeight": "400", // Adjust as needed
  "cssFontStyle": "normal",
  "inputDir": "./src/icons/{style-name}",
  "outputDir": "./dist/fonts/{style-name}",
  "fontTypes": ["woff2", "woff", "ttf", "eot"],
  "assetTypes": ["css", "html", "json"],
  "fontsUrl": "../fonts/{style-name}",
  "normalize": true,
  "round": 10e12,
  "descent": 64,
  "selector": ".fi",
  "tag": "i",
  "templates": {
    "css": "./font-build/templates/css.hbs",
    "html": "./font-build/templates/demo.html.hbs"
  },
  "pathOptions": {
    "css": "../css/focalis_{style_snake_case}.css",
    "html": "../demo-{style-name}.html",
    "json": "../data/focalis-{style-name}.icons.json"
  },
  "codepoints": {},
  "formatOptions": {
    "json": {
      "indent": 2
    }
  }
}
```

Step 3: Update Package.json

Add a new build script in package.json:

```json
"build:{style-name}": "fantasticon font-build/configs/focalis-{style-name}.json"
```

Update the build:all script to include the new style:

```json
"build:all": "npm run build:regular && npm run build:thin && npm run build:{style-name}"
```

Update the minify script:

```json
"minify:css": "... && cleancss -O2 --format breakWith=lf -o dist/css/focalis_{style_snake_case}.min.css dist/css/focalis_{style_snake_case}.css"
```

Step 4: Update Manifest.json

Add the new style to manifest.json with metadata:

· Font family name
· Version
· Icon count
· CSS prefix
· Available icons list

Building Fonts

Available NPM Scripts

Command Description
npm run build:regular Build only regular-rounded style
npm run build:thin Build only thin-rounded style
npm run build:{style-name} Build a specific style
npm run build:all Build all styles sequentially
npm run build Clean and build all styles
npm run minify:css Minify CSS files (runs automatically post-build)
npm run clean Remove dist directory

Build Process Details

1. Font Generation: Fantasticon converts SVGs to font files using the configuration
2. CSS Generation: Handlebars template creates CSS with @font-face and icon classes
3. Demo Page: Generates an interactive HTML preview
4. JSON Data: Creates a mapping file for JavaScript usage
5. Minification: CSS files are minified after generation

Output Structure

```
dist/
├── fonts/
│   ├── regular-rounded/
│   │   ├── focalis-regular-rounded.eot
│   │   ├── focalis-regular-rounded.ttf
│   │   ├── focalis-regular-rounded.woff
│   │   └── focalis-regular-rounded.woff2
│   └── thin-rounded/
│       └── [same structure]
├── css/
│   ├── focalis_regular_rounded.css
│   ├── focalis_regular_rounded.min.css
│   ├── focalis_thin_rounded.css
│   └── focalis_thin_rounded.min.css
├── data/
│   ├── focalis-regular-rounded.icons.json
│   └── focalis-thin-rounded.icons.json
└── demo-regular-rounded.html
    demo-thin-rounded.html
```

Template System

CSS Template (css.hbs)

Generates the CSS file with:

· @font-face declaration with all font formats
· Base .fi class with font properties
· Individual icon classes using ::before pseudo-elements
· Automatic codepoint assignment

Demo Template (demo.html.hbs)

Creates an interactive preview page with:

· Search functionality
· Size and color controls
· Click-to-copy class names
· Responsive grid layout
· Style metadata display

Advanced Configuration

Custom Codepoints

To assign specific Unicode codepoints to icons, add them to the codepoints object:

```json
"codepoints": {
  "booking": 61696,
  "dashboard-monitor": 61697
}
```

Font Optimization

· normalize: true: Ensures consistent icon sizing
· round: 10e12: Reduces file size by rounding coordinates
· descent: 64: Controls vertical alignment

Troubleshooting

Common Issues

1. Missing Icons: Ensure all SVGs are in the correct input directory
2. Font Display Issues: Check that fontsUrl points to the correct relative path
3. CSS Generation Errors: Verify Handlebars template syntax
4. File Permission Errors: Ensure write access to dist/ directory

Debug Mode

Run Fantasticon with debug output:

```bash
npx fantasticon configs/focalis-regular-rounded.json --debug
```

CI/CD Integration

The build process is integrated with GitHub Actions:

· Build Workflow: Runs on every push, generates fonts and assets
· Release Workflow: Creates GitHub releases when tags are pushed
· Automatic Versioning: Uses package.json version for cache busting

Performance Considerations

1. Font Formats: We generate multiple formats for browser compatibility
2. CSS Minification: Reduces file size by ~60%
3. WOFF2 Priority: Modern browsers load the smallest format first
4. Tree Shaking: Import only needed CSS files in your project

Versioning

Font versions follow semantic versioning:

· Major: Breaking changes to icon set or CSS structure
· Minor: New icons added
· Patch: Bug fixes or optimization

The version is automatically included in font URLs for cache busting.