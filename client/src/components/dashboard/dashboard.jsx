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
        <h3>{sectionTitle}</h3>
        <button onClick={() => this.props.history.push('/survey')}>
          Edit {sectionTitle}
        </button>
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
      <section className="dashboard content-narrow">

        <img alt="" src={this.props.currentUser.image_url}></img>
        <section className="title-block">
          <h2>{this.props.currentUser.name}s Dashboard</h2>
          {this.renderSubtitle()}
        </section>

        <section className="">
          <div>
            <div className="body-block" id="people-looking">
              <img alt="" src="looking_for_roommates.jpg"></img>
              <h3>Find people looking for roommates</h3>
            </div>
            <div className="body-block" id="groups-looking">
              <img alt="" src="looking_for_groups.jpg"></img>
              <h3>Find groups looking for roommates</h3>
            </div>
          </div>

          <div>
            <div className="body-block" id="pending-invitations">
              <h3>Pending Invitations</h3>
            </div>
            <div className="body-block" id="pending-requests">
              <h3>Pending Requests</h3>
            </div>
          </div>

          <div>
            <div className="body-block" id="past-roommates">
              <h3>Past Roommates</h3>
            </div>
          </div>
        </section>

        {this.renderObjectSection(
          this.props.currentUser.interests, "Interests")}
        {this.renderObjectSection(
          this.props.currentUser.dealbreakers, "Dealbreakers")}
        {this.renderObjectSection(
          this.props.currentUser.thingsIDo, "Things I Do")}
      </section>
    );
  }
}

export default Dashboard;
