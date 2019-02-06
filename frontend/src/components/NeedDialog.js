import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ShelterNeeds from "./ShelterNeeds";

export default class NeedDialog extends React.Component {
  state = {
    open: this.props.open
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Display Need
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <ShelterNeeds
            closeForm={this.handleClose}
            needs={this.props.shelter.needs}
          />
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
        </Dialog>
      </div>
    );
  }
}
