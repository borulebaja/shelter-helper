import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class SignUp extends Component {
  render() {
    return (
      <form>
        <div>
          <h2>SignUp</h2>
        </div>
        <div>
          <label>Full Name</label>
          <div>
            <Field name="fullName" component="input" type="text" />
          </div>
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
  form: "signup"
})(SignUp);
