import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  
    componentDidMount() {
      this.props.fetchUser(this.props.userId);
    }

    render () {
      if (this.props.user){
        return (
          <div className="user_show_container">
            <div className="show-name-and-pic">
              <div className="pic">
                <img src={this.props.user.image_url}/>
              </div>
              <div className="pic-line">
                <h1> {this.props.user.name} </h1>
                <div className="name-line"></div>
              </div>
            </div>

            {this.props.user.interests &&
              <div>
                <h1 className="show-lines">Interests</h1>
                <ul className="show-lists">
                  {Object.keys(this.props.user.interests).map((interest, i) => (
                    <li key={`interest-${i}`}> {interest} </li>
                  ))}
                </ul>
              </div>
            }

            {this.props.user.dealbreakers &&
              <div>
                <h1 className="show-lines">Dealbreakers</h1>
                <ul className="show-lists">
                  {Object.keys(this.props.user.dealbreakers).map((dealbreaker, i) => (
                    <li key={`dealbreaker-${i}`}> {dealbreaker} </li>
                  ))}
                </ul>
              </div>
            }

            {this.props.user.thingsIDo &&
              <div>
                <h1 className="show-lines">Things I Do</h1>
                <ul className="show-lists">
                  {Object.keys(this.props.user.thingsIDo).map((thingsIDo, i) => (
                    <li key={`thingsIDo-${i}`}> {thingsIDo} </li>
                  ))}
                </ul>
              </div>
            }

            {this.props.user.about && (
              <div>
                <h1 className="show-lines">About:
                </h1>
                <p className="show-lists">
                  {this.props.user.about}
                </p>
              </div>
            )
          }


          </div>
        )
      } else {
        return (
          <div></div>
        );
      }
    }
}
export default UserShow;
