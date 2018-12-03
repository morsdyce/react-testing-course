import React from 'react';

export const Button = (props) => (
  <div className="button" onClick={props.onClick}>{props.children}</div>
);

export default Button;
