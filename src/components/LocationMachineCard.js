import React, { Component } from "react";
import { Card, Button, Header, Modal } from "semantic-ui-react";
import MachineIssue from "./MachineIssue";
import IssueForm from "./IssueForm";
import MachineModal from "./MachineModal";
import { connect } from "react-redux";
import { selectLocationMachine } from "../redux/actions/locationActions";

// rendered by LocationMachinesContainer
class LocationMachineCard extends Component {
  // if selected machine: consider mapping issue count to that

  render() {
    let { machine, machine_issues, id } = this.props.locMacObj;

    return (
      <Card>
        <Card.Content>
          <Card.Header>{machine.name}</Card.Header>
          <Card.Meta>({machine.manufacture_date})</Card.Meta>
          <Card.Description>
            {machine_issues.length} known issues
          </Card.Description>
          {this.props.is_working ? "Working" : "Out of Order"}
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
// <MachineModal machineObj={this.props.locMacObj}/>

// {
//   machine.id === this.props.selectedLocMac.id ? "I am selected" : "NOT ME";
// }

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
