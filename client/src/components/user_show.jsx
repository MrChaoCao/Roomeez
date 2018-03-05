import React from 'react';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  renderListItems(list) {
    return (
      Object.keys(list).map((item, i) => {
        return (
          Object.values(list)[i] !== "false" && Object.values(list)[i] ? (
            <li key={`interest-${this.props.user._id}-${i}`}> {item} </li>
          ) : (
            null
          )
        );
      })
    );
  }

  render () {
    let user = this.props.user;
    if (user){
      let button;
      if (user.group_id) {
        button = <button onClick={
            () => this.props.history.push(`/groups/${user.group_id}`)
          }>View Group</button>;
        }
      return (
        <div className="user_show_container">
          <div className="show-name-and-pic">
            <div className="pic">
              <img alt="" src={user.image_url}/>
            </div>
            <div className="pic-line">
              <h1> {user.name} </h1>
              <div className="name-line"></div>
            </div>
          </div>

          {user.interests &&
            <div>
              <h1 className="show-lines">Interests</h1>
              <ul className="show-lists">
                {this.renderListItems(user.interests)}
              </ul>
            </div>
          }

          {user.dealbreakers &&
            <div>
              <h1 className="show-lines">Dealbreakers</h1>
              <ul className="show-lists">
                {this.renderListItems(user.dealbreakers)}
              </ul>
            </div>
          }

          {user.thingsIDo &&
            <div>
              <h1 className="show-lines">Things I Do</h1>
              <ul className="show-lists">
                {this.renderListItems(user.thingsIDo)}
              </ul>
            </div>
          }

          {user.about && (
            <div>
              <h1 className="show-lines">About:
              </h1>
              <p className="show-lists">
                {user.about}
              </p>
            </div>
          )
        }
        {button}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}
export default UserShow;
