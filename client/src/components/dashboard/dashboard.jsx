import React from 'react';
// import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  renderGroup(currentUserGroup) {
    let groupMembers = [];
    currentUserGroup.members.forEach((userId) => {
      if (this.props.currentUser._id !== userId) {
        groupMembers.push(this.props.users[userId]);
      }
    });

    return (
      <div>
        <h2>My group: {currentUserGroup.name}</h2>
        <div className="group-member-pics">
          {
            groupMembers.map((user) => (
              <img
                alt=""
                className="user-pic no-more-roommates"
                key={user._id}
                src={user.image_url}>
              </img>
            ))
          }
        </div>
      </div>
    );
  }

  renderSubtitle() {
    let groupId = this.props.currentUser.group_id;

    // User does not belong to a group yet
    if (groupId === null) {
      return (
        <div>
          <h2>Start a new group!</h2>
          <button to='/groups/new'>Create New Group</button>
        </div>
      );
    }

    let currentUserGroup = this.props.groups[groupId];

    // User is group admin
    if (this.props.currentUser.admin) {
      return (
        <div>
          {this.renderGroup(currentUserGroup)}
          <div>
            <button onClick={this.props.deleteGroup}>Delete Group</button>
          </div>
        </div>
      );
    } else {
      // User in a group but not admin
      return (
        <div>
          {this.renderGroup(currentUserGroup)}
          <div>
            <button>Leave Group</button>
          </div>
        </div>
      );
    }
  }

  render() {
    if (Object.keys(this.props.users).length === 0 ||
        Object.keys(this.props.groups).length === 0 ||
        this.props.currentUser === null ||
        this.props.currentUser === false
       )
    {
      return null;
    }

    return (
      <section className="dashboard">

        <img className="dash-pic" alt="" src={this.props.currentUser.image_url}></img>
        <section className="title-block">
          <h1>{this.props.currentUser.name}s Dashboard</h1>
          {this.renderSubtitle()}
        </section>

        <section className="body-block">
        </section>

        {this.props.currentUser.interests &&
          <div>
            <h1 className="show-lines">Interests</h1>
            <ul className="show-lists">
              {Object.keys(this.props.currentUser.interests).map((interest, i) => (
                <li key={`interest-${i}`}> {interest} </li>
              ))}
            </ul>
          </div>
        }

        {this.props.currentUser.dealbreakers &&
          <div>
            <h1 className="show-lines">Dealbreakers</h1>
            <ul className="show-lists">
              {Object.keys(this.props.currentUser.dealbreakers).map((dealbreaker, i) => (
                <li key={`dealbreaker-${i}`}> {dealbreaker} </li>
              ))}
            </ul>
          </div>
        }

        {this.props.currentUser.thingsIDo &&
          <div>
            <h1 className="show-lines">Things I Do</h1>
            <ul className="show-lists">
              {Object.keys(this.props.currentUser.thingsIDo).map((thingsIDo, i) => (
                <li key={`thingsIDo-${i}`}> {thingsIDo} </li>
              ))}
            </ul>
          </div>
        }




        Dashboard
        <a href="/survey">Take Survey</a>
      </section>
    );
  }
}

export default Dashboard;
