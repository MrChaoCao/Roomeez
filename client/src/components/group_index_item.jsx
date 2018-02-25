import React from 'react';

export class GroupIndexItem extends React.Component {
  render() {
    return (
      <a href={`/groups/${this.props.group._id}`}>
      <div className="group-index-item">
        <h3>{this.props.group.name}</h3>
        <div className="group-index-member-list">
          {this.props.group.members.map(member => {
            return <img alt={this.props.users[member].name}
              src={this.props.users[member].image_url} key={member}/>;
          })}
        </div>
      </div>
    </a>
    );
  }
}
