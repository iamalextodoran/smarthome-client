import {
  FETCH_ROOMS,
  NEW_ROOM,
  EDIT_ROOM,
  DELETE_ROOM,
} from "../actions/types";

const initialState = {
  rooms: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ROOMS:
      return {
        ...state,
        rooms: action.payload,
      };

    case NEW_ROOM:
      return {
        ...state,
        newRoom: action.payload,
      };

    case EDIT_ROOM:
      return {
        ...state,
        rooms: action.payload,
      };

    case DELETE_ROOM:
      return {
        ...state,
        rooms: action.payload,
      };

    default:
      return state;
  }
}
