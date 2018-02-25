import React from 'react';
import UserIndexItem from './user_index_item';

const UserIndex = ({ users }) => {
  return (
    <section className="user-index content-narrow">
      <ul>
        {
          Object.keys(users).map(userId => (
            <li key={userId}>
              <UserIndexItem user={users[userId]} />
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default UserIndex;
