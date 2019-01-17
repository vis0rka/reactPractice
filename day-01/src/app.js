import React from 'react';
import BuyAcorn from './redux/containers/buyAcorn';
import EatAcorn from './redux/containers/eatingAcorn';
import DisplayAcorn from './redux/containers/displayAcorn';

const App = () => (
  <div>
    <h1>SimpleGoldenAcornApp</h1>
    <BuyAcorn />
    <DisplayAcorn />
    <EatAcorn />
  </div>
);

export default App;