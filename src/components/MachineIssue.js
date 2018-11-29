import React from "react";
import { Button, Item } from "semantic-ui-react";

function resolveIssue(){
  console.log("issue resolved")
  debugger
}

const MachineIssue = props => (
  <Item>
    <Item.Content verticalAlign="middle">

      <Item.Header>{props.issueObj.description}</Item.Header>
      <Item.Description>{props.issueObj.created_at}</Item.Description>
      <Button floated="right" onClick={(props) => resolveIssue(props)}>Resolve</Button>
    </Item.Content>

  </Item>
);


export default MachineIssue;
