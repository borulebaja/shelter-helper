import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";
import history from "../state/history";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
    return (
      <div align="center">
        <br />
        <CssBaseline />
        <Paper
          style={{ padding: 40, margin: 100, maxWidth: 420 }}
          align="center"
        >
          <Typography align="center" component="h1" variant="h5">
            Login
          </Typography>
          <form>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                name="email"
                type="text"
                value={this.state.email}
                onChange={e => this.handleChange(e)}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password </InputLabel>
              <Input
                name="password"
                type="password"
                value={this.state.password}
                onChange={e => this.handleChange(e)}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              style={{
                backgroundColor: "#2b3649"
              }}
              variant="contained"
              onClick={e => {
                e.preventDefault();
                this.props.login(this.state);
              }}
            >
              Login
            </Button>
          </form>
          <br />
          <Button
            onClick={() => history.push("/signup")}
            style={{
              backgroundColor: "#2b3649"
            }}
          >
            New User? Please Sign Up
          </Button>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  actions
)(Login);
