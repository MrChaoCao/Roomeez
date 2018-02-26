import React from 'react';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render () {
    let user = this.props.user;
    if (user){
      let button;
      if (user.group_id) {
        button = <button onClick={
            () => this.props.history.push(`/groups/${user.group_id}`)
          }>View Your Group</button>;
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
                {Object.keys(user.interests).map((interest, i) => (
                  <li key={`interest-${i}`}> {interest} </li>
                ))}
              </ul>
            </div>
          }

          {user.dealbreakers &&
            <div>
              <h1 className="show-lines">Dealbreakers</h1>
              <ul className="show-lists">
                {Object.keys(user.dealbreakers).map((dealbreaker, i) => (
                  <li key={`dealbreaker-${i}`}> {dealbreaker} </li>
                ))}
              </ul>
            </div>
          }

          {user.thingsIDo &&
            <div>
              <h1 className="show-lines">Things I Do</h1>
              <ul className="show-lists">
                {Object.keys(user.thingsIDo).map((thingsIDo, i) => (
                  <li key={`thingsIDo-${i}`}> {thingsIDo} </li>
                ))}
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
