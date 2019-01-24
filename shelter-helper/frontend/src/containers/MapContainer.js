import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { GoogleMapsApiKey } from "../Api.js";
import Card from "@material-ui/core/Card";
// import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) => {
    console.log(props);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div>
        <Card
          style={{
            height: "81.5vh",
            width: "28%",
            position: "fixed",
            right: "10px",
            bottom: "10px"
          }}
        >
          <Map
            google={this.props.google}
            zoom={14}
            initialCenter={{ lat: 29.7588788, lng: -95.3638645 }}
          >
            {this.props.shelters.map(shelter => (
              <Marker
                onClick={this.onMarkerClick}
                key={shelter.id}
                name={shelter.name}
                address={shelter.address}
                phone={shelter.phone}
                position={{ lat: shelter.latitude, lng: shelter.longitude }}
              />
            ))}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h3>
                  {this.state.selectedPlace.name}
                  <br />
                  {this.state.selectedPlace.address}
                  <br />
                  {this.state.selectedPlace.phone}
                </h3>
              </div>
            </InfoWindow>
          </Map>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { shelters: state.shelters };
};

export default GoogleApiWrapper({
  apiKey: GoogleMapsApiKey.apiKey
})(
  connect(
    mapStateToProps,
    null
  )(MapContainer)
);
