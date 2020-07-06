'use strict';

console.log('app.js is running.');

// JSX JavaScript XML
// let template = <p>This is JSX from app.js</p>;
var template = React.createElement('h1', null);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Aaron Sawyer'
  ),
  React.createElement(
    'p',
    null,
    'Age: 35'
  ),
  React.createElement(
    'p',
    null,
    'Location: Minnetonka'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
