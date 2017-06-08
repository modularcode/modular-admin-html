const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('../config');

const webpackConfigBase = require('./webpack.config.base');
const webpackConfigProduction = {
  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true })
  ]
};

const webpackConfig = Object.assign({}, webpackConfigBase, webpackConfigProduction);

// Add extract text webpack plugin
const sassRule = Object.assign({}, webpackConfig.module.rules[1]);
const sassRuleUse = sassRule.use;
const sassRuleUseWithoutStyleLoader = sassRuleUse.slice(1, sassRuleUse.length);

webpackConfig.module.rules[1].use = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: sassRuleUseWithoutStyleLoader
});

module.exports = webpackConfig;


