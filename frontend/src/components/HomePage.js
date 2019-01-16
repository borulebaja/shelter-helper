import React, { Component } from "react";
import MapContainer from "../containers/MapContainer";
import ShelterContainer from "../containers/ShelterContainer";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>HomePage</h2>
        <MapContainer />
        <ShelterContainer />
      </div>
    );
  }
}
