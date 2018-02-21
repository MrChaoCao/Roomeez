import React from 'react';

class Header extends React.Component {
  // The links need to be <a> tags. NOT <Link>
  render(){
    return (
      <div>
        <a href="/auth/facebook">Login</a>
        <a href="/api/logout">Logout</a>
      </div>
    );
  }
}

export default Header;
