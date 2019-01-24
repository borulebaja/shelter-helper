import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import history from "../state/history";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "../App.css";

class NavBar extends Component {
  // handleChange()

  render() {
    return (
      <div>
        <AppBar position="fixed" style={{ backgroundColor: "#19283E" }}>
          <Toolbar>
            <Typography
              color="inherit"
              style={{ flexGrow: 1 }}
              variant="h6"
              onClick={() => history.push("/")}
            >
              SHELTER HELPER
            </Typography>
            <Button
              color="inherit"
              onClick={
                () => history.push("/") // style={{ "text-transform": "capitalize" }} // label="Shelters"
              }
            >
              Shelters
            </Button>
            {/* // users should be logged in to view form */}
            {this.props.currentUser && (
              <Button
                color="inherit"
                onClick={
                  () => history.push("/shelterform") // label="ShelterForm"
                }
              >
                ShelterForm
              </Button>
            )}

            <Button
              label="SignUp"
              color="inherit"
              onClick={() => history.push("/signup")}
            >
              SignUp
            </Button>
            {this.props.currentUser !== null ? (
              <Button color="inherit" onClick={() => this.props.logout()}>
                Logout
              </Button>
            ) : (
              <Button
                label="Login"
                color="inherit"
                onClick={() => history.push("/login")}
              >
                Login
              </Button>
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
