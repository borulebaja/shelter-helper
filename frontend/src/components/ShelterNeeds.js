import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";
import NeedDetail from "./NeedDetail";

class ShelterNeeds extends Component {
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <h3>Items Needed</h3>
        {this.props.needs.map(need => {
          if (need.quantity_needed > 0) {
            return (
              <div style={{ margin: "10px" }}>
                <NeedDetail need={need} />
              </div>
            );
          }
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

// const mapStateToProps = state => {
//   return { needs: state.needs };
// };

export default connect(
  null,
  actions
)(ShelterNeeds);
