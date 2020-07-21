import React from 'react';
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      // This allows me to configure the default state if I wanted.
      options: [],
    };
  }

  // React life cycle method
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      console.log(options);
      if (options) {
        this.setState({
          options: options,
        });
        console.log('fetching data');
      }
    } catch (error) {}
  }
  // React life cycle method
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('saving data');
    }
  }

  handleDeleteOptions() {
    // Wrap objects in () to implicitly return an obeject
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter(
          (option) => option !== optionToRemove
        ),
      };
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter vlaid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          onPick={this.handlePick}
        />
        <Options
          options={this.state.options}
          onDeleteAll={this.handleDeleteOptions}
          onDeleteOption={this.handleDeleteOption}
        />
        <AddOption onAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision',
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.onPick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.onDeleteAll}>Remove All</button>
      {props.options.length === 0 && (
        <p>Please add an option to get started.</p>
      )}
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          onDeleteOption={props.onDeleteOption}
        />
      ))}
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(event) => {
          props.onDeleteOption(props.optionText);
        }}
      >
        Delete
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  // Keep this method here because it doesn't make sense to have this
  // functionality in the parent
  handleAddOption(event) {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    const error = this.props.onAddOption(option);

    this.setState(() => ({ /* shorthand for error: error*/ error }));

    if (!error) {
      event.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
