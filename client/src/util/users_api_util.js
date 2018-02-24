import $ from 'jquery';

export const fetchUser = () => {
  return $.ajax({
    url: `/api/current_user`
  });
};

export const updateUser = data => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${data.id}`,
    data: data
  });
};
