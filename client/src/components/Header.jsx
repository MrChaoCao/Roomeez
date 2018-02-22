import React from 'react';

class Header extends React.Component {
  renderContent(){
    switch (this.props.currentUser) {
      case null:
        return;
      case false:
        return (
          <a href="/auth/facebook">
            <div className="header-links">
              Login with Facebook
            </div>
          </a>
        );
      default:
        return (
          <a href="/api/logout">
            <div className="header-links">
              Logout
            </div>
          </a>
        );

    }
  }

  render(){
    return (
      <div className="header">
        <div className="hero-title">
          <a href="/"><h1>Roommez</h1></a>
        </div>
          {this.renderContent()}
      </div>
    );
  }
}

export default Header;
