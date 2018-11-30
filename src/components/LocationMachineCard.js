import React, { Component } from "react";
import { Card, Button, Modal, Header } from "semantic-ui-react";
import MachineIssue from "./MachineIssue";
import IssueForm from "./IssueForm";
import { connect } from "react-redux";

// rendered by LocationMachinesContainer
class LocationMachineCard extends Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.machine_info.name}</Card.Header>
          <Card.Meta>({this.props.machine_info.manufacture_date})</Card.Meta>
          <Card.Description>
            {this.props.machine_issues.length} known issues
          </Card.Description>
          {this.props.is_working ? "Working" : "Out of Order"}
        </Card.Content>
        <Card.Content extra>
          <Modal trigger={<Button basic>Manage Machine</Button>}>
            <Modal.Header>
              {this.props.machine_info.name}
              <Button floated="right">Mark Broken</Button>
            </Modal.Header>
            <Modal.Content image>
              <Modal.Description>
                <Header>
                  {this.props.machine_issues.length === 0
                    ? "No known issues"
                    : "Known Issues"}
                </Header>
                {this.props.machine_issues.length === 0
                  ? null
                  : this.props.machine_issues.map(issue => {
                      return <MachineIssue key={issue.id} issueObj={issue} />;
                    })}

              </Modal.Description>
              <Modal.Description>
                <IssueForm locMacId={this.props.locMacId} />
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    newIssue: state.issue
  }
  debugger

};

export default connect(
  mapStateToProps,
  null
)(LocationMachineCard);
