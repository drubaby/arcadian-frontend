import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class LocationListItem extends Component {
  render() {
    return (
      <Item className="item">
        <Link to={`/location/${this.props.location.id}`}>
          <Item.Header>{this.props.location.name}</Item.Header>
          <Item.Description>{this.props.location.street}</Item.Description>
        </Link>
      </Item>
    );
  }
}
