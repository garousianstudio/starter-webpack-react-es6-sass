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

/**
 * loader for svg files inside 'src/svg' directory
 * there are two loaders. one for sprite svg using 'svg-sprite-loader'
 * the other one for embeding inline svg using 'react-svg-loader'
 * NOTE: to use inline svg, add 'inline' query at the end of file path e.g. import User from 'svg/user?inline'
 */
const svg = {
  test: /\.svg$/,
  include: path.resolve(__dirname, 'src/svg'),
  oneOf: [
    {
      resourceQuery: /inline/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react',
            '@babel/preset-env',
          ],
        }

      }, 'react-svg-loader'],
    },
    {
      use: [
        {
          loader: 'svg-sprite-loader',
          options: { symbolId: '[name]' },
        },
        {
          loader: 'svgo-loader',
          options: {}
        }
      ]
    },
  ],
}


const config = {
  entry: ['./src/js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [javascript, files, svg]
  },
  resolve: {
    alias: {
      js: path.resolve(__dirname, './src/js'),
      scss: path.resolve(__dirname, './src/scss'),
      svg: path.resolve(__dirname, './src/svg'),
      'svg-inline': path.resolve(__dirname, './src/svg-inline'),
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
