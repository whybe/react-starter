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
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
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
