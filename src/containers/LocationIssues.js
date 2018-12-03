import React, { Component } from "react";
import { Button, List, Header, Segment } from "semantic-ui-react";
import MachineIssue from "../components/MachineIssue";
import { connect } from "react-redux";

class LocationIssues extends Component {
  render() {
    if (this.props.locationLoading) {
      return <div>Loading Issues...</div>;
    }
    return (
      <Segment>
        <List divided>
          <Header>Pending repairs</Header>
          {this.props.locationIssues.map(issue => {
            return (
              <List.Item key={issue.id}>
                <Header>{issue.machine_name}</Header>
                <MachineIssue issueObj={issue} />
              </List.Item>
            );
          })}
        </List>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return {
    locationIssues: state.currentLocation.machine_issues,
    locationLoading: state.locationLoading
  };
};

export default connect(
  mapStateToProps,
  null
)(LocationIssues);
