import {
  FETCH_DEVICES,
  NEW_DEVICE,
  EDIT_DEVICE,
  DELETE_DEVICE,
} from "../actions/types";

const initialState = {
  devices: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DEVICES:
      return {
        ...state,
        devices: action.payload,
      };

    case NEW_DEVICE:
      return {
        ...state,
        devices: action.payload,
      };

    case EDIT_DEVICE:
      return {
        ...state,
        devices: action.payload,
      };

    case DELETE_DEVICE:
      return {
        ...state,
        devices: action.payload,
      };

    default:
      return state;
  }
}
