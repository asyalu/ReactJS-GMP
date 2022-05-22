const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')

const configs = {
  development: {
    devServer: {
      historyApiFallback: true,
      open: true,
      client: {
        overlay: {
          warnings: false,
          errors: true
        }
      }
    }
  },
  production: {}
};

module.exports = merge(
  {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    mode: process.env.NODE_ENV,
    module: {
      rules: [
        {
          test: /\.js(x?)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: require('./.babelrc')
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      })
    ]
  },
  configs[process.env.NODE_ENV]
)
