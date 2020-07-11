console.log('app.js is running.');

// JSX JavaScript XML
// let template = <p>This is JSX from app.js</p>;
const app = {
  title: 'Indecision App',
  subtitile: 'Put your life in the hands of a computer',
  options: [],
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const option = event.target.elements.option.value;

  if (option) {
    app.options.push(option);
    event.target.elements.option.value = '';
  }
  render();
};

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  alert(option);
};

const removeAll = () => {
  app.options.length = 0;
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitile && <p>{app.subtitile}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input action="#" type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  console.log(app.options);
  ReactDOM.render(template, appRoot);
};

render();
