import { LOGIN, SIGNUP, LOGOUT, GET_SHELTERS } from "./types";

export const actions = {
  login(user) {
    return function(dispatch, getState) {
      console.log("are they lying to me", user);
      fetch("http://localhost:3000/api/v1/auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password
        })
      })
        .then(res => res.json())
        .then(result => {
          localStorage.setItem("token", result.token);
          dispatch({ type: LOGIN, payload: result });
        });
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
  }
};

// addShelter() {
//   return function (dispatch, getState) {
//     fetch('http://localhost:3000/api/v1/shelters', {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//         'Content-Type': 'application/json',
//         Accept: 'application/json'
//       },
//       body: JSON.stringify({
//         shelter: shelter
//       })
//     })

//       .then(res => res.json())

//       .then(result => {
//         dispatch({
//           type: ADD_SHELTER,
//           payload: result
//         })
//       })
//   },

// destroyShelter() {

//   fetch(`http://localhost:3000/api/v1/shelters/${this.shelterID()}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`
//     }
//   }).then(() => this.props.logout())
// };
// }
