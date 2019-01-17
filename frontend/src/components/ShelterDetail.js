import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";
import EditShelter from "./EditShelter";

class ShelterDetails extends Component {
  state = {
    showEditForm: false
  };

  editShelt = () => {
    if (this.state.showEditForm) {
      return (
        <EditShelter
          currentShelter={this.props.currentShelter}
          updateShelter={this.props.updateShelter}
          shelterId={this.props.shelter.id}
        />
      );
    }
  };

  render() {
    return (
      <div>
        <ul>
          <img
            src={this.props.shelter.image_url}
            alt=""
            width="150"
            height="120"
          />
          <h4>{this.props.shelter.name}</h4>
          <li>address:{this.props.shelter.address}</li>
          <li>phone:{this.props.shelter.phone}</li>
        </ul>
        <button
          type="edit" // onClick={() => this.props.updateShelter(this.props.shelter.id)}
          onClick={() =>
            this.setState({ showEditForm: !this.state.showEditForm })
          }
        >
          edit me
        </button>
        <br />
        <button
          type="delete"
          onClick={() => this.props.deleteShelter(this.props.shelter.id)}
        >
          delete me
        </button>
        {this.editShelt()}
      </div>
    );
  }
}

const mapStateToProps = () => {};

export default connect(
  mapStateToProps,
  actions
)(ShelterDetails);
