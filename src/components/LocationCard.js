import React, { Component } from "react";
import SearchModal from "./SearchModal";
import { Card, Icon, Image } from "semantic-ui-react";
import location_pic from "../img/location.svg";
import { connect } from "react-redux";
// import { addToFavorites } from "../redux/actions/locationActions";

// Rendered on Location container
class LocationCard extends Component {

  render() {
    // debugger
    let { location } = this.props;
    // props => location: {}, machines: {}
    console.log("Rendering location card");
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
          {location.machines.length} machines
          <SearchModal />
        </Card.Content>
      </Card>
    );
  }
}

export default connect(
  null,
  null
)(LocationCard);
