import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import MachineModal from "./MachineModal";
import { connect } from "react-redux";
import { selectLocationMachine } from "../redux/actions/locationActions";

// rendered by LocationMachinesContainer
class MachineCard extends Component {
  // renders MachineModal
  render() {
    //below is currently undefined -- Why is this destructuring not working?
    let machine = this.props.locMacObj;
    let ipdbBase = "https://www.ipdb.org/machine.cgi?id=";
    // debugger
    let machineIPDB = machine.machine_type.ipdb_id;
    let newLink = ipdbBase + machineIPDB;
    // let link_text = "https://www.ipdb.org/machine.cgi?id=" + `${machine.ipdb_id}`
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{machine.name}</Card.Header>
          <Card.Meta>({machine.machine_type.manufacture_date})</Card.Meta>
          <Card.Description>
            <a href={newLink} target="_blank" rel="noopener noreferrer">
              IPDB Entry
            </a>
          </Card.Description>
          {this.props.is_working ? "Working" : "Out of Order"}
          <Card.Description>
            {machine.machine_issues.length} known issues
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <MachineModal machineObj={machine} />
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
)(MachineCard);
