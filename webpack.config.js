const autoprefixer = require('autoprefixer');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

const path = require('path');

module.exports = (env, argv) => {
  function isDevelopment() {
    return argv.mode === 'development';
  }
  var config = {
    entry: './scss/snes.scss',
    output: {},
    optimization: {
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      minimize: !isDevelopment(),
    },
    plugins: [
      new CleanWebpackPlugin(),
      new RemoveEmptyScriptsPlugin(),
      new MiniCSSExtractPlugin({
        filename: isDevelopment() ? 'snes.css' : 'snes.min.css',
      }),
    ],
    devtool: isDevelopment() ? 'cheap-module-source-map' : 'source-map',
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                [
                  '@babel/preset-react',
                  {
                    pragma: 'React.createElement',
                    pragmaFrag: 'React.Fragment',
                    development: isDevelopment(),
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCSSExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [autoprefixer()],
                },
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
  };
  return config;
};
