import { FETCH_DEVICES } from "./types";

export const fetchDevices = () => (dispatch) => {
  console.log("fetching devices");
  fetch(`/devices`)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: FETCH_DEVICES,
        payload: data,
      })
    );
};