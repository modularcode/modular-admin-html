const config = require('../config');

exports.assets = [
  config.CLIENT_DIR + "/_assets/**/*",
  config.NPM_DIR + "/bootstrap/fonts/**.*"
];

exports.styles = {
  all: config.CLIENT_DIR + "/**/*.scss",
  main: config.CLIENT_DIR + "/main.scss",
};

exports.scripts = {
  all: config.CLIENT_DIR + "/**/!(_context|*.helper)*.js",
  main: config.CLIENT_DIR + "/main.js",
};

// Handlebars paths

exports.helpers = config.CLIENT_DIR + "/**/*.helper.js";

exports.pages = config.CLIENT_DIR + "/**/*.page.hbs";

exports.partials = config.CLIENT_DIR + "/**/*.hbs";

exports.mainPage = "Dashboard";
