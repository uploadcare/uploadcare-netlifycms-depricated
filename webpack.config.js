const path = require('path')
const pkg = require('./package.json')
const webpack = require('webpack')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: false,
  entry: './src/index.js',
  plugins: [
    new webpack.DefinePlugin({
      WIDGET_VERSION: JSON.stringify(pkg.widgetVersion),
      EFFECTS_TAB_VERSION: JSON.stringify(pkg.effectsTabVersion),
      PLUGIN_VERSION: JSON.stringify(pkg.version),
    }),
  ],
  output: {
    filename: 'uploadcare-netlifycms.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {extensions: ['*', '.js']},
  externals: {
    'react': 'react',
    'lodash': 'lodash',
    'netlify-cms': 'netlify-cms',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {presets: ['@babel/preset-env', '@babel/react']},
        },
      },
      {
        test: /\.pcss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {importLoaders: 1},
          },
          'postcss-loader',
        ],
      },
    ],
  },
}
