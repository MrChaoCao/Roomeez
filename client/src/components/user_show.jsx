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

        <ul className="errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>

        <ul className="interests"> Interests
          {this.props.interests.map(interest, i) => (
            <li key={`interest-${i}`} {interest}/>
          )}
        </ul>

        <ul className="dealbreakers"> Dealbreakers
          {this.props.dealbreakers.map(dealbreaker, i) => (
            <li key={`dealbreaker-${i}`} {dealbreaker}/>
          )}
        </ul>

        <ul className="about-me"> About Me
          {this.props.about}
        </ul>

        <ul className="reviews"> Reviews
          {this.props.reviews.map(review, i) => (
            <li key={`review-${i}`} {review}/>
          )}
        </ul>

      </div>
    )
  }
}

export default BookShowModal;
