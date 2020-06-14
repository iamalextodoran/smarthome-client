import { combineReducers } from "redux";
import userReducer from "./userReducer.js";
import weatherReducer from "./weatherReducer.js";
import roomReducer from "./roomReducer";
import deviceReducer from "./deviceReducer";

export default combineReducers({
  weather: weatherReducer,
  users: userReducer,
  rooms: roomReducer,
  devices: deviceReducer
});
