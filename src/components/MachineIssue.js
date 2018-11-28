import React from 'react'
import { Button, Image, Item } from 'semantic-ui-react'

const MachineIssue = () => (
  <Item>
  <Item.Content verticalAlign='middle'>
    <Item.Header>Content A</Item.Header>
    <Item.Description>Issue description</Item.Description>
    <Item.Extra>
      <Button floated='right'>Resolve</Button>
    </Item.Extra>
  </Item.Content>
</Item>
)

export default MachineIssue
