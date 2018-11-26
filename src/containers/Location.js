import React, { Component } from "react";
import { connect } from "react-redux";

class Location extends Component {
  //2 columns
  // left column display location name, address, and operator
  // right column display card grid with location machines

  render() {
    return <div> I am a Location</div>;
  }
}

function mapStateToProps(state) {
  return {
    allLocations: state.allLocations
  };
}

export default connect(
mapStateToProps, null
)(Location);
