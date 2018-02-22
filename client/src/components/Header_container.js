import { connect } from 'react-redux';
import Header from './Header';
import { fetchUser } from '../actions/user_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
