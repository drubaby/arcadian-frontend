import React, { Component } from "react";
import {
  Button,
  Modal,
  Header,
  Confirm,
  Item,
  Grid,
  Segment
} from "semantic-ui-react";
import MachineIssue from "./MachineIssue";
import IssueForm from "./IssueForm";
import { connect } from "react-redux";
import {
  selectLocationMachine,
  toggleMachineWorking,
  removeLocationMachine
} from "../redux/actions/locationActions";

// rendered by LocMacCard when user clicks "Manage Machine"
class MachineModal extends Component {
  state = { confirmOpen: false };
  openConfirm = () => this.setState({ open: true });
  closeConfirm = () => this.setState({ open: false });

  render() {
    // console.log(this.props); // logs 4 different machineObjs
    if (this.props) {

      // let { machine } = this.props.machineObj;
      selectLocationMachine(this.props.id);

      return (
        <Modal
          trigger={
            <Button
              fluid
              compact
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
            <Button
              size="small"
              negative
              floated="right"
              onClick={() => {
                this.openConfirm();
              }}
            >
              Remove Machine
            </Button>
            <Confirm
              header="Remove Machine from Arcade"
              content="This cannot be undone, are you quite certain?"
              open={this.state.open}
              cancelButton="Never mind"
              onCancel={this.closeConfirm}
              confirmButton="Make it so"
              onConfirm={() => {
                this.closeConfirm();
                this.props.removeLocationMachine(this.props.machineObj);
              }}
            />
            <Button
              size="small"
              floated="right"
              onClick={() => {
                this.props.toggleMachineWorking(this.props.machineObj);
              }}
            >
              {this.props.machineObj.is_working
                ? "Mark Out Of Order"
                : "Mark Working"}
            </Button>
          </Modal.Header>

          <Modal.Content>
            <Grid columns={2}>
              <Grid.Column>
                <Modal.Description>
                  <Header>
                    {this.props.machineObj.machine_issues.length === 0
                      ? "No known issues"
                      : "Known Issues"}
                  </Header>
                  <Item.Group divided relaxed>
                    {this.props.machineObj.machine_issues.length === 0
                      ? null
                      : this.props.machineObj.machine_issues.map(issue => {
                          return (
                            <Segment key={issue.id}>
                              <MachineIssue issueObj={issue} />
                            </Segment>
                          );
                        })}
                  </Item.Group>
                </Modal.Description>
              </Grid.Column>
              <Grid.Column>
                <Modal.Description>
                  <IssueForm MacId={this.props.machineObj.id} />
                </Modal.Description>
              </Grid.Column>
            </Grid>
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
      machineObj.is_working = !machineObj.is_working;
      dispatch(toggleMachineWorking(machineObj));
    },
    removeLocationMachine: machineObj => {
      dispatch(removeLocationMachine(machineObj));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MachineModal);
