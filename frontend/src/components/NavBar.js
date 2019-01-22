import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import history from "../state/history";
import Typography from "@material-ui/core/Typography";

class NavBar extends Component {
  // handleChange()

  render() {
    return (
      <div>
        <AppBar position="static" style={{ "background-color": "black" }}>
          <Toolbar>
            <Typography
              color="inherit"
              variant="h6"
              onClick={() => history.push("/")}
            >
              HOMELESS SHELTERS
            </Typography>
            <Tab
              label="Shelters"
              // style={{ "text-transform": "capitalize" }}
              onClick={() => history.push("/")}
            />
            {/* // users should be logged in to view form */}
            {this.props.currentUser && (
              <Tab
                label="ShelterForm"
                onClick={() => history.push("/shelterform")}
              />
            )}

            <Tab label="SignUp" onClick={() => history.push("/signup")} />
            {this.props.currentUser !== null ? (
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

const mapStateToProps = state => {
  return { currentUser: state.currentUser };
};

export default connect(
  mapStateToProps,
  actions
)(NavBar);
