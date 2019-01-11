import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import MapContainer from "./containers/MapContainer";
// import logo from "./logo.svg";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <MapContainer />
        <Card>Shelter Homes</Card>
      </div>
    );
  }
}

export default App;
