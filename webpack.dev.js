const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

const PORT = 5080;

// sass rule
const sass = {
	test: /\.scss$/,
	exclude: /node_modules/,
	use: [
		'style-loader', // creates style nodes from JS strings
		'css-loader?importLoaders=2', // translates CSS into CommonJS
		'resolve-url-loader',
		'sass-loader', // compiles Sass to CSS
	]
};
// css rule
const css = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const config = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [sass, css]
  },
  devServer: {
    port: PORT,
    historyApiFallback: {
      index: 'index.html',
    },
    open: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'BASENAME': JSON.stringify(''),
      },
    })
  ]
};

module.exports = merge(common, config);
