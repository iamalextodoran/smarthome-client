import { FETCH_ROOMS, NEW_ROOM, EDIT_ROOM, DELETE_ROOM } from "./types";

export const fetchRooms = () => (dispatch) => {
  console.log("fetching rooms");
  fetch(`/rooms`)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: FETCH_ROOMS,
        payload: data,
      })
    );
};

export const createRoom = (newData) => (dispatch) => {
  fetch("/rooms", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: NEW_ROOM,
        payload: data,
      })
    );
};

export const editRoom = (id, newData) => (dispatch) => {
  fetch(`/rooms/${id}`, {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: EDIT_ROOM,
        payload: data,
      })
    );
};

export const deleteRoom = (id, newData) => (dispatch) => {
  fetch(`/rooms/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: DELETE_ROOM,
        payload: data,
      })
    );
};
