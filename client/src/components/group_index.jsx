import React from 'react';
import { GroupIndexItem } from './group_index_item';

class GroupIndex extends React.Component {

  render() {
    console.log(this.props);
    if (Object.keys(this.props.groups).length > 0) {
      return (
        <div>
          {Object.values(this.props.groups).map(group => {
            return <GroupIndexItem group={group} key={group._id}/>;
          })}
        </div>
      );
    } else {
      return null;
    }

  }
}

export default GroupIndex;
