import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  GET_SHELTERS,
  ADD_SHELTER,
  DELETE_SHELTER,
  UPDATE_SHELTER,
  ADD_NEED,
  DELETE_NEED,
  UPDATE_NEED,
  GET_NEEDS,
  CHECK_IF_LOGGED_IN
} from "./types";

export const actions = {
  login(logUser) {
    return function(dispatch, getState) {
      fetch("http://localhost:3000/api/v1/auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(logUser)
      })
        .then(res => res.json())
        .then(user => dispatch({ type: LOGIN, payload: user }));
    };
  },

  signUp(user) {
    //console.log("AcTion!!!");
    return function(dispatch, getState) {
      fetch("http://localhost:3000/api/v1/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: user
        })
      })
        .then(res => res.json())
        .then(result => {
          localStorage.setItem("token", result.token);
          dispatch({ type: SIGNUP, payload: result });
        });
    };
  },

  logout() {
    return { type: LOGOUT };
  },
  checkIfLoggedIn() {
    return { type: CHECK_IF_LOGGED_IN };
  },

  getShelters() {
    return function(dispatch, getState) {
      fetch(`http://localhost:3000/api/v1/shelters`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(res => res.json())
        .then(result => {
          dispatch({ type: GET_SHELTERS, payload: result });
        });
    };
  },

  addShelter(shelter, user_id) {
    return function(dispatch, getState) {
      fetch("http://localhost:3000/api/v1/shelters/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          shelter: {
            name: shelter.name,
            description: shelter.description,
            address: shelter.address,
            phone: shelter.phone,
            user_id: user_id
          }
        })
      })
        .then(res => res.json())
        .then(result => {
          dispatch({ type: ADD_SHELTER, payload: result });
        });
    };
  },

  updateShelter(shelter, id) {
    return function(dispatch, getState) {
      //need to pass an id from editShelter component
      console.log(shelter, id);
      fetch(`http://localhost:3000/api/v1/shelters/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          shelter: {
            name: shelter.name,
            description: shelter.description,
            address: shelter.address,
            phone: shelter.phone
          }
        })
      })
        .then(res => res.json())
        .then(result => {
          dispatch({ type: UPDATE_SHELTER, payload: result });
        });
    };
  },

  deleteShelter(shelterId) {
    return function(dispatch, getState) {
      fetch(`http://localhost:3000/api/v1/shelters/${shelterId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(res => res.json())
        .then(result => {
          dispatch({ type: DELETE_SHELTER, payload: result });
        });
    };
  },

  getShelterNeeds(shelter_id) {
    return function(dispatch, getState) {
      fetch(`http://localhost:3000/api/v1/shelters/${shelter_id}/needs`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(res => res.json())
        .then(result => {
          dispatch({ type: GET_NEEDS, payload: result });
        });
    };
  },

  addNeed(need, shelter_id) {
    console.log("in action", need, shelter_id);

    return function(dispatch, getState) {
      fetch(`http://localhost:3000/api/v1/shelters/${shelter_id}/needs`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          need: {
            title: need.title,
            image_url: need.image_url,
            description: need.description,
            detail: need.details,
            quantity_needed: need.quantity_needed,
            quantity_bought: need.quantity_bought,
            shopping_url: need.shopping_url,
            shelter_id: shelter_id
          }
        })
      })
        .then(res => res.json())
        .then(result => {
          console.log("after posting to backend", result);

          dispatch({ type: ADD_NEED, payload: result });
        });
    };
  },

  updateNeed(need, id, needId) {
    return function(dispatch, getState) {
      fetch(`http://localhost:3000/api/v1/shelters/${id}/needs/${needId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          need: {
            title: need.title,
            description: need.description,
            details: need.details,
            quantity_needed: need.quantity_needed,
            quantity_bought: need.quantity_bought,
            shopping_url: need.shopping_url
          }
        })
      })
        .then(res => res.json())
        .then(result => {
          dispatch({ type: UPDATE_NEED, payload: result });
        });
    };
  },

  // TODO new function to increment the quantity bought of a need
  // copy paste the updateNeed function and include in body
  // bought: need.bought++

  quantityBought(need, id, needId) {
    return function(dispatch, getState) {
      let newQuantity = need.quantity_bought + 1;
      let currentQuantity = need.quantity_needed - 1;
      // console.log(currentQuantity);
      fetch(`http://localhost:3000/api/v1/shelters/${id}/needs/${needId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          quantity_bought: newQuantity,
          quantity_needed: currentQuantity
        })
      })
        .then(res => res.json())
        .then(result => {
          console.log("in action ", result);
          dispatch({ type: UPDATE_NEED, payload: result });
        });
    };
  },

  deleteNeed(id, needId) {
    return function(dispatch, getState) {
      fetch(`http://localhost:3000/api/v1/shelters/${id}/needs/${needId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(res => res.json())
        .then(result => {
          dispatch({ type: DELETE_NEED, payload: result });
        });
    };
  }
};
