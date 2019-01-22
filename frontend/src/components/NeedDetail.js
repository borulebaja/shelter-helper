import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../state/actions";
import EditNeed from "./EditNeed";
//import ShelterNeeds from "./ShelterNeeds";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class NeedDetail extends Component {
  state = {
    showEditNeedForm: false
  };

  editSheltNeed = () => {
    if (this.state.showEditNeedForm) {
      return (
        <EditNeed
          currentNeed={this.props.currentNeed}
          updateNeed={this.props.updateNeed}
          needId={this.props.need.id}
        />
      );
    }
  };

  render() {
    return (
      <Card style={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            image={this.props.need.image_url}
            style={{ height: 150 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.need.title}
            </Typography>
            <Typography component="p">
              <b>Description:</b> {this.props.need.description}
            </Typography>
            <Typography component="p">
              <b>Details:</b> {this.props.need.details}
            </Typography>
            <Typography component="p">
              <b>Quantity needed:</b> {this.props.need.quantity_needed}
            </Typography>
            <Typography component="p">
              <b>Quantity bought:</b> {this.props.need.quantity_bought}
            </Typography>
            <a href={this.props.need.shopping_url}>
              <img
                src="http://www.niftybuttons.com/amazon/amazon-button3.png"
                alt=""
              />
            </a>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                this.props.quantityBought(
                  this.props.need,
                  this.props.need.shelter_id,
                  this.props.need.id
                );
              }}
            >
              I bought one
            </Button>

            {/* { this.props.need.quantity == this.props.need.bought ? 'yay we have all our needs and hide the button to say i bought this} : <button onClick={the function to increment bought }> */}
          </CardContent>
        </CardActionArea>
        {localStorage.token && (
          <div>
            <button
              type="edit"
              onClick={() =>
                this.setState({
                  showEditNeedForm: !this.state.showEditNeedForm
                })
              }
            >
              edit need
            </button>
            <br />
            <button
              type="delete"
              onClick={() =>
                this.props.deleteNeed(
                  this.props.need.shelter_id,
                  this.props.need.id
                )
              }
            >
              delete need
            </button>
            {this.editSheltNeed()}
          </div>
        )}
      </Card>
    );
  }
}

export default connect(
  null,
  actions
)(NeedDetail);
