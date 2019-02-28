const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// define basename if project is not deployed in root of server e.g. '/path/to/folder'
const BASENAME = '';

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
		MiniCssExtractPlugin.loader,
		{ // translates CSS into CommonJS
			loader: 'css-loader',
			options: {
				importLoaders: 3,
				sourceMap: true,
			},
		},
		'postcss-loader',
		'resolve-url-loader',
		'sass-loader?sourceMap', // compiles Sass to CSS 
	]  
};

const css = {
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader'
  ],
};

const sassModules = {
	test: /\.(scss|sass)$/,
	include: path.resolve(__dirname, 'src/js'),
	use: [
		MiniCssExtractPlugin.loader,
		CSSModuleLoader,
		'postcss-loader',
		'resolve-url-loader',
		'sass-loader?sourceMap' // compiles Sass to CSS, using Node Sass by default
	]
};

const config = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [sassModules, sass, css]
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'BASENAME': JSON.stringify(BASENAME),
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ]
};

module.exports = merge(common, config);
