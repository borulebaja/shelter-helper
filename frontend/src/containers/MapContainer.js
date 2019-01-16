import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { GoogleMapsApiKey } from "../Api.js";

//const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 33.201899,
      lng: -96.618033
    },
    zoom: 11
  };

  render() {
    return (
      <div
        style={{
          height: "80vh",
          width: "50%",
          position: "absolute",
          right: "10px",
          bottom: "10px"
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
