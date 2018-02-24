import { connect } from 'react-redux';
import UserSurvey from './user_survey';
import { updateUser } from '../actions/user_actions';

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSurvey);
