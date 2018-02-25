import React from 'react';

export class GroupIndexItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.group.name}
      </div>
    );
  }
}
