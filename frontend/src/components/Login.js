import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class Login extends Component {
  render() {
    return (
      <form>
        <div>
          <h2>Login</h2>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field name="email" component="input" type="email" />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <Field name="password" component="input" type="password" />
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "login"
})(Login);
