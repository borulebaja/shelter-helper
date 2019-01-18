import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";
import Button from "@material-ui/core/Button";

const mapDispatchToProps = dispatch => {
  return {
    addNeed: (need, shelter_id) => dispatch(actions.addNeed(need, shelter_id))
  };
};

class NeedForm extends Component {
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
    // console.log(this.props);

    return (
      <div>
        <h2>Create Need</h2>
        <form>
          <div className="form-group">
            <label>Need Title: </label>
            <input
              name="title"
              value={this.state.title}
              type="text"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              name="description"
              value={this.state.description}
              type="text"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Details: </label>
            <input
              name="details"
              value={this.state.details}
              type="text"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            onClick={e => {
              e.preventDefault();
              this.props.addNeed(this.state, this.props.shelterId);
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
  return { shelter_id: localStorage.shelterId };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NeedForm);
