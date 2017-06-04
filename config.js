const path = require('path');

const ENV = require('dotenv').load({
  path: path.resolve(__dirname, ".env"),
  silent: true
});

const config = {
  ENV: ENV.NODE_ENV || "development",
  PORT: process.env.PORT || ENV.PORT || 4000,

  ROOT_DIR: path.resolve(__dirname),                     // Root dir
  NPM_DIR:   path.resolve(__dirname, "./node_modules"),  // Npm dir
  SRC_DIR: path.resolve(__dirname, "./src"),             // Source files

  CLIENT_DIR: path.resolve(__dirname, "./src/client"),   // Client source files
  SERVER_DIR: path.resolve(__dirname, "./src/server"),   // Server source files

  DIST_DIR: path.resolve(__dirname, "./dist"),           // Build destination
};

module.exports = config;
