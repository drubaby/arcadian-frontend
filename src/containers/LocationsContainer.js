import React, { Component } from "react";
import { List } from "semantic-ui-react";
import Location from "../components/Location";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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

  handleClick = event => {
    debugger;
    console.log("clicked: ", event.currentTarget);
  };

  //wrap each location in a Link to that location's show page

  render() {
    return (
      <List className="ui relaxed items">
        Here are all Locations:
        {this.state.allLocations.map(location => {
          return (
            <div className="item" key={location.id}>
              <Location location={location} />
            </div>
          );
        })}
      </List>
    );
  }
}
