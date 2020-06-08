import { FETCH_USERS, NEW_USER } from "./types";

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