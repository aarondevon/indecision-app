console.log('app.js is running.');

// JSX JavaScript XML
// let template = <p>This is JSX from app.js</p>;
let template = /*#__PURE__*/ React.createElement(
  'p',
  null,
  'This is JSX from app.js'
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
