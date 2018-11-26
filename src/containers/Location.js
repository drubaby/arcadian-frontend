import React, { Component } from "react";

class Location extends Component{

  //2 columns
  // left column display location name, address, and operator
  // right column display card grid with location machines



  render(){
    return<div> I am a Location</div>
  }


}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationsContainer);
