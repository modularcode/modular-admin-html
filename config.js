/**
 *  This is the project directory configuration file.
 *
 *  It's located in the root directory, because It's used in
 *  build tools and src/ files.
 */

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const envFilePath = fs.existsSync(path.resolve(__dirname, ".env")) ?
  path.resolve(__dirname, ".env") :
  path.resolve(__dirname, ".env.example");

const ENV = dotenv.load({
  path: envFilePath,
  silent: true
});

const config = {
  ENV: ENV,
  ROOT_DIR: path.resolve(__dirname),                     // Root dir
  NPM_DIR:   path.resolve(__dirname, "./node_modules"),  // Npm dir
  SRC_DIR: path.resolve(__dirname, "./src"),             // Source files

  CLIENT_DIR: path.resolve(__dirname, "./src/client"),   // Client source files
  SERVER_DIR: path.resolve(__dirname, "./src/server"),   // Server source files

  DIST_DIR: path.resolve(__dirname, "./dist"),           // Build destination
};

module.exports = config;
