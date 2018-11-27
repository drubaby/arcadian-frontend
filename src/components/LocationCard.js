import React from "react";

import { Card, Icon, Image} from 'semantic-ui-react'
import location_pic from '../img/location.svg'


const LocationCard = (props) => (
  <Card>
  <Image src={location_pic} />
  <Card.Content>
  <Card.Header>{props.location.name}</Card.Header>
  <Card.Meta>
  <span className='date'>Operator:  </span>
  </Card.Meta>
  <Card.Description>{props.location.street}</Card.Description>
  <Card.Description>{props.location.city}, {props.location.state} {props.location.zip}</Card.Description>
  </Card.Content>
  <Card.Content extra>

  <Icon name='gamepad' />
  {props.machines.length} machines

  </Card.Content>
  </Card>
)

export default LocationCard
