'use strict';

console.log('app.js is running.');

// JSX JavaScript XML
// let template = <p>This is JSX from app.js</p>;
var template = /*#__PURE__*/React.createElement('h1', null, 'Did this change?');
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
