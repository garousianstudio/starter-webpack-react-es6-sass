const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

const PORT = 5080;

const CSSModuleLoader = {
	loader: 'css-loader',
	options: {
		modules: true,
		sourceMap: true,
		localIdentName: '[local]__[hash:base64:5]'
	}
};

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

const css = {
	test: /\.css$/,	
  use: ['style-loader', 'css-loader'],
};

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

const config = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [sassModules, sass, css]
  },
  devServer: {
    port: PORT,
    historyApiFallback: {
      index: 'index.html',
    },
    open: true,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'BASENAME': JSON.stringify(''),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = merge(common, config);
