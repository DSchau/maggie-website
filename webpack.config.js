const HtmlWebpackPlugin = require('html-webpack-plugin');
const assign = require('webpack-config-assign');

const path = require('path');

module.exports = function webpackConfig({ environment = 'production' }) {
  return assign({
    devtool: 'source-map',
    entry: {
      bundle: ['./src/index']
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, 'dist'),
      publicPath: '/'
    },
    resolve: {
      alias: {
        static: path.join(__dirname, 'static')
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader'],
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.css$/,
          use: ['style-loader', {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }, 'postcss-loader'],
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: path.join(__dirname, 'node_modules')
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        path: path.join(__dirname, 'dist'),
        template: 'public/index.html'
      })
    ]
  }, require(`./webpack.config.${environment}`));
};
