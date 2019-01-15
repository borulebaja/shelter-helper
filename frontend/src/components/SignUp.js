import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";

const mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(actions.signUp(user))
  };
};

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
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
            name="name"
            type="text"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <button
            onClick={e => {
              e.preventDefault();
              this.props.signUp(this.state);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
