import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import MachineModal from "./MachineModal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectLocationMachine } from "../redux/actions/locationActions";

// rendered by LocationMachinesContainer
class LocationMachineCard extends Component {
// renders MachineModal
  render() {
    let { machine, machine_issues} = this.props.locMacObj;
    let link_text = "https://www.ipdb.org/machine.cgi?id=" + `${machine.ipdb_id}`
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{machine.name}</Card.Header>
          <Card.Meta>({machine.manufacture_date})</Card.Meta>
          <Card.Description><a href={link_text} target='_blank'>IPDB Entry</a></Card.Description>
          {this.props.is_working ? "Working" : "Out of Order"}
          <Card.Description>
            {machine_issues.length} known issues
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <MachineModal
              machineObj={this.props.locMacObj}
            />
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    newIssue: state.issue,
    selectedLocMac: state.selectedLocMac
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectLocationMachine: id => {
      dispatch(selectLocationMachine(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationMachineCard);
