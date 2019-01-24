import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";
import EditShelter from "./EditShelter";
import NeedDetail from "./NeedDetail";
import ShelterNeeds from "./ShelterNeeds";
import NeedForm from "./NeedForm";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Row, Column, Grid } from "react-bootstrap";
import "./ShelterDetail.css";

class ShelterDetails extends Component {
  componentDidMount() {
    // this.props.getShelterNeeds(this.props.shelter.id);
  }

  state = {
    showEditForm: false,
    showNeeds: false
  };

  editShelt = () => {
    if (this.state.showEditForm) {
      return (
        <EditShelter
          currentShelter={this.props.currentShelter}
          updateShelter={this.props.updateShelter}
          shelterId={this.props.shelter.id}
        />
      );
    }
  };

  // created new function for display needs
  showNeeds = () => {
    if (this.state.showNeeds) {
      return (
        <NeedDetail
          currentNeed={this.props.currentNeed}
          updateNeed={this.props.updateNeed}
          needId={this.props.need.id}
        />
      );
    }
  };

  render() {
    return (
      <Card
        className="card"
        // style={{
        //   width: "relative",
        //   height: "auto",
        //   marginLeft: "20px",
        //   marginRight: "20px",
        //   marginTop: "15px",
        //   marginBottom: "20px"
        // }}
        // style={{
        //   width: "90%",
        //   maxwidth: "1240px",
        //   margin: "0 auto",
        //   display: "grid",
        //   gridTemplateColumns: "1fr",
        //   gridTemplateRows: "auto",
        //   gridGap: "20px 20px ",
        //   background: "white",
        //   textDecoration: "none",
        //   color: "#444",
        //   boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        //   display: "flex",
        //   flexDirection: "column",
        //   minHeight: "100%"
        // }}
      >
        <CardActionArea>
          <CardMedia
            image={this.props.shelter.image_url}
            style={{
              height: "250px",
              width: "100%",
              backgroundPosition: "center center ",
              backgroundSize: "cover"
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.shelter.name}
            </Typography>
            <Typography component="p">
              {this.props.shelter.description}
            </Typography>
            <Typography component="p">
              <b>Address:</b> {this.props.shelter.address}
            </Typography>
            <Typography component="p">
              <b>Phone:</b> {this.props.shelter.phone}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            needs={this.props.shelter.needs}
            variant="contained"
            style={{
              backgroundColor: "#2b3649"
            }}
            size="small"
            onClick={() =>
              this.setState({
                showNeeds: !this.state.showNeeds
              })
            }
          >
            {this.state.showNeeds ? "Hide needs" : "Show needs"}
          </Button>
        </CardActions>

        {localStorage.token && (
          <div>
            <button
              type="edit"
              onClick={() =>
                this.setState({
                  showEditForm: !this.state.showEditForm
                })
              }
            >
              edit shelter
            </button>

            <br />
            <button
              type="delete"
              onClick={() => this.props.deleteShelter(this.props.shelter.id)}
            >
              delete shelter
            </button>

            {this.editShelt()}
          </div>
        )}

        <div>
          {this.state.showNeeds && (
            <ShelterNeeds needs={this.props.shelter.needs} />
          )}
        </div>

        {localStorage.token && <NeedForm shelterId={this.props.shelter.id} />}
      </Card>
    );
  }
}

export default connect(
  null,
  actions
)(ShelterDetails);
