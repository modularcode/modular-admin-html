const path = require('path');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const cssvariables = require("postcss-css-variables");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('../config');

module.exports = {
  entry: path.resolve(config.CLIENT_DIR, 'main.js'),
  output: {
    path: config.DIST_DIR,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: config.NPM_DIR,
        use: [
          'babel-loader'
        ]
      },
      {
        test:   /\.scss/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              // modules: true,  // This option activates css modules
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                cssvariables({
                  preserve: true
                }),
                autoprefixer('last 2 versions', 'ie 10'),
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [
                config.NPM_DIR,
                config.APP_DIR
              ]
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                config.CLIENT_DIR + '/_common/variables.scss',
                config.CLIENT_DIR + '/_common/mixins.scss',
              ]
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 100000
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          'file-loader'
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [config.NPM_DIR, config.CLIENT_DIR],
  },
  devtool: 'source-map',
};
