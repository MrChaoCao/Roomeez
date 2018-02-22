import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class UserShow extends React.Component {
  constructor(props) {
    super(props);

  render () {
    return (
      <div>
        <div className="name-and-pic">
          <img src={this.props.user.img_url}/>
          <h1> {This.props.user.name} </h1>
        </div>

        <ul>Interests
          <li></li>
        </ul>
      </div>
    )
  }
}

export default BookShowModal;
