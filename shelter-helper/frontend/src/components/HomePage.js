import React, { Component } from "react";
import MapContainer from "../containers/MapContainer";
import ShelterContainer from "../containers/ShelterContainer";
// import Paper from "@material-ui/core/Paper";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <h3 style={{ color: "white" }}>
          WELCOME TO SUPPORTIVE HOUSING AND SHELTERS PAGE!!!{" "}
        </h3>
        <MapContainer />

        <ShelterContainer />
      </div>
    );
  }
}
