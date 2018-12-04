import React, { Component } from "react";
import SearchModal from "./SearchModal";
import { Card, Icon, Image } from "semantic-ui-react";
import location_pic from "../img/location.svg";

class LocationCard extends Component {
  render() {
    let {location} = this.props
    console.log("Rending location card")
    return (
      <Card>
        <Image src={location_pic} />
        <Card.Content>
          <Card.Header>{location.name}</Card.Header>
          <Card.Meta>
            <span className="date">Operator: </span>
          </Card.Meta>
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
export default LocationCard;
