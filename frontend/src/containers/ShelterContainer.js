import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

// import ShelterDetails from "./components/ShelterDetails";

import { actions } from "../state/actions";
import ShelterDetails from "../components/ShelterDetail";

class ShelterContainer extends Component {
  componentDidMount() {
    this.props.getShelters();
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Grid container spacing={30} style={{ padding: 24 }}>
          {this.props.shelters.map(shelter => (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <Card style={{ padding: 12, maxWidth: 150 }}>
                <ShelterDetails shelter={shelter} />
                <Button size="small" variant="contained">
                  delete me
                </Button>
                <Button size="small" variant="contained">
                  edit me
                </Button>
              </Card>
            </Grid>
          ))}
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
