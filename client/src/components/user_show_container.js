import { connect } from 'react-redux';
import { fetchUser } from '../actions/user_actions';
import { withRouter } from 'react-router-dom';
import UserShow from './user_show'

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    user: ownProps.user,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
