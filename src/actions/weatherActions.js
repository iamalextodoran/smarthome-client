import { FETCH_WEATHER } from "./types";

export const fetchWeather = (city) => (dispatch) => {
  fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=d50c57c063ec458dab88e7a1c530219c`)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: FETCH_WEATHER,
        payload: data,
      })
    );
};
