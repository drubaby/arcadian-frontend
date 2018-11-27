import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import LocationMachineCard from '../components/LocationMachineCard'

class LocationMachinesContainer extends Component {
  componentDidMount() {
    console.log("Mounted location machines container.");
  }

  render() {
    return (
      <Card.Group>
        Here is a list of all Location Machines for this location!
        <ul>
          {this.props.machines.map(machine => {
            return (
              <LocationMachineCard key={machine.id} machine={machine} />

            );
          })}
        </ul>
      </Card.Group>
    );
  }
}

// TODO: Find machine details from state.allMachines
// TODO: Fetch location_machine_issues from backend
// ideal format =>
// LocationMachines: {
//   0: {
//     id: x,
//     location_id: y,
//     machine_id: z,
//     details: [{name: "paragon"}, {release_date: "1979"} ]
//     issues: [{id: 1}, {description: 'broken flipper'}, {author_id: 23}]
//     }
//   }
//
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
