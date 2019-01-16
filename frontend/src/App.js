import React, { Component } from "react";
import { Router } from "react-router";
import { Redirect, Route, Switch } from "react-router-dom";
//import { connect } from "react-redux";
import history from "./state/history";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ShelterList from "./components/ShelterList";
//import MapContainer from "./containers/MapContainer";

export default class _App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router history={history}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/homepage" component={HomePage} />
            <Route path="/shelterlist" component={ShelterList} />
            <Route path="/" render={() => <Redirect to="/homepage" />} />
          </Switch>
        </Router>
      </div>
    );
  }
}
