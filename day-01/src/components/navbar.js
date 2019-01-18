import React from 'React';
import { Link, Navlink} from 'react-router-dom';


const Navbar = () => (
  <nav className="navigation">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/state">State</Link></li>
      <li><Link to="/redux">Redux</Link></li>
    </ul>
  </nav>
);

export default Navbar;