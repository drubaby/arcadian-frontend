import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import LocationMachineCard from "../components/LocationMachineCard";

class LocationMachinesContainer extends Component {
  componentDidMount() {
    console.log("Mounted location machines container.");
  }

  render() {
    return (
      <Card.Group itemsPerRow={3} stackable={true}>
          {this.props.machines.map(loc_machine => {
            return (
              <LocationMachineCard
                key={loc_machine.id}
                locMacId={loc_machine.id}
                machine_info={loc_machine.machine}
                machine_issues={loc_machine.machine_issues}
                is_working={loc_machine.is_working}
              />
            );
          })}

      </Card.Group>
    );
  }
}
//
// const mapStateToProps = (state, propsFromParent) => {
//   return {}
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     findMachineName: machine => {
//       dispatch(findMachineName(machine));
//     }
//   };
// };

export default connect(
  null,
  null
)(LocationMachinesContainer);
