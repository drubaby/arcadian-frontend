import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import LocationCard from "../components/LocationCard";
import LocationMachinesContainer from "./LocationMachinesContainer";
import {
  fetchLocationMachines,
  fetchingLocation
} from "../redux/actions/locationActions";

class Location extends Component {
  componentDidMount() {
    console.log("Location mounted ", this.props.currentLocation);
    console.log("Location loading status: ", this.props.locationLoading);
    // consider dispatching action to fetch location details from DB
    //
    // this.props.fetchLocationMachines(parseInt(this.props.locationId))

    this.props.fetchingLocation(parseInt(this.props.locationId));
  }

  render() {
    // shows 'Loading' while async call is made
    if (this.props.locationLoading) {
      console.log(
        "Loading status: ",
        this.props.locationLoading,
        "display 'Loading'"
      );
      return <div>Loading...</div>;
    }

    return (
      <Grid>
        <Grid.Row>
          <LocationCard
            location={this.props.currentLocation}
            machines={this.props.currentLocation.location_machines}
          />
        </Grid.Row>
        <Grid.Row>
          <LocationMachinesContainer
            location={this.props.currentLocation}
            machines={this.props.currentLocation.location_machines}
          />
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
    currentLocation: state.currentLocation,
    locationLoading: state.locationLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //   fetchLocationMachines: id => {
    //     dispatch(fetchLocationMachines(id));
    //   }
    fetchingLocation: placeId => {
      dispatch(fetchingLocation(placeId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Location);
