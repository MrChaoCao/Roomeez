import { RECEIVE_ALL_USERS } from '../actions/user_actions';

export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.payload;
    default:
      return state;
  }
};
