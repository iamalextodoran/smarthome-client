import { FETCH_DEVICES, NEW_DEVICE, EDIT_DEVICE, DELETE_DEVICE } from "./types";

export const fetchDevices = (id) => (dispatch) => {
  fetch(`/api/${id}/devices`)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: FETCH_DEVICES,
        payload: data,
      })
    );
};

export const createDevice = (newData) => (dispatch) => {
  fetch("/devices", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: NEW_DEVICE,
        payload: data,
      })
    );
};

export const editDevice = (id, newData) => (dispatch) => {
  fetch(`/devices/${id}`, {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: EDIT_DEVICE,
        payload: data,
      })
    );
};

export const deleteDevice = (id, newData) => (dispatch) => {
  fetch(`/devices/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: DELETE_DEVICE,
        payload: data,
      })
    );
};
