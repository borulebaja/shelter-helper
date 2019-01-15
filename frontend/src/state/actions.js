import { LOGIN, SIGNUP, LOGOUT } from "./types";

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
          dispatch({
            type: LOGIN,
            payload: result
          });
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
  }
};
