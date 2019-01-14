import { LOGIN, SIGNUP, LOGOUT } from "./types";
import history from "./history";

export const reducer = function(currentState, action) {
  const newState = { ...currentState };

  switch (action.type) {
    case LOGIN:
      newState.currentUser = action.payload;
      history.push("/homepage");
      break;
    case SIGNUP:
      newState.currentUser = action.payload;
      history.push("/login");
      break;
    case LOGOUT:
      localStorage.clear();
      history.push("/homepage");
      break;
    default:
      return newState;
  }
};
