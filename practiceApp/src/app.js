import React from 'react';
import Navbar from './components/navbar';
import Posts from './components/posts';
import { BrowserRouter, Route } from 'react-router-dom';
import SinglePost from './components/singlePost'

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Navbar />
      <Route exact path='/' component={Posts} />
      <Route path='/:post_id' component={SinglePost} />
    </div>
  </BrowserRouter>
);

export default App;