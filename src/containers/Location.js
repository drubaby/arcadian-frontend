import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import LocationCard from "../components/LocationCard";
import LocationMachinesContainer from "./LocationMachinesContainer";
import { fetchLocationMachines, fetchingLocation } from "../redux/actions/locationActions";

class Location extends Component {
  componentDidMount() {
    // debugger
    console.log("Location mounted; this.props.location: ", this.props.location);
    // consider dispatching action to fetch location details from DB

    //step 1: set to loading via this.props.fetchingLocation();
    //step 2: fetch

    //
     // this.props.fetchLocationMachines(parseInt(this.props.locationId))
    // or something
    // debugger
    this.props.fetchingLocation(parseInt(this.props.locationId))

  }

  // style guide:
  // 2 columns
  // left column display location name, address, and operator
  // right column display card grid with location machiness
  render() {
    return (
      <Grid>
        <Grid.Row>
          {this.props.location ? (
            <LocationCard
              location={this.props.location}
              machines={this.props.location.location_machines}
            />
          ) : null}
        </Grid.Row>
        <Grid.Row>
          {this.props.location ? (
            <LocationMachinesContainer
              location={this.props.location}
              machines={this.props.location.location_machines}
            />
          ) : null}
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state, propsFromParent) => {
  return {
    location: state.allLocations.find(
      loc => loc.id === parseInt(propsFromParent.locationId)
    ),
    currentLocation: state.currentLocation
  };
};

const mapDispatchToProps = dispatch => {
  return {
  //   fetchLocationMachines: id => {
  //     dispatch(fetchLocationMachines(id));
  //   }
  fetchingLocation: (placeId) => {
    dispatch(fetchingLocation(placeId))
  }

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Location);
