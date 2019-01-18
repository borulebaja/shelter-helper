import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";
import EditNeed from "./EditNeed";
//import ShelterNeeds from "./ShelterNeeds";

class NeedDetail extends Component {
  //   componentDidMount() {
  //     this.getShelterNeeds(this.props.shelter.id);
  //     console.log(this.props);
  //   }

  state = {
    showEditNeedForm: false
  };

  // getShelterNeeds(shelter_id) {
  //     fetch(`http://localhost:3000/api/v1/shelters/${shelter_id}/needs`, {
  //         headers: {
  //             "Content-Type": "application/json",
  //             Accept: "application/json"
  //         }
  //     })
  //         .then(res => res.json())
  //         .then(needs => this.setState({ needs }));
  // }

  editSheltNeed = () => {
    if (this.state.showEditNeedForm) {
      return (
        <EditNeed
          currentNeed={this.props.currentNeed}
          updateNeed={this.props.updateNeed}
          needId={this.props.need.id}
        />
      );
    }
  };

  render() {
    // console.log("this.state.needs", this.state.needs);

    return (
      <div>
        <img src={this.props.need.image_url} alt="" width="150" height="120" />
        <h4>{this.props.need.title}</h4>
        <li>address:{this.props.need.description}</li>
        <li>phone:{this.props.need.details}</li>

        <button
          type="edit"
          onClick={() =>
            this.setState({
              showEditNeedForm: !this.state.showEditNeedForm
            })
          }
        >
          edit need
        </button>
        <br />
        <button
          type="delete"
          onClick={() => this.props.deleteShelter(this.props.need.id)}
        >
          delete need
        </button>
        {this.editSheltNeed()}
        {/* <ShelterNeeds needs={this.state.needs} /> */}
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(NeedDetail);
