import React, { Component } from "react";
import { actions } from "../state/actions";
import { connect } from "react-redux";

class EditNeed extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      details: ""
    };
  }

  handleChange = e => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form>
        <h3>Edit Need</h3>
        <div>
          <label>Need Title</label>
          <input
            name="title"
            type="text"
            value={this.state.title}
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
          <label>Details</label>
          <input
            name="details"
            type="text"
            value={this.state.details}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <button
          onClick={e => {
            e.preventDefault();
            this.props.updateNeed(this.state, this.props.shelterId);
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
)(EditNeed);
