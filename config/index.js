/**
 *  This is the project directory configuration file.
 *
 *  It's located in the root directory, because It's used in
 *  build tools and src/ files.
 */

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const envFilePath = fs.existsSync(path.resolve(__dirname, '.env')) ?
  path.resolve(__dirname, '.env') :
  path.resolve(__dirname, '.env.example');

const ENV = dotenv.load({
  path: envFilePath,
  silent: true
});

const config = {
  ENV: ENV,
  ROOT_DIR: path.resolve(__dirname, '../'),               // Root dir
  TMP_DIR: path.resolve(__dirname, '../.tmp'),            // Tmp dir
  NPM_DIR:   path.resolve(__dirname, '../node_modules'),  // Npm dir
  SRC_DIR: path.resolve(__dirname, '../src'),             // Source files
  DIST_DIR: path.resolve(__dirname, '../dist'),           // Build destination
};

module.exports = config;
