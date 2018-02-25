import { connect } from 'react-redux';

import UserIndex from './user_index';

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => (
  {}
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIndex);
