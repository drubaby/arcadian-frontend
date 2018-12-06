import React, { Component } from "react";
import SearchModal from "./SearchModal";
import { Card, Icon, Image } from "semantic-ui-react";
import location_pic from "../img/location.svg";
import { connect } from "react-redux";
// import { addToFavorites } from "../redux/actions/locationActions";

class LocationCard extends Component {
  // handleFavorite = location => {
  //   this.props.addToFavorites(location);
  // };

  render() {
    let { location } = this.props;
    console.log("Rending location card");
    return (
      <Card>
        <Image src={location_pic} />
        <Card.Content>
          <Card.Header>{location.name}</Card.Header>

          <Card.Description>{location.street}</Card.Description>
          <Card.Description>
            {location.city}, {location.state} {location.zip}
          </Card.Description>
        </Card.Content>
        <Card.Content extra textAlign="left">
          <Icon name="gamepad" />
          {location.location_machines.length} machines
          <SearchModal />
        </Card.Content>
      </Card>
    );
  }
}

// Discontinued for science fair
// const mapDispatchToProps = dispatch => {
//   return {
//     addToFavorites: locationObj => {
//       dispatch(addToFavorites(locationObj));
//     }
//   };
// };

export default connect(
  null,
  null
)(LocationCard);
