import {
  RECEIVE_ALL_USERS,
  RECEIVE_USER
 } from '../actions/user_actions';
import { merge } from 'lodash';
export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return { ...state, ...action.payload};
    case RECEIVE_USER:
      return merge({}, state, {[action.payload._id]: action.payload });
    default:
      return state;
  }
};
