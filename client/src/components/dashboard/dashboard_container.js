import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { deleteGroup } from '../../actions/group_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    groups: state.entities.groups,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  // Delete group if admin, otherwise, just leave
  return {
    // leaveGroup: dispatch(),
    deleteGroup: dispatch(deleteGroup)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
