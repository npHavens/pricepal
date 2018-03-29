const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['react-hot-loader/patch', './client/src/index.jsx', 'webpack-hot-middleware/client']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env','react'],
            plugins: ['react-hot-loader/babel', 'transform-object-rest-spread', 'syntax-dynamic-import']
          }
        }
      },
      {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'html-loader',
      query: {
        interpolate: 'require'
      }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env','react'],
            plugins: ['react-hot-loader/babel', 'transform-object-rest-spread', 'syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
        'style-loader',
        'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|json|xml|ico|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: '/'
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname + '/dist'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      inject: false,
      title: 'VitaPal',
      template: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
}