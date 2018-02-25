import React from 'react';

class UserSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sports: '',
      coding: '',
      music: '',
      video_games: '',
      hiking: '',
      thingsIDoDrinking: '',
      thingsIDoPets: '',
      thingsIDoSmoking: '',
      drinking: '',
      pets: '',
      smoking: ''
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOptionChange(e) {
    let val = e.target.value;
    let pastState = this.state[val];

    if (pastState === 'checked') {
      pastState = '';
    } else {
      pastState = 'checked';
    }
    this.setState({
      [val]: pastState
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newState = Object.assign({}, this.state);
    for (var property in newState) {
        if (newState[property] === 'checked') {
          newState[property] =  true;
        } else {
          newState[property] =  false;
        }
      }
      let newObj = {
        interests: {
          sports: newState.sports,
          coding: newState.coding,
          music: newState.music,
          video_games: newState.video_games,
          hiking: newState.hiking
        },
        thingsIDo: {
          drinking: newState.thingsIDoDrinking,
          pets: newState.thingsIDoPets,
          smoking: newState.thingsIDoSmoking
        },
        dealbreakers: {
          drinking: newState.drinking,
          pets: newState.pets,
          smoking: newState.smoking
        },
        id: this.props.currentUser._id
      };
      this.props.updateUser(newObj).then(() => this.props.history.push('/dashboard'));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="user-survey">
        <h1>Tell Us What You Want, What you Really, Really Want...</h1>
          <h2>What You're Into</h2>
          <label>Sports
            <input type="checkbox" value="sports" checked={this.state.sports} onChange={this.handleOptionChange} />
          </label>

          <label>Coding
            <input type="checkbox" value="coding" checked={this.state.coding}  onChange={this.handleOptionChange} />
          </label>

          <label>Music
            <input type="checkbox" value="music" checked={this.state.music} onChange={this.handleOptionChange} />
          </label>

          <label>Video Games
            <input type="checkbox" value="video_games" checked={this.state.video_games} onChange={this.handleOptionChange} />
          </label>

          <label>Hiking
            <input type="checkbox" value="hiking" checked={this.state.hiking} onChange={this.handleOptionChange} />
          </label>
          <br/>

          <h2>About You</h2>
          <label>I drink
            <input type="checkbox" value="thingsIDoDrinking" checked={this.state.thingsIDoDrinking} onChange={this.handleOptionChange} />
          </label>

          <label>I have pets
            <input type="checkbox" value="thingsIDoPets" checked={this.state.thingsIDoPets}  onChange={this.handleOptionChange} />
          </label>

          <label>I smoke
            <input type="checkbox" value="thingsIDoSmoking" checked={this.state.thingsIDoSmoking} onChange={this.handleOptionChange} />
          </label>
          <br/>

          <h2>What You DO NOT Want in a Roommate</h2>
          <label>Smokes
            <input type="checkbox" value="smoking" checked={this.state.smoking} onChange={this.handleOptionChange} />
          </label>

          <label>Has Pets
            <input type="checkbox" value="pets" checked={this.state.pets} onChange={this.handleOptionChange} />
          </label>

          <label>Drinks
            <input type="checkbox" value="drinking" checked={this.state.drinking} onChange={this.handleOptionChange} />
          </label>
          <br/>
          <button>Submit</button>
        </form>
    );
  }
}

export default UserSurvey;
