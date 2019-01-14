import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";

const mapDispatchToProps = dispatch => {
  return {
    signUp: e => dispatch(actions.signUp(e))
  };
};
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      emailInput: "",
      passwordInput: ""
    };
  }

  handleChange = e => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form>
        <div>
          <h2>SignUp</h2>
        </div>
        <div>
          <label>Name</label>
          <input
            name="nameInput"
            type="text"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            name="emailInput"
            type="text"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="passwordInput"
            type="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <button onClick={e => this.props.signUp(e)}>Submit</button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
