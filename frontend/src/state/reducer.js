import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  GET_SHELTERS,
  ADD_SHELTER,
  DELETE_SHELTER,
  UPDATE_SHELTER,
  GET_NEEDS,
  ADD_NEED,
  DELETE_NEED,
  UPDATE_NEED
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
      newState.currentUser = null;
      history.push("/homepage");
      break;
    case GET_SHELTERS:
      newState.shelters = action.payload;
      break;
    case ADD_SHELTER:
      newState.shelters = [...newState.shelters, action.payload];
      history.push("/homepage");
      break;
    case DELETE_SHELTER:
      newState.shelters = newState.shelters.filter(
        shelter => shelter.id !== action.payload.id
      );
      break;
    case UPDATE_SHELTER:
      newState.shelters = newState.shelters.map(shelter => {
        if (shelter.id !== action.payload.id) {
          return shelter;
        }
        return { ...shelter, ...action.payload };
      });
      history.push("/homepage");
      break;
    case GET_NEEDS:
      console.log(action.payload);
      newState.needs = action.payload;
      break;
    case ADD_NEED:
      let newNeed = action.payload;
      newState.shelters = newState.shelters.map(shelter => {
        if (shelter.id === newNeed.shelter_id) {
          return { ...shelter, needs: [...shelter.needs, newNeed] };
        } else {
          return shelter;
        }
      });
      history.push("/homepage");
      break;
    case DELETE_NEED:
      let destroyNeed = action.payload;
      newState.shelters = newState.shelters.map(shelter => {
        if (shelter.id === destroyNeed.shelter_id) {
          let updatedNeeds = shelter.needs.filter(
            need => need.id !== destroyNeed.id
          );
          return { ...shelter, needs: updatedNeeds };
        } else {
          return shelter;
        }
      });

      break;
    case UPDATE_NEED:
      console.log(action.payload);
      newState.shelters = newState.shelters.map(shelter => {
        if (shelter.id === action.payload.shelter_id) {
          console.log(shelter);
          shelter.needs.map(need => {
            if (need.id !== action.payload.id) {
              return need;
            } else {
              console.log(need);
              return { ...need, ...action.payload };
            }
          });
          return shelter; // updates need but not returning the updated shelter
        } else {
          return shelter;
        }
      });
      history.push("/homepage");
      break;

    default:
      return newState;
  }
  return newState;
};
