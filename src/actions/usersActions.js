import { FETCH_USERS, FETCH_USER, NEW_USER, EDIT_USER, DELETE_USER } from "./types";

export const fetchUsers = () => (dispatch) => {
  console.log("fetching users");
  fetch(`/users`)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: FETCH_USERS,
        payload: data,
      })
    );
};

export const fetchUser = (id) => (dispatch) => {
  console.log("fetching user");
  fetch(`/users/` + id)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: FETCH_USER,
        payload: data,
      })
    );
};

export const createUser = (newData) => (dispatch) => {
  fetch("/users", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: NEW_USER,
        payload: data,
      })
    );
};

export const editUser = (id, newData) => (dispatch) => {
  fetch(`/users/${id}`, {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: EDIT_USER,
        payload: data,
      })
    );
};

export const deleteUser = (id, newData) => (dispatch) => {
  fetch(`/users/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: DELETE_USER,
        payload: data,
      })
    );
};
