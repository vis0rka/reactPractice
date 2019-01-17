import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home';
import Stateful from './components/withstate/stateApp'
import Redux from './components/withredux/redux'

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/state' component={Stateful} />
      <Route path='/redux' component={Redux} />
    </div>
  </BrowserRouter>
);

export default App;