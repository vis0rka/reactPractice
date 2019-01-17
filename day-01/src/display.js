import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ counter }) => (
  <div> <h2>{counter}</h2> </div>
);

Display.propTypes = {
  counter: PropTypes.number.isRequired
}; 

export default Display;
