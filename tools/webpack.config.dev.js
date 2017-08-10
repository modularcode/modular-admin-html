const path = require('path');

const config = require('../config');
const env = require('./env');

const webpackConfigBase = require('./webpack.config.base');
const webpackConfigDevelopment = {
  devtool: 'eval',
  devServer: {
    contentBase: config.DIST_DIR,
    setup: function(app) {
      // app.get('/env.js', env);
      app.get('/bundle.css', function(req, res) {
        res.send('');
      });
    },
  },
};

const webpackConfig = Object.assign({}, webpackConfigBase, webpackConfigDevelopment);


module.exports = webpackConfig;
