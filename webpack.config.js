const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, './src'),
  entry: './index.js',
  output: {
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  },
  devServer: {
    hot: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: {
            name: 'workers/[name].[hash].[ext]',
            publicPath: '/'
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]-[local]-[hash:base64:5]',
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'img',
            limit: 8192
          }
        }
      },
      {
        test: /\.svg$/,
        issuer: {
          test: /\.jsx?$/
        },
        use: ['babel-loader', '@svgr/webpack']
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'img',
            limit: 8192
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
