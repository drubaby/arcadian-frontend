import React, { Component } from "react";
import Location from '../components/Location'

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
            <Location location={location} />
          );
        })}
      </div>
    );
  }
}
