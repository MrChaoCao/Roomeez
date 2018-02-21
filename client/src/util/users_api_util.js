import $ from 'jquery';

export const fetchUser = () => {
  return $.ajax({
    url: `/api/current_user`
  });
};
