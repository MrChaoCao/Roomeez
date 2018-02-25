import React from 'react';

class GroupUserIndex extends React.Component {
  render() {
    let users = this.props.users;
    return (
      <div className="group-user-index">
        {
          this.props.users.map(user => {
            return (
              <div className="group-user">
                <img src={`${user.image_url}`}/>
                <span key={user._id}>{user.name}</span>
              </div>
            );
          })
        }
      </div>
    );
  }

}

export default GroupUserIndex;
