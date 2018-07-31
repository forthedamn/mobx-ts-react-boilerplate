const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'main': './src/index.tsx'
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$|\.ts?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  mode: 'development',
  devServer: {
    port: 8080,
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true
    }),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};