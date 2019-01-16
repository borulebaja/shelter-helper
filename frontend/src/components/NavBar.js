import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import history from "../state/history";

class NavBar extends Component {
  // handleChange()

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <h3 onClick={() => history.push("/")}> Homeless Shelters </h3>
            <Tab label="Shelters" onClick={() => history.push("/")} />
            {/* // users should be logged in to view form */}
            <Tab
              label="ShelterForm"
              onClick={() => history.push("/shelterform")}
            />
            <Tab label="SignUp" onClick={() => history.push("/signup")} />
            {localStorage.token ? (
              <Tab label="Logout" onClick={() => this.props.logout()} />
            ) : (
              <Tab label="Login" onClick={() => history.push("/login")} />
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(NavBar);
