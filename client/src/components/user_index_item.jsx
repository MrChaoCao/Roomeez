import React from 'react';
import { Link } from 'react-router-dom';

const renderHref = userId => ("/users/".concat(userId));

const UserIndexItem = ({ user }) => {
  return (
    <div className="user-index-item">
      <Link to={renderHref(user._id)}>
        <img
          className="user-pic no-more-roommates"
          src={user.image_url}>
        </img>
        <h3>{user.name}</h3>
        {
          // <span className="match-percentage"></span>
        }
      </Link>
    </div>
  );
};

export default UserIndexItem;
