/* dependencies */
var webpack = require('webpack');

/* webpack configuration */
var webpackConfig = {
  entry: './src/entry.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style!css'
    }]
  },
  plugins: []
};

/* production */
if (process.env.NODE_ENV === 'production') {
  /* filename */
  webpackConfig.output.filename = 'bundle.min.js';
  /* uglifyJsPlugin */
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  );
}

module.exports = webpackConfig;
