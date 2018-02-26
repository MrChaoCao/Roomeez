import { connect } from 'react-redux';
import { fetchUser } from '../actions/user_actions';
import { withRouter } from 'react-router-dom';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
  let userId = ownProps.match.params.userId;
  return {
    userId: ownProps.match.params.userId,
    user: state.entities.users[userId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow));
