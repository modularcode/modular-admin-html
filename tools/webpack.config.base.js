const path = require('path');

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
          'style-loader',
          'css-loader',
          {
            'loader': 'sass-loader',
            'options': {
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
