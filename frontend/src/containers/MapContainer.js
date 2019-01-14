import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { GoogleMapsApiKey } from "../Api.js";
//import { GoogleApiWrapper } from "google-maps-react";
//import HomePage from "../components/HomePage";

//const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div
        style={{
          height: "50vh",
          width: "50%",
          position: "absolute",
          right: "0px",
          bottom: "0px"
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: GoogleMapsApiKey.apiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}
export default MapContainer;
