console.log('app.js is running.');

// JSX JavaScript XML
// let template = <p>This is JSX from app.js</p>;
const app = {
  title: 'Indecision App',
  subtitile: 'Put your life in the hands of a computer',
  options: ['One', 'Two'],
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitile && <p>{app.subtitile}</p>}
    <p>{app.options.length > 0 ? 'Here are you options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
  name: 'Aaron',
  age: 35,
  location: 'Minnetonka',
};

function geLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
};

const minusOne = () => {
  count--;
  renderCounterApp();
};

const reset = () => {
  count = 0;
  renderCounterApp();
};

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

const appRoot = document.getElementById('app');

renderCounterApp();
