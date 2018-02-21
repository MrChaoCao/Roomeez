import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render(){
    return (
      <div>
        <a href="//localhost:5000/auth/facebook">Login</a>
        <a href="//localhost:5000/api/logout">Logout</a>
      </div>
    );
  }
}

export default Header;
