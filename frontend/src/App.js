import React, { Component } from "react";
import { Router } from "react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import history from "./state/history";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/" render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
