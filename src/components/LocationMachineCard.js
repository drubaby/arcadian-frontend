import React from 'react'
import {Card} from 'semantic-ui-react'

const LocationMachineCard = (props) => (
    <Card>
      <Card.Content>
        <Card.Header>Machine Name</Card.Header>
        <Card.Meta>1999</Card.Meta>
        <Card.Description># of issues</Card.Description>
      </Card.Content>
      <Card.Content>
      Working Status
      </Card.Content>
      <Card.Content>
      Click to show Details
      </Card.Content>
    </Card>
  )

export default LocationMachineCard
