import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  // Keep this method here because it doesn't make sense to have this
  // functionality in the parent
  handleAddOption = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    const error = this.props.onAddOption(option);

    this.setState(() => ({ /* shorthand for error: error*/ error }));

    if (!error) {
      event.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
