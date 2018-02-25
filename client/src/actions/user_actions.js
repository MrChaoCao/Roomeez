import * as APIutil from '../util/users_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const fetchUser = (userId) => dispatch => {
  return APIutil.fetchUser(userId)
  .then(serverUser => dispatch(receiveUser(serverUser)));
};

export const fetchCurrentUser = () => dispatch => {
  return APIutil.fetchCurrentUser()
  .then(serverUser => dispatch(receiveCurrentUser(serverUser)));
};

const receiveCurrentUser = payload => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload
  };
};

export const updateUser = data => dispatch => {
  return APIutil.updateUser(data)
    .then(serverUser => dispatch(receiveUser(serverUser)));
};

const receiveUser = payload => {
  return {
    type: RECEIVE_USER,
    payload
  };
};

export const fetchUsers = () => dispatch => {
  return APIutil.fetchUsers()
    .then(serverUsers => dispatch(receiveAllUsers(serverUsers)));
};

const receiveAllUsers = payload => {
  return {
    type: RECEIVE_ALL_USERS,
    payload
  };
};
