import React, { Component } from "react";
import { Header, Segment, Item, Loader } from "semantic-ui-react";
import MachineFinderResultItem from "../components/MachineFinderResultItem";
import { connect } from "react-redux";

class MachineFinderResults extends Component {
  findLocationById = id => {
    let location = this.props.allLocations.filter(
      location => location.id === id
    );
    console.log("Location found by id: ", location);
    return location;
  };

  render() {
    // shows 'Loading' while async call is made to all Locations
    // WORKS
    if (this.props.loading) {
      console.log("Loading status: ", this.props.loading, "display 'Loading'");
      return <Loader active inline='centered'/>;
    }
    return (
      <Segment>
        <Header>Search Results</Header>
        <Item.Group divided>
          {this.props.machineFinderResults.map(loc_mac => {
            return (
              <MachineFinderResultItem  key={loc_mac.id} locMac={loc_mac} />
            );
          })}
        </Item.Group>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return {
    machineFinderResults: state.machineFinderResults,
    allLocations: state.allLocations
    ,
    loading: state.allLocationsLoading
  };
};

export default connect(
  mapStateToProps,
  null
)(MachineFinderResults);
