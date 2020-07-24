// this file must be in the root directory

// node module gives access to path.join
const path = require('path');

// entry -> output
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
};

// loader
