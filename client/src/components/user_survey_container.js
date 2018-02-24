import { connect } from 'react-redux';
import UserSurvey from './user_survey';
import { updateUser } from '../actions/user_actions';
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: data => dispatch(updateUser(data))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSurvey));
