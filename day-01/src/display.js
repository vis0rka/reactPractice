import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ counter }) => {
  return (
    <div> {counter} </div>
  )
};

Display.propTypes = {
  counter: PropTypes.number.isRequired
};

export default Display;
