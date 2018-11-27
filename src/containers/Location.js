import React, { Component } from "react";
import { connect } from "react-redux";
import LocationCard from "../components/LocationCard";
import LocationMachinesContainer from './LocationMachinesContainer'
import { fetchingLocationMachines } from "../redux/actions/locationActions";


class Location extends Component {
  componentDidMount() {
    console.log("Location mounted; this.props.location: ", this.props.location);
    // dispatch action to fetch location machines on location render
    this.props.fetchingMachines(this.props.location.id);
  }

  // style guide:
  // 2 columns
  // left column display location name, address, and operator
  // right column display card grid with location machiness
  render() {
    return (
      <div>
        {this.props.location ? (
          <LocationCard
            location={this.props.location}
            machines={this.props.locationMachines}
          />
        ) : null}
        {this.props.location ? <LocationMachinesContainer /> : null}
      </div>
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
