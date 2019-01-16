import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";
import Button from "@material-ui/core/Button";

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
      <div>
        <h2>Create Shelter</h2>
        <form>
          <div className="form-group">
            <label>Shelter Name: </label>
            <input
              name="name"
              value={this.state.name}
              type="text"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Address: </label>
            <input
              name="address"
              value={this.state.address}
              type="text"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Phone: </label>
            <input
              name="phone"
              value={this.state.phone}
              type="text"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            onClick={e => {
              e.preventDefault();
              this.props.addShelter(this.state, this.props.user_id);
            }}
          >
            create
          </Button>
        </form>
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
