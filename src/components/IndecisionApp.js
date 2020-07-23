import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOptions: undefined,
  };

  handleDeleteOptions = () => {
    // Wrap objects in () to implicitly return an obeject
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter(
          (option) => option !== optionToRemove
        ),
      };
    });
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState({
      selectedOption: option,
    });
  };

  handleCleareSelectedOptions = () => {
    this.setState({
      selectedOption: undefined,
    });
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter vlaid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

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
        <OptionModal
          selectedOption={this.state.selectedOption}
          onCloseModal={this.handleCleareSelectedOptions}
        />
      </div>
    );
  }
}
