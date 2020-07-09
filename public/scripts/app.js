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

var count = 0;

var addOne = function addOne() {
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

var appRoot = document.getElementById('app');

renderCounterApp();
