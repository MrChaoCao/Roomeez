import { connect } from 'react-redux';
import { CreateNewGroup } from './create_new_group';

const mapStateToProps = state => {
  return {
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
)(CreateNewGroup);
