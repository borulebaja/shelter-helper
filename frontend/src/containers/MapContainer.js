import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { GoogleMapsApiKey } from "../Api.js";
import Marker from "../components/Marker";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 29.7588788,
      lng: -95.3638645
    },
    zoom: 11
  };

  render() {
    console.log(GoogleMapReact);

    return (
      <div>
        <Card
          style={{
            height: "85vh",
            width: "30%",
            position: "fixed",
            right: "10px",
            bottom: "10px"
          }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: GoogleMapsApiKey.apiKey }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {this.props.shelters.map(shelter => (
              <Marker
                key={shelter.id}
                text={shelter.name}
                lat={shelter.latitude}
                lng={shelter.longitude}
              />
            ))}
          </GoogleMapReact>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { shelters: state.shelters };
};
export default connect(
  mapStateToProps,
  null
)(MapContainer);
