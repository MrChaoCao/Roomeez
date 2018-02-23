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
          <div className="user-nav-icons">
            <a href="/api/logout">
              <div className="header-links">
                Logout
              </div>
            </a>
            <img
              className="profile-image" src={this.props.currentUser.image_url}/>
          </div>

        );

    }
  }

  render(){
    return (
      <div className="header">
        <div className="header-title">
          <a href="/"><h1>Roommez</h1></a>
        </div>
          {this.renderContent()}
      </div>
    );
  }
}

export default Header;
