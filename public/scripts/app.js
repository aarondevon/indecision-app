'use strict';

console.log('app.js is running.');

// JSX JavaScript XML
// let template = <p>This is JSX from app.js</p>;
var app = {
  title: 'Indecision App',
  subtitile: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitile && React.createElement(
    'p',
    null,
    app.subtitile
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are you options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'Aaron',
  age: 35,
  location: 'Minnetonka'
};

function geLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var appRoot = document.getElementById('app');

renderCounterApp();
