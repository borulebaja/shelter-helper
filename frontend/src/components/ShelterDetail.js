import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";
import EditShelter from "./EditShelter";
import ShelterNeeds from "./ShelterNeeds";
import NeedForm from "./NeedForm";

class ShelterDetails extends Component {
  componentDidMount() {
    this.getShelterNeeds(this.props.shelter.id);
  }

  state = {
    showEditForm: false,
    needs: []
  };

  getShelterNeeds(shelter_id) {
    fetch(`http://localhost:3000/api/v1/shelters/${shelter_id}/needs`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(needs => this.setState({ needs }));
  }

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
    // console.log("this.state.needs", this.state.needs);

    return (
      <div>
        <img
          src={this.props.shelter.image_url}
          alt=""
          width="150"
          height="120"
        />
        <h4>{this.props.shelter.name}</h4>
        <li>address:{this.props.shelter.address}</li>
        <li>phone:{this.props.shelter.phone}</li>

        <button
          type="edit"
          onClick={() =>
            this.setState({
              showEditForm: !this.state.showEditForm
            })
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
        <ShelterNeeds needs={this.state.needs} />
        <NeedForm shelterId={this.props.shelter.id} />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(ShelterDetails);
