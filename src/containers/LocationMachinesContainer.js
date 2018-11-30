import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import LocationMachineCard from "../components/LocationMachineCard";
import {
  fetchingLocationMachines,
  loadingLocationMachines
} from "../redux/actions/locationActions";

class LocationMachinesContainer extends Component {
  componentDidMount() {
    // this container should fetch location machine data on mount.
    console.log("LocationMachinesContainer mounts, content loading?", this.props.locMacContainerLoading)
    // Location machine card will fetch issues?
    this.props.fetchingLocationMachines(parseInt(this.props.location.id))
  }

  render() {
    if (this.props.locMacContainerLoading){
      return <div>Loading :) :) :) :) </div>
    }

    return (
      <Card.Group itemsPerRow={3} stackable={true}>
          {this.props.locationMachines.map(loc_machine => {
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
const mapStateToProps = (state, propsFromParent) => {
  // set current location which fetches location machines
return {
  locMacContainerLoading: state.locMacContainerLoading,
  locationMachines: state.currentLocMachines
}

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
  mapDispatchToProps
)(LocationMachinesContainer);
