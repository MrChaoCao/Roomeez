import React from 'react';

class GroupUserIndex extends React.Component {
  render() {
    return (
      <div className="group-user-index">
        {
          this.props.users.map(user => {
            return (
              <div className="group-user" key={user._id}>
                <img src={`${user.image_url}`}
                     onClick={() => this.props.history.push(`/users/${user._id}`)}
                     alt={user.name}/>
                <span>{user.name}</span>
              </div>
            );
          })
        }
      </div>
    );
  }

}

export default GroupUserIndex;
