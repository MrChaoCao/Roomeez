import { connect } from 'react-redux';
import App from './App';
import { fetchCurrentUser, fetchUsers } from '../actions/user_actions';
import { fetchGroups } from '../actions/group_actions';
import { withRouter } from 'react-router';

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchGroups: () => dispatch(fetchGroups())
  };
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(App));
