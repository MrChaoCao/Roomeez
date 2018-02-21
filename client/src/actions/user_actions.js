import * as APIutil from '../util/users_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const fetchUser = () => dispatch => {
  return APIutil.fetchUser()
  .then(serverUser => dispatch(receiveUser(serverUser)));
};

const receiveUser = payload => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload
  };
};
