import React from "react";
import { Button, Item } from "semantic-ui-react";
import { connect } from "react-redux";
import { resolveIssue } from "../redux/actions/locationActions";

// Rendered by MachineModal and LocationIssues
const MachineIssue = props => (

  <Item>
    <Item.Content verticalAlign="middle">
      <Item.Header><strong>{props.issueObj.description}</strong></Item.Header>
      <Button
        size="mini"
        compact
        positive
        floated="right"
        onClick={() => props.resolveIssue(props.issueObj)}
      >
        Resolve
      </Button>
      <Item.Description>
        {new Date(props.issueObj.created_at).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "numeric"
        })}
      </Item.Description>
    </Item.Content>
  </Item>

);

const mapDispatchToProps = dispatch => {
  return {
    resolveIssue: issueObj => {
      dispatch(resolveIssue(issueObj));
      // debugger
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MachineIssue);
