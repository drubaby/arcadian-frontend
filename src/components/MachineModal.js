import React, { Component } from "react";
import { Card, Button, Modal, Header } from "semantic-ui-react";
import MachineIssue from "./MachineIssue";
import IssueForm from "./IssueForm";
import { connect } from "react-redux";
import { selectLocationMachine } from "../redux/actions/locationActions";

class MachineModal extends Component {
  render() {
    console.log(this.props)
    if (this.props) {
      return (
        <Modal
          trigger={
            <Button
              onClick={() => {
                this.props.selectLocationMachine(this.props.machineObj);
              }}
            >
              Manage Machine
            </Button>
          }
        >
          <Modal.Header>
            {this.props.machineObj.name}
            <Button floated="right">Mark Broken</Button>
          </Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>
                {this.props.machineObj.machine_issues.length === 0
                  ? "No known issues"
                  : "Known Issues"}
              </Header>
              {this.props.machineObj.machine_issues.length === 0
                ? null
                : this.props.machineObj.machine_issues.map(issue => {
                    return <MachineIssue key={issue.id} issueObj={issue} />;
                  })}
            </Modal.Description>
            <Modal.Description>
              <IssueForm locMacId={this.props.machineObj.id} />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      );
    } else {
      return null;
    }
  }
}
const mapStateToProps = (state, propsFromParent) => {
  // machineObj is always selected location machine
  // updates to this state will re-render
  return {
    machineObj: state.selectedLocMAc,
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
  null,
  mapDispatchToProps
)(MachineModal);
