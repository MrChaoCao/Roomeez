import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import { groupsReducer } from './groups_reducer';

export default combineReducers({
  users: usersReducer,
  groups: groupsReducer
});
