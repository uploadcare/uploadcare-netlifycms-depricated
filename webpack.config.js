const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  plugins: [],
  output: {
    filename: 'uploadcare-netlifycms.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {extensions: ['*', '.js']},
  externals: {
    'react': 'react',
    'netlify-cms': 'netlify-cms',
  },
  devtool: false,
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
    ],
  },
}
