import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(actions.login(user))
  };
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log("test");
    return (
      <div>
        <form>
          <div>
            <h2>Login</h2>
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
                this.props.login(this.state);
              }}
            >
              Submit
            </button>
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
