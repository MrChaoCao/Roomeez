import React from 'react';

export class GroupIndexItem extends React.Component {
  render() {
    // console.log(this.props.users);
    return (
      <div className="group-index-item">
        {this.props.group.name}
        {this.props.group.members.map(member => {
          return this.props.users[member].name;
        })}
      </div>
    );
  }
}
