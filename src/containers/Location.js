import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import LocationCard from "../components/LocationCard";
import LocationMachinesContainer from "./LocationMachinesContainer";
import MachineSearch from '../components/MachineSearch'
import { fetchingLocation, fetchAllMachines } from "../redux/actions/locationActions";

class Location extends Component {
  componentDidMount() {
    // fetch location info from DB
    // dispatches loadingLocaton and then showLocation in Actions
    this.props.fetchingLocation(parseInt(this.props.locationId));
    this.props.fetchAllMachines()
    //updates Store => currentLocation: {locationObj}
  }

  render() {
    // shows 'Loading' while async call is made
    if (this.props.locationLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Grid>
        <Grid.Row>
          <LocationCard
            location={this.props.currentLocation}
            machines={this.props.currentLocation.location_machines}
          />
          <MachineSearch />
        </Grid.Row>
        <Grid.Row>
          <LocationMachinesContainer location={this.props.currentLocation} />
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    // location: state.allLocations.find(
    //   loc => loc.id === parseInt(propsFromParent.locationId)
    // ),
    currentLocation: state.currentLocation,
    locationLoading: state.locationLoading,
    allMachines: state.allMachines
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingLocation: placeId => {
      dispatch(fetchingLocation(placeId))
    },
    fetchAllMachines: () => {
      dispatch(fetchAllMachines())
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Location);
