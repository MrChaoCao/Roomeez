import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './landing';
import UserSurveyContainer from './user_survey_container';
import UserShowContainer from './user_show_container';
import HeaderContainer from './Header_container';
import DashboardContainer from './dashboard/dashboard_container';
import GroupIndexContainer from './group_index_container';
import UserIndexContainer from './user_index_container';
import GroupShowContainer from './group_show/group_show_container';
import CreateNewGroupContainer from './create_new_group/create_new_group_container';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
    this.props.fetchUsers();
    this.props.fetchGroups();
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
              <Route exact path="/users/:userId" component={UserShowContainer}/>
              <Route exact path="/groups" component={GroupIndexContainer}/>
              <Route exact path="/users/" component={UserIndexContainer}/>
              <Route exact path="/groups/:groupId" component={GroupShowContainer}/>
              <Route exact path="/groups/new" component={CreateNewGroupContainer}/>
            </div>
          </BrowserRouter>
        </div>
      );
    }
  }

export default App;
