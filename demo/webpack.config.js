const path = require('path');
const webpack = require('webpack');
const vueLoaderConfig = require('./vue-loader.config')

module.exports = {
  context: __dirname,
  devtool: '#inline-source-map',
  entry: ['./index.ts'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/build/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.vue'],
    alias: {
      goblin: path.resolve(__dirname, '../packages/goblin/src/index'),
      'goblin-react': path.resolve(__dirname, '../packages/goblin-react/src/index'),
    },
    modules: [path.resolve(__dirname, '../packages/goblin-ng/node_modules'), 'node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.tsx?$/, loader: 'ts-loader'},
      { test: /\.js?$/, exclude: /(node_modules|packages)/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}}
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ]
};
