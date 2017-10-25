const config = require('../config');

exports.assets = [
  config.SRC_DIR + "/_assets/**/*",
  config.NPM_DIR + "/bootstrap/fonts/**.*"
];

exports.styles = {
  all: config.SRC_DIR + "/**/*.scss",
  main: config.SRC_DIR + "/main.scss",
};

exports.scripts = {
  all: config.SRC_DIR + "/**/!(_context|*.helper)*.js",
  main: config.SRC_DIR + "/main.js",
};

// Handlebars paths

exports.helpers = config.SRC_DIR + "/**/*.helper.js";

exports.pages = config.SRC_DIR + "/**/*.page.hbs";

exports.partials = config.SRC_DIR + "/**/*.hbs";

exports.mainPage = "Dashboard";
