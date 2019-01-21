import React, { Component } from "react";
import { Router } from "react-router";
import { Redirect, Route, Switch } from "react-router-dom";
//import { connect } from "react-redux";
import history from "./state/history";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ShelterForm from "./components/ShelterForm";
import EditShelter from "./components/EditShelter";
// import NeedForm from "./components/NeedForm";

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
            <Route path="/shelterform" component={ShelterForm} />
            <Route path="/editshelter" component={EditShelter} />
            {/* <Route path="/needform" component={NeedForm} /> */}
            <Route path="/" render={() => <Redirect to="/homepage" />} />
          </Switch>
        </Router>
      </div>
    );
  }
}
