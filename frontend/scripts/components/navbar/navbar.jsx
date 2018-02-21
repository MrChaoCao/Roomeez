import React from 'react';
import { Link } from 'react-router-dom';


const sessionLinks = () => (
  <div className="nav-bar">
    <nav className="session-buttons">
      <link to="/signin">  </link>
      <link to="/signup">  </link>
    </nav>
  </div>
);

const userLinks = (currentUser, logout) => (
	<nav className="nav-right">
    <button className="header-button" onClick={logout}>Log Out</button>
	</nav>
);

const Navbar = ({ currentUser, logout }) => (
  currentUser ? userLinks(currentUser, logout) : sessionLinks()
);

export default Navbar;
