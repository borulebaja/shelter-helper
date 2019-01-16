import React, { Component } from "react";

class ShelterDetails extends Component {
  render() {
    return (
      <div>
        <ul>
          <img
            src={this.props.shelter.image_url}
            alt=""
            width="150"
            height="120"
          />
          <h4>{this.props.shelter.name}</h4>
          <li>address:{this.props.shelter.address}</li>
          <li>phone:{this.props.shelter.phone}</li>
        </ul>
        {/* EDIT/DELETE button in heaaa*/}
        <button type="edit">edit me</button> <br />
        <button type="delete">delete me</button>
      </div>
    );
  }
}

export default ShelterDetails;

// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// const styles = {
//   card: {
//     maxWidth: 345
//   },
//   media: {
//     height: 140
//   }
// };

// function MediaCard(props) {
//   const { classes } = props;
//   return (
//     <Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// MediaCard.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(MediaCard);
