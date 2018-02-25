import $ from "jquery";

export const fetchGroups = () => {
  return $.ajax({
    method: "GET",
    url: `/api/groups`,
    error: err => console.log(err)
  });
};

export const fetchGroup = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/groups/${id}`,
    error: err => console.log(err)
  });
};

export const createGroup = (payload) => {
  return $.ajax({
    method: "POST",
    url: `/api/groups`,
    data: payload,
    error: err => console.log(err)
  });
};

export const deleteGroup = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/groups/${id}`,
    error: err => console.log(err)
  });
};

// potentially not working
// export const updateGroup = (payload) => {
//   return $.ajax({
//     method: "PATCH",
//     url: `/api/groups/${payload.group.id}`,
//     data: payload,
//     error: err => console.log(err)
//   });
// };
