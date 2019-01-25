import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";
import Button from "@material-ui/core/Button";

import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const mapDispatchToProps = dispatch => {
  return {
    addShelter: shelter => dispatch(actions.addShelter(shelter))
  };
};

class ShelterForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      address: "",
      phone: ""
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
            Create New Shelter
          </Typography>

          <form>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="shelter name">Shelter Name</InputLabel>

              <Input
                name="name"
                value={this.state.name}
                type="text"
                onChange={e => this.handleChange(e)}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="description">Description</InputLabel>

              <Input
                name="description"
                value={this.state.description}
                type="text"
                onChange={e => this.handleChange(e)}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="address">Address</InputLabel>

              <Input
                name="address"
                value={this.state.address}
                type="text"
                onChange={e => this.handleChange(e)}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="phone">Phone</InputLabel>

              <Input
                name="phone"
                value={this.state.phone}
                type="text"
                onChange={e => this.handleChange(e)}
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#2b3649", color: "white" }}
              onClick={e => {
                e.preventDefault();
                this.props.addShelter(this.state, this.props.user_id);
              }}
            >
              Create
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user_id: localStorage.userId };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShelterForm);
