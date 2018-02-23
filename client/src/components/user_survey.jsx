import React from 'react';

class UserSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: {
        sports: '',
        coding: '',
        music: '',
        video_games: '',
        hiking: ''
      },
      thingsIDo: {
        drinking: '',
        pets: '',
        smoking: ''
      },
      dealbreakers: {
        drinking: '',
        pets: '',
        smoking: ''
      }
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
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

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="user-survey">
        <h1>Tell Us What You Want, What you Really, Really Want...</h1>
          <h2>Interests</h2>
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

          <h2>Tell Us About You</h2>
          <label>I drink
            <input type="checkbox" value="sports" checked={this.state.sports} onChange={this.handleOptionChange} />
          </label>

          <label>I have pets
            <input type="checkbox" value="coding" checked={this.state.coding}  onChange={this.handleOptionChange} />
          </label>

          <label>I smoke
            <input type="checkbox" value="music" checked={this.state.music} onChange={this.handleOptionChange} />
          </label>

          <h2>Tell Us What You DO NOT Want in a Roommate</h2>
          <label>Smokes
            <input type="checkbox" value="video_games" checked={this.state.video_games} onChange={this.handleOptionChange} />
          </label>

          <label>Has Pets
            <input type="checkbox" value="hiking" checked={this.state.hiking} onChange={this.handleOptionChange} />
          </label>

          <label>Drinks
            <input type="checkbox" value="hiking" checked={this.state.hiking} onChange={this.handleOptionChange} />
          </label>
          <br/>
          <button>Submit</button>
        </form>
    );
  }
}

export default UserSurvey;
