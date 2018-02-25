import $ from 'jquery';

export const fetchCurrentUser = () => {
  return $.ajax({
    url: `/api/current_user`
  });
};

export const fetchUser = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}`
  });
};

export const fetchUsers = () => {
  return $.ajax({
    url: `/api/users`
  });
};

export const updateUser = data => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${data.id}`,
    data: data
  });
};
