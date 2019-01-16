import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button onClick={props.onclick}>
      {props.label}
    </button>
  )
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired
};

export default Button;
