const path = require('path');

const config = require('../config');

const webpackConfigBase = require('./webpack.config.base');
const webpackConfigDevelopment = {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: config.DIST_DIR,
    setup: function(app) {
      app.get('/bundle.css', function(req, res) {
        res.send('');
      });
    },
  },
};

const webpackConfig = Object.assign({}, webpackConfigBase, webpackConfigDevelopment);


module.exports = webpackConfig;
