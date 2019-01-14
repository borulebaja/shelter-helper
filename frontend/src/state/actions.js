import { LOGIN, SIGNUP, LOGOUT } from "./types";

export const actions = {
  login(e) {
    return function(dispatch, getState) {
      e.preventDefault();
      console.log("test");
      fetch("http://localhost:3000/api/v1/auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: e.target.emailInput,
          password: e.target.passwordInput
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

  signUp(e) {
    //console.log("AcTion!!!");
    return function(dispatch, getState) {
      e.preventDefault();
      let user = {
        name: e.target.nameInput.value,
        email: e.target.emailInput.value,
        password: e.target.passwordInput.value
      };
      console.log(user);
      console.log("test");
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
