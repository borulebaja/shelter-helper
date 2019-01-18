import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";
//import EditShelter from "./EditShelter";

class ShelterNeeds extends Component {
  // state = {
  //     showEditNeedForm: false
  // };

  // editSheltNeed = () => {
  //     if (this.state.showEditNeedForm) {
  //         return (
  //             <EditShelterNeed (create edit need component????)
  //                 currentShelterNeed={this.props.currentShelterNeed}
  //                 updateShelterNeed={this.props.updateShelterNeed}
  //                 shelterNeedId={this.props.shelterNeed.id}
  //             />
  //         );
  //     }
  // };

  render() {
    return (
      <div>
        {this.props.needs.map(need => {
          return (
            <div>
              <h3>shelter needs</h3>
              <img src={need.image_url} alt="" width="150" height="120" />
              <h3>{need.title}</h3>
              <li>description:{need.description}</li>
              <li>details:{need.details}</li>
            </div>
          );
        })}
        <ul>
          {/* <img
            src={this.props.need.image_url}
            alt=""
            width="150"
            height="120"
          /> */}
        </ul>
        {/* <button
          type="edit"
          onClick={() =>
            this.setState({ showEditNeedForm: !this.state.showEditNeedForm })
          }
        >
          edit me
        </button>
        <br />
        <button
          type="delete"
          onClick={() => this.props.deleteNeed(this.props.need.id)}
        >
          delete me
        </button>
        {this.editSheltNeed()} */}
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(ShelterNeeds);
