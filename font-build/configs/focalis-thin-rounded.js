module.exports = {
  name: "focalis-thin-rounded",
  prefix: "fi-tr",
  inputDir: "./src/icons/thin-rounded",
  outputDir: "./dist/fonts/thin-rounded",
  fontTypes: ["woff2", "woff", "ttf", "eot"],
  assetTypes: ["css", "html", "json"],
  fontsUrl: "../fonts/thin-rounded",
  normalize: true,
  round: 1000000000000,
  descent: 64,
  selector: ".fi",
  tag: "i",
  templates: {
    css: "./font-build/templates/css.hbs",
    html: "./font-build/templates/demo.html.hbs"
  },
  pathOptions: {
    css: "./dist/css/focalis_thin_rounded.css",
    html: "./dist/demo-thin-rounded.html",
    json: "./dist/data/focalis-thin-rounded.icons.json"
  },
  codepoints: {},
  formatOptions: {
    json: {
      indent: 2
    },
    // Font metadata for TTF format
    ttf: {
      fontName: "Focalis Icons Thin Rounded",
      fontWeight: "300",
      fontStyle: "normal"
    }
  }
};
