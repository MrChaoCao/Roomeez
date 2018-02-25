import { connect } from 'react-redux';
import App from './App';
import { fetchUser, fetchUsers } from '../actions/user_actions';
import { fetchGroups } from '../actions/group_actions';
import { withRouter } from 'react-router';

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchGroups: () => dispatch(fetchGroups())
  };
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(App));
