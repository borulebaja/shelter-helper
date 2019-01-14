import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";

const mapDispatchToProps = dispatch => {
  return {
    login: e => dispatch(actions.login(e))
  };
};

class Login extends Component {
  render() {
    console.log("test");
    return (
      <div>
        <form onSubmit={e => this.props.login(e)}>
          <div>
            <h2>Login</h2>
          </div>
          <div>
            <label>Email</label>
            <input name="emailInput" type="text" />
          </div>
          <div>
            <label>Password</label>
            <input name="passwordInput" type="password" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   login: { email: 'alan@example.com', password: '0000' }
// })

export default connect(
  null,
  mapDispatchToProps
)(Login);
