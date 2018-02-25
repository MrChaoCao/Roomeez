import { RECEIVE_CURRENT_USER, RECEIVE_USER } from '../actions/user_actions';

export default function(state = null, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // if the user is logged out, payload will be "",
      // but we want it to be false
      return action.payload || false;
    default:
      return state;
  }
}
