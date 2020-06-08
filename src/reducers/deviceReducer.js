import { FETCH_DEVICES } from "../actions/types";

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
    default:
      return state;
  }
}
