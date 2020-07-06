console.log('app.js is running.');

// JSX JavaScript XML
// let template = <p>This is JSX from app.js</p>;
let template = <h1></h1>;

let templateTwo = (
  <div>
    <h1>Aaron Sawyer</h1>
    <p>Age: 35</p>
    <p>Location: Minnetonka</p>
  </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
