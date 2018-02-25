export const selectUsers = ({ users }, groupId) => {
  let selected = [];
  Object.values(users).forEach((user) => {
    if (user.group_id === groupId) {
      selected.push(user);
    }
  });
  return selected;
};
