import history from "./history";

export const reducer = function(currentState, action) {
  const newState = { ...currentState };

  switch (action.type) {
    case "GET_USER":
      newState.selectedUser = action.payload;
      break;
    case "CURRENT_USER":
      //   history.push(`/question/${action.payload}`);
      break;
    default:
      return newState;
  }
};
