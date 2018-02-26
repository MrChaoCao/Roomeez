import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  renderGroupPics(currentUserGroup) {
    let groupMembers = [];
    currentUserGroup.members.forEach((userId) => {
      if (this.props.currentUser._id !== userId) {
        groupMembers.push(this.props.users[userId]);
      }
    });

    return (
      <div className="group-member-pics">
        {
          groupMembers.map((user) => (
            <Link to={`users/${user._id}`}>
              <img
                alt=""
                className="roommate-pics no-more-roommates"
                key={user._id}
                src={user.image_url}>
              </img>
            </Link>
          ))
        }
      </div>
    );
  }

  renderObjectSection(obj, objectName) {
    let sectionTitle;
    if (objectName !== "Things I Do") {
      sectionTitle = "My ".concat(objectName);
    } else {
      sectionTitle = "About You";
    }

    let trueKeys = [];
    Object.keys(obj).forEach((key) => {
      if (obj[key] === "true") {
        trueKeys.push(key);
      }
    });

    return (
      <section className="interests-dbs-tid">
        <div>
          <h3>{sectionTitle}</h3>
          <button onClick={() => this.props.history.push('/survey')}>
            Edit {sectionTitle}
          </button>
        </div>
        <ul>
          {
            trueKeys.map((key) => (
              <li key={key}>{key}</li>
            ))
          }
        </ul>
      </section>
    );
  }

  renderSubtitle() {
    let groupId = this.props.currentUser.group_id;

    // User does not belong to a group yet
    if (groupId === null) {
      return (
        <div className="subtitle">
          <h2>Start a new group!</h2>
          <button to='/groups/new'>Create New Group</button>
        </div>
      );
    }

    let currentUserGroup = this.props.groups[groupId];

    // User is group admin
    if (this.props.currentUser.admin) {
      return (
        <div className="group-subtitle">
          <div className="dash-group-header">
            <h2 className="dash-my-group">My group: {currentUserGroup.name}</h2>
            <button onClick={this.props.deleteGroup}>Delete Group</button>
          </div>
          {this.renderGroupPics(currentUserGroup)}
        </div>
      );
    } else {
      // User in a group but not admin
      return (
        <div className="group-subtitle">
          <div className="dash-group-header">
            <h2 className="dash-my-group">My group: {currentUserGroup.name}</h2>
            <button>Leave Group</button>
          </div>
          {this.renderGroupPics(currentUserGroup)}
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
      <div className="dash-div">
        <section className="title-block">
          <div>
            <div className="dash-header">
              <img
                className="dash-pic"
                alt=""
                src={this.props.currentUser.image_url}
                />
              <div className="name-and-survey">
                <h2 className="dash-title"> {this.props.currentUser.name} Dashboard</h2>

              </div>
          </div>

          </div>


          <div className="subtitle-container">
            {this.renderSubtitle()}
          </div>
        </section>

        <main>
          <div className="search-blocks">
            <div className="search-block" id="people-looking">
              <Link to="/users">
                <div className="icon-holder">
                  <i id="search-icon" className="fas fa-user-circle"/>
                </div>
                  <p>
                    Find people looking for roommates
                  </p>
              </Link>
            </div>
            <div className="search-block" id="groups-looking">
              <Link to="/groups">
                <div className="icon-holder">
                  <i id="search-icon" className="fas fa-users"/>
                </div>
                <p>
                  Find groups looking for roommates
                </p>
              </Link>
            </div>
          </div>

        </main>
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

        {this.props.currentUser.about && (
          <div>
            <h1 className="show-lines">About:
            </h1>
            <p className="show-lists">
              {this.props.currentUser.about}
            </p>
          </div>


        )
      }
      <button className="survey-button" onClick={() => this.props.history.push('/survey')}>
        Take the Survey!
      </button>
    </div>
    );
  }
}

export default Dashboard;
