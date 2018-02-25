import {
  RECEIVE_ALL_USERS,
  RECEIVE_USER
 } from '../actions/user_actions';

export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return { ...state, ...action.payload};
    case RECEIVE_USER:
      const newState = { ...state };
      newState.shownUser = action.payload;
      return newState;
    default:
      return state;
  }
};
