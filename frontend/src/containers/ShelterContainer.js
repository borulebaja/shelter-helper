import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import { actions } from "../state/actions";
import { GET_SHELTERS } from "../state/types";

class ShelterContainer extends Component {
  componentDidMount() {
    this.props.getShelters();
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.shelters.map(shelter => {
            return <li>{shelter.name}</li>;
          })}
        </ul>
        {/* <Card>
                <div><h3>{shelter.name}</h3></div>
                <div><h3>{shelter.address}</h3></div>;
                <div><h3>{shelter.phone}</h3></div>;
                <div><h3>{shelter.image}</h3></div>;
        </Card> */}
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
