import { connect } from 'react-redux';
import App from './App';
import { fetchUser } from '../actions/user_actions';

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
