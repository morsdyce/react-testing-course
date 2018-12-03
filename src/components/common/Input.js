import React from 'react';

const Input = (props) => (
  <input
    type="text"
    value={props.value}
    placeholder="new movie"
    onChange={props.onChange} />
);

export default Input;
