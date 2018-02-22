import React from 'react';

class Header extends React.Component {
  renderContent(){
    switch (this.props.currentUser) {
      case null:
        return;
      case false:
        return (
          <a href="/auth/facebook">Login</a>
        );
      default:
        return (
          <a href="/api/logout">Logout</a>
        );

    }
  }

  render(){
    return (
      <div className="header">
        <div className="hero-title">
          Roommez
        </div>
        <div className="header-links">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default Header;
