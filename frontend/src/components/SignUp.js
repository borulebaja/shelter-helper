import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
      <div align="center">
        <br />
        <CssBaseline />
        <Paper
          style={{ padding: 40, margin: 100, maxWidth: 420 }}
          align="center"
        >
          <Typography align="center" component="h1" variant="h5">
            Sign Up
          </Typography>
          <form>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                name="name"
                type="text"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                name="email"
                type="text"
                value={this.state.email}
                onChange={e => this.handleChange(e)}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                value={this.state.password}
                onChange={e => this.handleChange(e)}
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              style={{
                backgroundColor: "#2b3649",
                color: "white"
              }}
              variant="contained"
              onClick={e => {
                e.preventDefault();
                this.props.signUp(this.state);
              }}
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
