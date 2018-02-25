import * as GroupAPIUtil from '../util/groups_api_util';

export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const REMOVE_GROUP = "REMOVE_GROUP";

export const receiveGroups = (groups) => {
  return {
    type: RECEIVE_GROUPS,
    groups
  };
};

export const receiveGroup = (group) => {
  return {
    type: RECEIVE_GROUP,
    group
  };
};

export const removeGroup = (groupId) => {
  return {
    type: REMOVE_GROUP,
    groupId
  };
};

export const fetchGroups = (deckId) => dispatch => {
  return GroupAPIUtil.fetchGroups(deckId)
      .then((groups) => dispatch(receiveGroups(groups)));
};

export const fetchGroup = (id) => dispatch => {
  return GroupAPIUtil.fetchGroup(id)
      .then((group) => dispatch(receiveGroup(group)));
};

export const deleteGroup = (id) => dispatch => {
  return GroupAPIUtil.deleteGroup(id)
      .then(() => dispatch(removeGroup(id)));
};

export const createGroup = (payload) => dispatch => {
  return GroupAPIUtil.createGroup(payload)
      .then((group) => dispatch(receiveGroup(group)));
};
