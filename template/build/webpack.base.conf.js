var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var vueTemplateLoaderConfig = require('./vue-template-loader.conf')
{{#if_eq compiler "typescript"}}
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
{{/if_eq}}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.{{#if_eq compiler "typescript"}}ts{{else}}js{{/if_eq}}'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  {{#if_eq compiler "typescript"}}
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      watch: './src' // optional but improves performance (less stat calls)
    })
  ],{{/if_eq}}
  resolve: {
    extensions: ['.js', '.vue', {{#if_eq compiler "typescript"}}'.ts', {{/if_eq}}'.json'],
    alias: {
      {{#if_eq build "standalone"}}
      'vue$': 'vue/dist/vue.esm.js'
      {{/if_eq}}
    },
    modules: [
      resolve('src'),
      "node_modules"
    ]
  },
  module: {
    rules: [
      {{#eslint}}
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {{/eslint}}
      {{#tslint}}
      {
        test: /\.ts$/, // tslint doesn't support vue files
        enforce: 'pre',
        loader: 'tslint-loader',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: 'grouped',
          formattersDirectory: 'node_modules/custom-tslint-formatters/formatters'
        }
      },
      {{/tslint}}
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.html$/,
        loader: 'vue-template-loader',
        exclude: resolve('index.html'),
        options: vueTemplateLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {{#if_eq compiler "typescript"}}
      {
        test: /\.ts$/,
        use: [{
          loader: 'babel-loader'
          }, {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true // Disable type checking to run it in fork
          },
        }],
        include: [resolve('src'), resolve('test')]
      },
      {{/if_eq}}
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
