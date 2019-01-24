import React, { Component } from "react";
import { actions } from "../state/actions";
import { connect } from "react-redux";

class EditShelter extends Component {
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
      <form>
        <h3>Edit Shelter</h3>
        <div>
          <label>Shelter Name</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            name="address"
            type="text"
            value={this.state.address}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            name="phone"
            type="text"
            value={this.state.phone}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <button
          onClick={e => {
            e.preventDefault();
            this.props.updateShelter(this.state, this.props.shelterId);
          }}
        >
          save
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  actions
)(EditShelter);
