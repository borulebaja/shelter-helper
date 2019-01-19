import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";
import EditShelter from "./EditShelter";
import ShelterNeeds from "./ShelterNeeds";
import NeedForm from "./NeedForm";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class ShelterDetails extends Component {
  componentDidMount() {
    // this.props.getShelterNeeds(this.props.shelter.id);
  }

  state = {
    showEditForm: false
    // needs: []
  };

  // getShelterNeeds(shelter_id) {
  //   fetch(`http://localhost:3000/api/v1/shelters/${shelter_id}/needs`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(needs => {
  //       console.log("needs", needs);

  //       this.setState({ needs });
  //     });
  // }

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

  render() {
    return (
      <Card style={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            image={this.props.shelter.image_url}
            style={{ height: 100 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.shelter.name}
            </Typography>
            <Typography component="p">
              Address: {this.props.shelter.address}
            </Typography>
            <Typography component="p">
              Phone: {this.props.shelter.phone}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
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
        {/* TODO toggle needs condition button */}
        <ShelterNeeds needs={this.props.shelter.needs} />
        {localStorage.token && <NeedForm shelterId={this.props.shelter.id} />}
      </Card>
    );
  }
}

// const mapStateToProps = state => {
//   return { shelters: state.shelters };
// };

export default connect(
  null,
  actions
)(ShelterDetails);
