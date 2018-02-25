import { connect } from 'react-redux';
import { fetchUser } from '../actions/user_actions';
import { withRouter } from 'react-router-dom';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId,
    user: state.entities.users.shownUser,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow));
