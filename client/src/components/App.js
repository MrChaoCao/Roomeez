import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './landing';
import UserSurveyContainer from './user_survey_container';

import HeaderContainer from './Header_container';
import DashboardContainer from './dashboard/dashboard_container';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchUsers();
  }

  render() {
    return (
        <div>
          <BrowserRouter>
            <div>
              <HeaderContainer/>
              <Route exact path="/" component={Landing}/>
              <Route path="/survey" component={UserSurveyContainer}/>
              <Route path="/dashboard" component={DashboardContainer}/>
            </div>
          </BrowserRouter>
        </div>
      );
    }
  }

export default App;
