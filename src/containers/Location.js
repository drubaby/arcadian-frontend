import React, { Component } from "react";
import { Grid, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import LocationCard from "../components/LocationCard";
import LocationIssues from "./LocationIssues";
import LocationMachinesContainer from "./LocationMachinesContainer";
import { fetchingLocation } from "../redux/actions/locationActions";

class Location extends Component {
  componentDidMount() {
    // fetch location info from DB
    // dispatches loadingLocaton and then showLocation in Actions
    this.props.fetchingLocation(parseInt(this.props.locationId));
    // this.props.fetchAllMachines()
    //updates Store => currentLocation: {locationObj}
  }

  render() {
    // shows 'Loading' while async call is made
    if (this.props.locationLoading) {
      return <Loader active size='large'inline='centered'/>;
    }

    return (
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <LocationCard
              location={this.props.currentLocation}
              machines={this.props.currentLocation.location_machines}
            />
          </Grid.Column>
          <Grid.Column>
            <LocationIssues />
          </Grid.Column>
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
    locationLoading: state.locationLoading
    // ,
    // allMachines: state.allMachines
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingLocation: placeId => {
      dispatch(fetchingLocation(placeId));
    }
    // ,
    // fetchAllMachines: () => {
    //   dispatch(fetchAllMachines())
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Location);
