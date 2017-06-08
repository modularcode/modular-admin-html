const config = require('../config');

module.exports = {
  entry: [
    path.resolve(config.CLIENT_DIR, 'main.js')
  ],
  output: {
    path: config.DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: config.NPM_DIR,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [config.NPM_DIR], config.CLIENT_DIR],
  },
  devtool: 'source-map',
};
