import React, { Component } from "react";

const BACKEND_URL = "http://localhost:3000";

export default class LocationsContainer extends Component {
  constructor() {
    super();
    this.state = {
      allLocations: []
    };
  }

  componentDidMount() {
    this.getAllLocations();
  }

  getAllLocations = () => {
    fetch(BACKEND_URL + "/locations")
      .then(resp => resp.json())
      .then(json => {
        this.setState({ allLocations: json });
      });
  };

  render() {
    return (
      <div>
        Here are all Locations:
        {this.state.allLocations.map(location => {
          return (
            <li>
              {" "}
              {location.name}
              <ul>{location.street}{location.city}{location.state}</ul>{" "}
            </li>
          );
        })}
      </div>
    );
  }
}
