import React from 'react';
import { Link } from 'react-router-dom';

const PastRoommates = ({ users, pastRoommates }) => {
  return (
    <div className="past-roommates">
      <ul>
        {
          pastRoommates.map((userId) => (
            <li></li>
          ))
        }
      </ul>
    </div>
  );
};

export default PastRoommates;
