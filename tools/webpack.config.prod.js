const path = require('path');

const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const customProperties = require("postcss-custom-properties");
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const webpackConfigBase = require('./webpack.config.base');
const webpackConfigProduction = {
  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true })
  ]
};

// Result config
const webpackConfig = Object.assign({}, webpackConfigBase, webpackConfigProduction);

// Add css minification
webpackConfig.module.rules[1].use[2].options.plugins.push(
  cssnano()
);

// Add extract text webpack plugin for styles extraction
const sassRule = Object.assign({}, webpackConfig.module.rules[1]);
const sassRuleUse = sassRule.use;
const sassRuleUseWithoutStyleLoader = sassRuleUse.slice(1, sassRuleUse.length);

webpackConfig.module.rules[1].use = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: sassRuleUseWithoutStyleLoader
});

// Add extract text plugin for styles extraction
const cssRule = Object.assign({}, webpackConfig.module.rules[2]);
const cssRuleRuleUse = cssRule.use;
const cssRuleRuleUseWithoutStyleLoader = sassRuleUse.slice(1, sassRuleUse.length);

webpackConfig.module.rules[2].use = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: cssRuleRuleUseWithoutStyleLoader
});


module.exports = webpackConfig;


