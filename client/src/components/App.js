import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HeaderContainer from './Header_container';
const Dashboard = () => <h2>Dashboard</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
        <div>
          <BrowserRouter>
            <div>
              <HeaderContainer/>
              <Route exact path="/" component={Landing}/>
              <Route path="/dashboard" component={Dashboard}/>
            </div>
          </BrowserRouter>
        </div>
      );
    }
  }

export default App;
