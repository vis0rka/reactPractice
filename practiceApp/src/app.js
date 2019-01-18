import React from 'react';
import Navbar from './components/navbar';
import Posts from './components/posts';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SinglePost from './components/singlePost'
import history from "./history";
import { Router } from "react-router-dom";
import AddPost from './components/addPost';

const App = () => (
  <Router history={history}>
    <div className="container">
      <Navbar />
      <Switch>
      <Route exact path='/' component={Posts} />
      <Route path='/addpost' component={AddPost} />
      <Route path='/:post_id' component={SinglePost} />
      </Switch>
    </div>
  </Router>
);

export default App;