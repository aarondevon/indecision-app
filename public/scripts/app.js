'use strict';

var toggle = false;

var onToggle = function onToggle(event) {
  toggle = !toggle;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: onToggle },
      toggle ? 'Hide Details' : 'Show Details'
    ),
    toggle && React.createElement(
      'p',
      null,
      'This is the data yo'
    )
  );

  ReactDOM.render(template, document.getElementById('app'));
};

render();
