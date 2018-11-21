import React, { Component } from "react";

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
    return(
    <div>
    {this.props.location.name}
  </div>)
  }
}
