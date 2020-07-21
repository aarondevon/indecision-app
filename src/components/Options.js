import React from 'react';
import Option from './Option';

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

export default Options;
