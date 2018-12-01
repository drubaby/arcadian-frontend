import React, { Component } from "react";
import { Button, Modal, Header } from "semantic-ui-react";
import MachineIssue from "./MachineIssue";
import IssueForm from "./IssueForm";
import { connect } from "react-redux";
import { selectLocationMachine, toggleMachineWorking } from "../redux/actions/locationActions";


class MachineModal extends Component {

  // componentDidMount(){
  //   selectLocationMachine(this.props.machineObj.id)
  // }

  render() {
    // console.log(this.props); // logs 4 different machineObjs
    if (this.props) {
      let { machine } = this.props.machineObj;
      selectLocationMachine(this.props.id)

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
            {machine.name}
            <Button
              floated="right"
              onClick={() => {
                this.props.toggleMachineWorking(this.props.machineObj);
              }}
            >
              {this.props.machineObj.is_working
                ? "Mark Broken"
                : "Mark Working"}
            </Button>
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

const mapDispatchToProps = dispatch => {
  return {
    selectLocationMachine: id => {
      dispatch(selectLocationMachine(id));
    },
    toggleMachineWorking: machineObj => {
      // debugger
      machineObj.is_working = !machineObj.is_working
      console.log(machineObj.machine.name, " working status now: ", machineObj.is_working)
      dispatch(toggleMachineWorking(machineObj));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MachineModal);
