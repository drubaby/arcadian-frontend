import React, { Component } from "react";
import { connect } from "react-redux";
import LocationCard from '../components/LocationCard'
import {
  fetchingLocationMachines
} from "../redux/actions/locationActions";



class Location extends Component {

  componentDidMount(){
    console.log('Location Mounted')
    console.log("In Location, this.props.location: ", this.props.location)
    this.props.fetchingMachines(this.props.location.id)
  }

  // style guide:
  // 2 columns
  // left column display location name, address, and operator
  // right column display card grid with location machiness
  render() {
    return <div>
    {this.props.location ? <LocationCard location={this.props.location} /> : null}
    {this.props.location ? "I am a location" : null}</div>;
  }
}



// dispatch action to fetch location machines on location render

const mapStateToProps = (state, propsFromParent) => {
  return {
    location: state.allLocations.find(
      loc => loc.id === parseInt(propsFromParent.locationId)
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingMachines: (id) => {
      dispatch(fetchingLocationMachines(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Location);
