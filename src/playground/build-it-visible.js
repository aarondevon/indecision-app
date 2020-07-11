let toggle = false;

const onToggle = (event) => {
  toggle = !toggle;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>
        {toggle ? 'Hide Details' : 'Show Details'}
      </button>
      {toggle && <p>This is the data yo</p>}
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'));
};

render();
