import React from 'react';

export class CreateNewGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value}, () => {
      return this.matches().map((result) => {
        return (
          <li key={result._id} onClick={this.selectName}>{result.name}</li>
        );
      });
    });
  }

  selectName(event) {
    let name = event.currentTarget.innerText;
    this.setState({inputVal: name});
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
    return matches;
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
        </div>
      );
    } else {
      return null;
    }
  }
}
