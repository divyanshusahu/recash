import { combineReducers } from "redux";
import signupToggleReducer from "./signupToggleReducer";

export default combineReducers({
  signupToggle: signupToggleReducer
});
