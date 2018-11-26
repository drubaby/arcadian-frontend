import React, { Component } from "react";
import { connect } from "react-redux";

class Location extends Component {
  //2 columns
  // left column display location name, address, and operator
  // right column display card grid with location machines

  render() {
    return <div>{this.props.location ? "I am a location" : null}</div>;
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

export default connect(
  mapStateToProps,
  null
)(Location);
