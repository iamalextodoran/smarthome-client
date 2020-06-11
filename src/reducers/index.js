import { combineReducers } from "redux";
import userReducer from "./userReducer.js";
import roomReducer from "./roomReducer";
import deviceReducer from "./deviceReducer";

export default combineReducers({
  users: userReducer,
  rooms: roomReducer,
  devices: deviceReducer
});
