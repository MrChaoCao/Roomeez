import { connect } from 'react-redux';
import App from './App';
import { fetchUser } from '../actions/user_actions';
import { withRouter } from 'react-router';

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser())
  };
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(App));
