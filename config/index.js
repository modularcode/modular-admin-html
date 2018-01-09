/**
 *  This is the project directory configuration file.
 *
 *  It's located in the root directory, because It's used in
 *  build tools and src/ files.
 */

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');


// Main directories
const config = {
  ROOT_DIR: path.resolve(__dirname, '../'),               // Root dir
  TMP_DIR: path.resolve(__dirname, '../.tmp'),            // Tmp dir
  NPM_DIR:   path.resolve(__dirname, '../node_modules'),  // Npm dir
  SRC_DIR: path.resolve(__dirname, '../src'),             // Source files
  DIST_DIR: path.resolve(__dirname, '../dist'),           // Build destination
};

// Project paths
const paths = {
  assets: [
    config.SRC_DIR + "/_assets/**/*",
    config.NPM_DIR + "/bootstrap/fonts/**.*"
  ],
  styles: {
    all: config.SRC_DIR + "/**/*.scss",
    main: config.SRC_DIR + "/main.scss",
  },
  scripts: {
    all: config.SRC_DIR + "/**/!(_context|*.helper)*.js",
    main: config.SRC_DIR + "/main.js",
  },
  helpers: config.SRC_DIR + "/**/*.helper.js",
  pages: config.SRC_DIR + "/**/*.page.hbs",
  partials: config.SRC_DIR + "/**/*.hbs",
  mainPage: "Dashboard",
};

config.paths = paths;


// Environment
const envFilePath = fs.existsSync(path.resolve(__dirname, '../.env')) ?
  path.resolve(__dirname, '../.env') :
  path.resolve(__dirname, '../.env.example');

const ENV = dotenv.load({
  path: envFilePath,
  silent: true
});

config.ENV = ENV;

module.exports = config;
