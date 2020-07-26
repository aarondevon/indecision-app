import React from 'react';

const Option = (props) => {
  return (
    <div className="option">
      <p className="option__text">
        {props.count}. {props.optionText}
      </p>
      <button
        className="button button--link"
        onClick={(event) => {
          props.onDeleteOption(props.optionText);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Option;
