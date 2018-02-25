import { connect } from 'react-redux';
import GroupShow from './group_show';
import { fetchGroup } from '../../actions/group_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectUsers } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let groupId = ownProps.match.params.groupId;
  return {
    groupId: groupId,
    groups: state.entities.groups,
    users: selectUsers(state.entities, groupId)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchGroup: (id) => dispatch(fetchGroup(id)),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);
