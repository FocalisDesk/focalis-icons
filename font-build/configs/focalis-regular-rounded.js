const codepointMappings = require('./regular-rounded-codepoints.json');

module.exports = {
  name: "focalis-regular-rounded",
  prefix: "fi-rr-",
  inputDir: "./src/icons/regular-rounded",
  outputDir: "./dist/fonts/regular-rounded",
  fontTypes: ["woff2", "woff", "ttf", "eot"],
  assetTypes: ["css", "html", "json"],
  fontsUrl: "../fonts/regular-rounded",
  normalize: true,
  round: 1000000000000,
  descent: 64,
  selector: ".fi",
  tag: "i",
  templates: {
    css: "./font-build/templates/css.hbs",
    html: "./font-build/templates/demo.html.hbs"
  },
  // Note: pathOptions are relative to the project root (where fantasticon is executed),
  // not relative to outputDir. This differs from some examples but is required for
  // Fantasticon 4.1.0 when using --config flag with absolute config paths.
  pathOptions: {
    css: "./dist/css/focalis_regular_rounded.css",
    html: "./dist/demo-regular-rounded.html",
    json: "./dist/data/focalis-regular-rounded.icons.json"
  },
  // Code points starting at 0xE000 (Private Use Area)
  // Using pre-generated mappings for consistency across builds
  codepoints: codepointMappings,
  getIconId: ({ basename }) => {
    // Normalize icon name to match codepoint mapping
    return basename.toLowerCase().replace(/[^a-z0-9-]/g, '-');
  },
  formatOptions: {
    json: {
      indent: 2
    },
    // Font metadata for TTF format
    ttf: {
      fontName: "Focalis Icons Regular Rounded",
      fontWeight: "400",
      fontStyle: "normal"
    }
  }
};
