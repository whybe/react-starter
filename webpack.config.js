const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  return {
    optimization: {
      nodeEnv: argv.mode
    },
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build'),
      chunkFilename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader']
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
              name: '[name].[ext]?[hash]',
              outputPath: 'images',
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
              name: '[name].[ext]?[hash]',
              outputPath: 'images',
              limit: 8192
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html'
      })
    ]
  }
}
