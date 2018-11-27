import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import LocationCard from "../components/LocationCard";
import LocationMachinesContainer from "./LocationMachinesContainer";
import { fetchingLocationMachines } from "../redux/actions/locationActions";

class Location extends Component {
  componentDidMount() {
    // debugger
    console.log("Location mounted; this.props.location: ", this.props.location);

    // consider dispatching action to fetch location details from DB

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
            <LocationMachinesContainer machines={this.props.location.location_machines} />
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
    locationMachines: state.locationMachines
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingMachines: id => {
      dispatch(fetchingLocationMachines(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Location);
