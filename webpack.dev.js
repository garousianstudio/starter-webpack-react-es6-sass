const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

/**
 * custom css loader to work with sass module (css module with sass enabled)
 */
const CSSModuleLoader = {
	loader: 'css-loader',
	options: {
		modules: true,
		sourceMap: true,
		localIdentName: '[local]__[hash:base64:5]'
	}
};

/** pure sass loader  */
const sass = {
	test: /\.scss$/,
	include: path.resolve(__dirname, 'src/scss'),
	use: [
		'style-loader', // creates style nodes from JS strings
		{ // translates CSS into CommonJS
			loader: 'css-loader',
			options: {
				importLoaders: 2,
				sourceMap: true,
			},
		},
		'resolve-url-loader',
		'sass-loader?sourceMap', // compiles Sass to CSS
	]
};

/**
 * pure css rule
 * css files can be imported directly in components
 */
const css = {
	test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

/** css module (with sass) rule */
const sassModules = {
	test: /\.(scss|sass)$/,
	include: path.resolve(__dirname, 'src/js'),
	use: [
		'style-loader',
		CSSModuleLoader,
		'resolve-url-loader',
		'sass-loader?sourceMap' // compiles Sass to CSS, using Node Sass by default
	]
};

/**
 * check if 'PORT_BROWSER_SYNC' is set in '.env' and add browser sync plugin
 */
const plugins = (() => {
  const result = [new webpack.HotModuleReplacementPlugin()];

  if (process.env.PORT_BROWSER_SYNC) {
    result.push(
      new BrowserSyncPlugin(
        {
          host: 'localhost',
          port: process.env.PORT_BROWSER_SYNC,
          proxy: `http://localhost:${process.env.PORT}`
        },
        { reload: false }
      )
    );
  }

  return result;
})();


const config = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [sassModules, sass, css]
  },
  devServer: {
    port: process.env.PORT,
    historyApiFallback: {
      index: 'index.html'
    },
    open: true,
    hot: true
  },
  plugins: plugins
};

module.exports = merge(common, config);
