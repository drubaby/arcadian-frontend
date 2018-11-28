import React from "react";
import { Button, Item } from "semantic-ui-react";

const MachineIssue = props => (
  <Item>
    <Item.Content verticalAlign="middle">

      <Item.Header>{props.issueObj.description}</Item.Header>
      <Item.Description>{props.issueObj.created_at}</Item.Description>
      <Button floated="right">Resolve</Button>
    </Item.Content>
  
  </Item>
);

export default MachineIssue;
