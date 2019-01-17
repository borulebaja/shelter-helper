import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  GET_SHELTERS,
  ADD_SHELTER,
  DELETE_SHELTER
} from "./types";
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
    case GET_SHELTERS:
      newState.shelters = action.payload;
      break;
    case ADD_SHELTER:
      newState.shelters = [...newState.shelters, action.payload];
      break;
    case DELETE_SHELTER:
      newState.shelters = newState.shelters.filter(
        shelter => shelter.id !== action.payload
      );
      break;
    default:
      return newState;
  }
  return newState;
};
