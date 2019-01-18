import React from 'react';
import history from "../history";
import Button from './button'

const Navbar = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Simple Blog App</a>
      <ul className="right hide-on-med-and-down">
        <li><a onClick={() => { history.push('/') }}>Home</a></li>
        <li><a onClick={() => { history.push('/addpost') }}>Add Post</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;