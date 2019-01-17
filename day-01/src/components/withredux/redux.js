import React from 'react';
import BuyAcorn from '../../redux/containers/buyAcorn';
import EatAcorn from '../../redux/containers/eatingAcorn';
import DisplayAcorn from '../../redux/containers/displayAcorn';
import KeyPress from '../../../src/redux/containers/keypress'

const Redux = () => (
  <div className="container">
    <h1>Simple Golden Acorn App with redux</h1>
    <KeyPress />
    <BuyAcorn />
    <DisplayAcorn />
    <EatAcorn />
  </div>
);

export default Redux;