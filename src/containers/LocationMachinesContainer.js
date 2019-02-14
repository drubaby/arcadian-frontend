import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import MachineCard from "../components/MachineCard";

// rendered by Location
class LocationMachinesContainer extends Component {

  render() {
    return (
      <Container>
        <Card.Group itemsPerRow={3} stackable={true}>
          {this.props.locationMachines.map(loc_machine => {
            return (
              <MachineCard
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

  ////// updated_at does not exist in current serialization //
  // let orderedMachines = state.currentLocation.machines.sort((a, b) =>
  //   a.updated_at < b.updated_at ? 1 : b.updated_at < a.updated_at ? -1 : 0
  // );
  let orderedMachines = state.currentLocation.machines
  return { locationMachines: orderedMachines };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchingLocationMachines: id => {
//       dispatch(fetchingLocationMachines(id));
//     }
//   };
// };

export default connect(
  mapStateToProps,
  null
)(LocationMachinesContainer);
