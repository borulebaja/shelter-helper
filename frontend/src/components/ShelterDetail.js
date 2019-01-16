import React, { Component } from "react";

class ShelterDetails extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>image: {this.props.shelter.image}</li>
          <p>{this.props.shelter.name}</p>
          <li>address: {this.props.shelter.address}</li>
          <li>phone: {this.props.shelter.phone}</li>
        </ul>
      </div>
    );
  }
}

export default ShelterDetails;
