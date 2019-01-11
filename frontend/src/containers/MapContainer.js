import React, { Component } from "react";
import { GoogleMapsApi } from "../Api.js";

class MapContainer extends Component {
  render() {
    console.log(GoogleMapsApi.apiKey);
    return <div>Map Container</div>;
  }
}
export default MapContainer;
