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
            <p className="nametag">| {this.props.currentUser.name}</p>
            <img
              className="profile-image" src={this.props.currentUser.image_url}/>
          </div>
<<<<<<< HEAD
=======

>>>>>>> 3ea700c476b8f18d48f97aac9ac50e29a688b548
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
