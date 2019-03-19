const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  context: __dirname,
  devtool: '#inline-source-map',
  entry: {
    index: './index.ts',
    frame: './iframe.ts'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[name].js',
    publicPath: 'http://localhost:3000/build/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      goblin: path.resolve(__dirname, '../packages/goblin/lib/index'),
      // 'goblin-react': path.resolve(__dirname, '../packages/goblin-react/lib/index'),
    },
    // modules: [path.resolve(__dirname, '../packages/goblin-ng/node_modules'), 'node_modules']
  },
  module: {
    rules: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.tsx?$/, loader: 'ts-loader'},
      { test: /\.js?$/, exclude: /(node_modules|packages)/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}}
    ]
  },
  devServer: { contentBase: '' },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ]
};
