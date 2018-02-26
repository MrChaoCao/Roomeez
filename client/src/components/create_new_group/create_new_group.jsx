import React from 'react';

export class CreateNewGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      invitations: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.renderInvitationsSent = this.renderInvitationsSent.bind(this);
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  renderInvitationsSent() {
    return (
      <div>
        <h3>Invitations Sent</h3>
      {this.state.invitations.map(name => {
        return <li key={name}>{name}</li>;
      })
    }
    </div>
    );
  }

  sendRequest(e) {
    this.setState({inputVal: ''});
    let newArr = this.state.invitations.concat(e.target.value);
    this.setState({invitations: newArr});
  }

  matches() {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return [];
    }
    Object.values(this.props.users).forEach(user => {
      let sub = user.name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(user.name);
      }
    });

    return matches.map(name => {
      return (
        <div key={name}>
          {name}
          <button value={name} onClick={this.sendRequest}>Request to Add</button>
        </div>
      );
    });
  }

  render() {

    if (Object.keys(this.props.users).length > 0) {
      let results = this.matches();
      return (
        <div>
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Search...'/>
          {results}
          {this.renderInvitationsSent()}
        </div>
      );
    } else {
      return null;
    }
  }
}
