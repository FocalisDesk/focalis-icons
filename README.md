Focalis Icons

![Build Status](https://github.com/FocalisDesk/focalis-icons/actions/workflows/build.yml/badge.svg)
![npm version](https://img.shields.io/npm/v/@focalisdesk/focalis-icons)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Icons Count](https://img.shields.io/badge/icons-8,922-blue)

A comprehensive, professionally designed icon system with multiple visual styles for modern web applications. With 4,461 icons in two distinct styles, Focalis Icons provides everything you need for your design system.

✨ Features

· Two Complete Styles: Regular-rounded (medium weight) and thin-rounded (light weight)
· 4,461 Icons Each: Comprehensive coverage for any use case
· Web Font Support: Generated as WOFF2, WOFF, TTF, EOT for maximum compatibility
· CSS Classes: Simple, intuitive class names (fi fi-rr-icon-name)
· SVG Source Files: Access to original SVG files for customization
· CDN Ready: Instantly available via jsDelivr CDN
· npm Package: Easy installation and version management
· Fully Automated: GitHub Actions for building and releasing
· MIT Licensed: Free for personal and commercial use

🎨 Available Styles

Style CSS Prefix Stroke Corners Example Count
Regular Rounded fi-rr- 1.75px Rounded (2px) <i class="fi fi-rr-booking"></i> 4,461
Thin Rounded fi-tr- 1.25px Rounded (2px) <i class="fi fi-tr-settings"></i> 4,461

🚀 Quick Start

Via CDN (Recommended for prototyping)

```html
<!-- Regular Rounded Icons -->
<link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/npm/@focalisdesk/focalis-icons/dist/css/focalis_regular_rounded.min.css">

<!-- Thin Rounded Icons -->
<link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/npm/@focalisdesk/focalis-icons/dist/css/focalis_thin_rounded.min.css">

<!-- Usage -->
<i class="fi fi-rr-booking"></i>  <!-- Regular rounded booking icon -->
<i class="fi fi-tr-settings"></i>  <!-- Thin rounded settings icon -->
```

Via npm/yarn/pnpm

```bash
# npm
npm install @focalisdesk/focalis-icons

# yarn
yarn add @focalisdesk/focalis-icons

# pnpm
pnpm add @focalisdesk/focalis-icons
```

Then import in your project:

```javascript
// Import CSS (choose one style or both)
import '@focalisdesk/focalis-icons/dist/css/focalis_regular_rounded.css';
import '@focalisdesk/focalis-icons/dist/css/focalis_thin_rounded.css';
```

```html
<!-- Use in your HTML/JSX -->
<i class="fi fi-rr-user"></i>
<i class="fi fi-tr-bell"></i>
```

📖 Usage Examples

Basic Icons

```html
<!-- Regular rounded -->
<i class="fi fi-rr-home"></i>
<i class="fi fi-rr-search"></i>
<i class="fi fi-rr-user"></i>
<i class="fi fi-rr-settings"></i>

<!-- Thin rounded -->
<i class="fi tr-home"></i>
<i class="fi fi-tr-search"></i>
<i class="fi fi-tr-user"></i>
<i class="fi fi-tr-settings"></i>
```

Sizing and Colors

Icons inherit the font-size and color of their parent element:

```html
<!-- Different sizes -->
<i class="fi fi-rr-bell" style="font-size: 16px;"></i>
<i class="fi fi-rr-bell" style="font-size: 24px;"></i>
<i class="fi fi-rr-bell" style="font-size: 32px;"></i>

<!-- Different colors -->
<i class="fi fi-rr-heart" style="color: #ef4444;"></i>
<i class="fi fi-rr-star" style="color: #f59e0b;"></i>
<i class="fi fi-rr-check" style="color: #10b981;"></i>
```

With Text

```html
<button>
  <i class="fi fi-rr-download"></i> Download
</button>

<a href="#">
  <i class="fi fi-rr-external-link"></i> Open in new tab
</a>

<div>
  <i class="fi fi-rr-envelope"></i> contact@example.com
</div>
```

Framework Examples

React:

```jsx
function IconButton({ icon, label }) {
  return (
    <button className="icon-button">
      <i className={`fi fi-rr-${icon}`} />
      <span>{label}</span>
    </button>
  );
}

// Usage
<IconButton icon="download" label="Download" />
```

Vue:

```vue
<template>
  <button class="icon-button">
    <i :class="`fi fi-rr-${icon}`" />
    <span>{{ label }}</span>
  </button>
</template>
```

Svelte:

```svelte
<button class="icon-button">
  <i class="fi fi-rr-{icon}"></i>
  <span>{label}</span>
</button>
```

🏗️ Project Structure

```
focalis-icons/
├── 📂 src/                          # Sources des icônes
│   ├── 📂 icons/                    # Bibliothèque d'icônes SVG
│   │   ├── 📁 regular-rounded/      # 🟢 ~4 461 icônes Regular Rounded
│   │   │   ├── 📄 booking.svg
│   │   │   ├── 📄 dashboard-monitor.svg
│   │   │   └── 📄 ... (4 458 autres)
│   │   └── 📁 thin-rounded/         # ⚫ ~4 461 icônes Thin Rounded
│   │       ├── 📄 booking.svg
│   │       ├── 📄 dashboard-monitor.svg
│   │       └── 📄 ... (4 458 autres)
│   └── 📄 README.md                 # 📋 Règles et bonnes pratiques SVG
│
├── 📂 font-build/                   # 🔧 Système de build
│   ├── 📂 configs/                  # ⚙️ Configurations Fantasticon
│   │   ├── 📄 focalis-regular-rounded.json
│   │   └── 📄 focalis-thin-rounded.json
│   ├── 📂 templates/                # 🎨 Templates Handlebars
│   │   ├── 📄 css.hbs
│   │   └── 📄 demo.html.hbs
│   └── 📄 README.md                 # 📖 Documentation du système de build
│
├── 📂 dist/                         # 🚀 Fichiers générés (non versionné)
│   ├── 📂 fonts/                    # 🔤 Polices web
│   │   ├── 📁 regular-rounded/
│   │   │   ├── 📄 focalis-regular-rounded.woff2
│   │   │   ├── 📄 focalis-regular-rounded.woff
│   │   │   ├── 📄 focalis-regular-rounded.ttf
│   │   │   └── 📄 focalis-regular-rounded.eot
│   │   └── 📁 thin-rounded/
│   │       ├── 📄 focalis-thin-rounded.woff2
│   │       ├── 📄 focalis-thin-rounded.woff
│   │       ├── 📄 focalis-thin-rounded.ttf
│   │       └── 📄 focalis-thin-rounded.eot
│   ├── 📂 css/                      # 🎨 Feuilles de style
│   │   ├── 📄 focalis_regular_rounded.css
│   │   ├── 📄 focalis_regular_rounded.min.css
│   │   ├── 📄 focalis_thin_rounded.css
│   │   └── 📄 focalis_thin_rounded.min.css
│   ├── 📂 data/                     # 📊 Mappings JSON pour JavaScript
│   │   ├── 📄 focalis-regular-rounded.icons.json
│   │   └── 📄 focalis-thin-rounded.icons.json
│   └── 📄 demo-*.html               # 🌐 Pages de démonstration interactives
│
├── 📂 .github/workflows/            # ⚙️ CI/CD Automatisation
│   ├── 📄 build.yml                 # 🔄 Build automatique sur push
│   └── 📄 release-on-tag.yml        # 🏷️ Publication automatique sur tag
│
├── 📄 package.json                  # 📦 Configuration npm et scripts
├── 📄 package-lock.json             # 🔒 Verrouillage des dépendances (généré par npm)
├── 📄 manifest.json                 # 📋 Métadonnées du projet
├── 📄 LICENSE                       # ⚖️ Licence MIT
└── 📄 README.md                     # 📖 Ce fichier (documentation principale)

```

🔧 Development

Adding New Icons

1. Place SVG files in the appropriate style directory:
   ```
   src/icons/regular-rounded/new-icon.svg
   src/icons/thin-rounded/new-icon.svg
   ```
2. Follow SVG guidelines (from src/README.md):
   · Use consistent stroke width for the style
   · Use 2px corner radius for rounded styles
   · Optimize SVG files (remove metadata, use single path when possible)
   · Use kebab-case for filenames (e.g., user-profile.svg)
3. Rebuild fonts:
   ```bash
   npm run build:all
   ```

Adding a New Style

1. Create SVG directory:
   ```bash
   mkdir -p src/icons/new-style
   ```
2. Add configuration (font-build/configs/focalis-new-style.json):
   ```json
   {
     "name": "focalis-new-style",
     "prefix": "fi-ns-",
     "classSelector": ".fi",
     "cssFontFamily": "Focalis Icons New Style",
     "cssFontWeight": "400",
     "inputDir": "./src/icons/new-style",
     "outputDir": "./dist/fonts/new-style",
     "fontTypes": ["woff2", "woff", "ttf", "eot"],
     "assetTypes": ["css", "html", "json"],
     "fontsUrl": "../fonts/new-style",
     "templates": {
       "css": "./font-build/templates/css.hbs",
       "html": "./font-build/templates/demo.html.hbs"
     },
     "pathOptions": {
       "css": "../css/focalis_new_style.css",
       "html": "../demo-new-style.html",
       "json": "../data/focalis-new-style.icons.json"
     }
   }
   ```
3. Update package.json scripts:
   ```json
   "build:new-style": "fantasticon font-build/configs/focalis-new-style.json",
   "build:all": "npm run build:regular && npm run build:thin && npm run build:new-style"
   ```
4. Update CSS minification in package.json:
   ```json
   "minify:css": "... && cleancss -O2 --format breakWith=lf -o dist/css/focalis_new_style.min.css dist/css/focalis_new_style.css"
   ```
5. Add style to manifest.json (follow existing structure)
6. Build the new style:
   ```bash
   npm run build:new-style
   ```

Building Locally

```bash
# Clone the repository
git clone https://github.com/FocalisDesk/focalis-icons.git
cd focalis-icons

# Install dependencies
npm install

# Build all styles
npm run build:all

# Or build individual styles
npm run build:regular
npm run build:thin

# Clean build directory
npm run clean
```

Preview Icons

After building, open the demo files:

· dist/demo-regular-rounded.html - Regular rounded icons
· dist/demo-thin-rounded.html - Thin rounded icons

🤝 Contributing

We welcome contributions! Here's how you can help:

Reporting Issues

1. Check if the issue already exists in GitHub Issues
2. Provide detailed information:
   · Icon name(s) affected
   · Style (regular-rounded/thin-rounded)
   · Browser and version
   · Screenshots if applicable

Submitting Pull Requests

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/add-new-icons
   ```
3. Add your icons to both style directories (maintain consistency)
4. Follow SVG guidelines in src/README.md
5. Test your changes:
   ```bash
   npm run build:all
   ```
6. Update documentation if needed
7. Commit with descriptive messages:
   ```bash
   git commit -m "feat: add payment processing icons"
   ```
8. Push to your fork and create a Pull Request

Contribution Guidelines

· Maintain consistent stroke width within each style
· Use 2px corner radius for rounded styles
· Optimize SVG files (remove unnecessary metadata)
· Test icons in both styles for visual consistency
· Update documentation for new features

Icon Request Process

1. Check existing icons to avoid duplicates
2. Describe use case for the new icon
3. Provide reference images if possible
4. Consider icon clarity at small sizes (16-24px)

📄 License

Focalis Icons is released under the MIT License.

· ✅ Free for personal and commercial use
· ✅ No attribution required (though appreciated)
· ✅ Modify and distribute freely
· ✅ Use in proprietary software
· ✅ Sublicense

🔗 Links

· GitHub: https://github.com/FocalisDesk/focalis-icons
· npm: https://www.npmjs.com/package/@focalisdesk/focalis-icons
· CDN: https://cdn.jsdelivr.net/npm/@focalisdesk/focalis-icons/
· Issue Tracker: https://github.com/FocalisDesk/focalis-icons/issues
· Changelog: https://github.com/FocalisDesk/focalis-icons/releases

🙏 Acknowledgments

· Built with Fantasticon
· Inspired by modern design systems
· Thanks to all contributors

📊 Icon Statistics

Metric Regular Rounded Thin Rounded
Total Icons 4,461 4,461
Categories 45+ 45+
Average File Size (SVG) ~1.2KB ~1.1KB
CSS File Size (minified) ~150KB ~150KB
Font File Size (woff2) ~120KB ~115KB

---

Focalis Icons is maintained by FocalisDesk. For questions, suggestions, or support, please open an issue on GitHub.