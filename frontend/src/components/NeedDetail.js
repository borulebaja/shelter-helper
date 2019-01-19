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
    return (
      <div>
        <img src={this.props.need.image_url} alt="" width="150" height="120" />
        <h4>{this.props.need.title}</h4>
        <b>Description: </b> {this.props.need.description} <br />
        <b>Details: </b> {this.props.need.details} <br />
        {/* { this.props.need.quantity == this.props.need.bought ? 'yay we have all our needs and hide the button to say i bought this} : <button onClick={the function to increment bought }> */}
        {localStorage.token && (
          <div>
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
              onClick={() =>
                this.props.deleteNeed(
                  this.props.need.shelter_id,
                  this.props.need.id
                )
              }
            >
              delete need
            </button>
            {this.editSheltNeed()}
          </div>
        )}
        {/* <ShelterNeeds needs={this.state.needs} /> */}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { need: state.need };
// };

export default connect(
  null,
  actions
)(NeedDetail);
