import React, { Component } from "react";
import { GoogleMapsApiKey } from "../Api.js";
import { GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  render() {
    console.log(GoogleMapsApiKey.apiKey);
    return <div>Map Container</div>;
  }
}
export default GoogleApiWrapper({
  apiKey: GoogleMapsApiKey.apiKey
})(MapContainer);
