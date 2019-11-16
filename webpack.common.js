const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const dotenv = require('dotenv');

dotenv.config({ path: ".env" });

/** javascript rule */
const javascript = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-react',
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'usage',
            corejs: 3,
          }
        ]
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-strict-mode',
        '@babel/plugin-syntax-dynamic-import',
      ],
    }
  }
};

/**
 * all files rule including fonts
 * 'include' key is needed to not interfere sprite svg rule
 */
const files = {
  test: /\.(jpg|jpeg|png|gif|svg|pdf|woff|woff2|eot|ttf)$/,
  loader: 'file-loader',
  include: path.resolve(__dirname, 'assets')
};

/** sprite svg rule */
const spriteSvg = {
  test: /\.svg$/,
  include: path.resolve(__dirname, 'src/svg'),
  loader: 'svg-sprite-loader',
  options: {
		symbolId: '[name]',
  }
};


const config = {
  entry: ['./src/js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [javascript, files, spriteSvg]
  },
  resolve: {
    alias: {
      js: path.resolve(__dirname, './src/js'),
      scss: path.resolve(__dirname, './src/scss'),
      svg: path.resolve(__dirname, './src/svg'),
      assets: path.resolve(__dirname, './assets')
    },
    extensions: ['.js', '.jsx', '.scss', '.svg']
  },
  stats: {
    colors: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      base: process.env.PATH_ROOT,
      cache: true,
      hash: true,
      favicon: path.resolve(__dirname, './assets/favicon/logo.png'),
    }),
  ]
};

module.exports = config;
