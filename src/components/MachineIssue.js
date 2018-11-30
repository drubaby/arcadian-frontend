import React from "react";
import { Button, Item } from "semantic-ui-react";
import { connect } from "react-redux";
import { resolveIssue } from "../redux/actions/locationActions";

// Rendered by MachineModal
const MachineIssue = props => (

  <Item>
    <Item.Content verticalAlign="middle">
      <Item.Header>{props.issueObj.description}</Item.Header>
      <Item.Description>{props.issueObj.created_at}</Item.Description>
      <Button floated="right" onClick={() => props.resolveIssue(props.issueObj)}>
        Resolve
      </Button>
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
