import { SIGNUP_TOGGLE } from "./types";

export const signupToggle = toggle => {
  return {
    type: SIGNUP_TOGGLE,
    isOpen: !toggle
  };
};
