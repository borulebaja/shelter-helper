import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";
import ShelterDetails from "../components/ShelterDetail";
import Grid from "@material-ui/core/Grid";

class ShelterContainer extends Component {
  componentDidMount() {
    this.props.getShelters();
    this.props.checkIfLoggedIn();
  }

  render() {
    return (
      <div style={{ width: "70%" }}>
        <Grid container spacing={8}>
          {this.props.shelters.map(shelter => {
            return (
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <ShelterDetails shelter={shelter} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { shelters: state.shelters };
};

export default connect(
  mapStateToProps,
  actions
)(ShelterContainer);
