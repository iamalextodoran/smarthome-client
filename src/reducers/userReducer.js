import {
  FETCH_USERS,
  FETCH_USER,
  NEW_USER,
  EDIT_USER,
  DELETE_USER,
} from "../actions/types";

const initialState = {
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
      };

    case NEW_USER:
      return {
        ...state,
        users: action.payload,
      };

    case EDIT_USER:
      return {
        ...state,
        users: action.payload,
      };

    case DELETE_USER:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
}
