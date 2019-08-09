import { SIGNUP_TOGGLE } from "../actions/types";

const initialState = {
  isOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_TOGGLE:
      return {
        ...state,
        isOpen: action.isOpen
      };
    default:
      return state;
  }
}
