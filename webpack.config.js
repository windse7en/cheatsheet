const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// eslint-disable-next-line import/no-extraneous-dependencies
const autoprefixer = require('autoprefixer');

const SCSS_LOADER = {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
};

const JS_LOADER = {
	test : /\.jsx?$/,
	loaders : ['react-hot', 'babel'],
	include: path.join(__dirname, 'src'),
	exclude: /node_modules/
};

const config = {
  entry: {
    javascript: path.join(__dirname, 'src', 'app'),
  },
  output: {
    path: path.join(__dirname, './public/dist'),
    filename: path.join('js', 'cheatsheet', '[name].js'),
  },
  module: {
    loaders: [SCSS_LOADER, JS_LOADER],
  },
  postcss: [autoprefixer({ browsers: ['ie >= 9', 'last 2 versions'] })]
};

module.exports = config;
