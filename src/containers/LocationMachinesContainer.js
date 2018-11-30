import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import LocationMachineCard from "../components/LocationMachineCard";
import {
  fetchingLocationMachines,
  loadingLocationMachines
} from "../redux/actions/locationActions";

class LocationMachinesContainer extends Component {

  render() {
    return (
      <Container>
      <Card.Group itemsPerRow={3} stackable={true}>
        {this.props.locationMachines.map(loc_machine => {
          return (
            <LocationMachineCard
              key={loc_machine.id}
              locMacObj={loc_machine}
              is_working={loc_machine.is_working}
            />
          );
        })}
      </Card.Group>
      </Container>
    );
  }
}
//
const mapStateToProps = (state, propsFromParent) => {
  // set current location which fetches location machines
  return {
    // locMacContainerLoading: state.locMacContainerLoading,
    locationMachines: state.currentLocation.location_machines
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingLocationMachines: id => {
      dispatch(fetchingLocationMachines(id));
    }
  };
};

export default connect(
  mapStateToProps,
  null
)(LocationMachinesContainer);
