import { connect } from 'react-redux';
import GroupIndex from './group_index';

const mapStateToProps = state => {
  return {
    groups: state.entities.groups,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupIndex);
