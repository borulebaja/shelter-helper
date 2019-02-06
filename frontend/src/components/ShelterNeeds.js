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
