import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";
//import EditShelter from "./EditShelter";

class ShelterNeeds extends Component {
  // state = {
  //     showEditNeed: false
  // };

  // editSheltNeed = () => {
  //     if (this.state.showEditForm) {
  //         return (
  //             <EditShelterNeed
  //                 currentShelterNeed={this.props.currentNeed}
  //                 updateShelterNeed={this.props.updateNeed}
  //                 shelterNeedId={this.props.shelter.id}
  //             />
  //         );
  //     }
  // };

  render() {
    console.log(this.props.needs);
    return (
      <div>
        {this.props.needs.map(need => {
          return (
            <div>
              <h3>{need.title}</h3>
              <img src={need.image_url} alt="" width="150" height="120" />
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
        {this.editShelt()} */}
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(ShelterNeeds);
