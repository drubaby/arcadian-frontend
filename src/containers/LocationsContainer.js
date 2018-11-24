import React, { Component } from "react";
import { List } from "semantic-ui-react";
import Location from "../components/Location";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchingLocations,
  fetchedLocations
} from "../redux/actions/locationActions";

const BACKEND_URL = "http://localhost:3000";

class LocationsContainer extends Component {
  componentDidMount() {
    this.props.fetchingLocations();
  }

  // getAllLocations = () => {
  //   fetch(BACKEND_URL + "/locations")
  //     .then(resp => resp.json())
  //     .then(json => {
  //       this.setState({ allLocations: json });
  //     });
  // };

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

const mapDispatchToProps = dispatch => {
  return {
    fetchingLocations: () => {
      dispatch(fetchingLocations);
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LocationsContainer);
