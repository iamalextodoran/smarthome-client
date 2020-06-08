import { FETCH_ROOMS, NEW_ROOM } from "./types";

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
