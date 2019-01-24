import React, { Component } from "react";
import { actions } from "../state/actions";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

class EditNeed extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      quantity_needed: "",
      quantity_bought: "",
      details: "",
      shopping_url: ""
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
        <div>
          <label>Quantity Needed</label>
          <input
            name="quantity_needed"
            type="text"
            value={this.state.quantity_needed}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <label>Quantity Bought</label>
          <input
            name="quantity_bought"
            type="text"
            value={this.state.quantity_bought}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <label>ShoppingUrl</label>
          <input
            name="shopping_url"
            type="text"
            value={this.state.shopping_url}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <Button
          variant="contained"
          color="inherit"
          onClick={e => {
            e.preventDefault();
            this.props.updateNeed(
              this.state,
              this.props.shelterId,
              this.props.needId
            );
          }}
        >
          save
        </Button>
      </form>
    );
  }
}

export default connect(
  null,
  actions
)(EditNeed);
