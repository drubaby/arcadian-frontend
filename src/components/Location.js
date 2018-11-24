import React, { Component } from "react";
import { Item } from "semantic-ui-react";

export default class Location extends Component {
  // fetch all location_machines
  //fetch all machine_issues for this location

  constructor() {
    super();
    this.state = {
      machines: [],
      machine_issues: []
    };
  }

  render() {
    return (
      <Item>
        <Item.Header>{this.props.location.name}</Item.Header>
        <Item.Description>{this.props.location.street}</Item.Description>
      </Item>
    );
  }
}
