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
};
