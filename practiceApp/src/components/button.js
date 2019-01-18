import React, { Component } from 'react';

const Button = ({handleClick, label, classProp}) => (
  <div className="center">
  <button className={classProp} onClick={handleClick}>{label}</button>
  </div>
);


export default Button;