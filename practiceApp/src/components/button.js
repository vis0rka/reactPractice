import React, { Component } from 'react';

const Button = ({handleClick, label, classProp, btnTpye}) => (
  <div className="center">
  <button className={classProp} onClick={handleClick} type={btnTpye}>{label}</button>
  </div>
);


export default Button;