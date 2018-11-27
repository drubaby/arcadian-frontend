import React from "react";
import { Card, Button, Modal, Image, Header } from "semantic-ui-react";

const LocationMachineCard = props => (
  <Card>
    <Card.Content>
      <Card.Header>{props.machine_info.name}</Card.Header>
      <Card.Meta>({props.machine_info.manufacture_date})</Card.Meta>
      <Card.Description>
        {props.machine_issues.length} known issues
      </Card.Description>

      {props.is_working ? "Working" : "Out of Order"}
    </Card.Content>
    <Card.Content extra>
      <Modal trigger={<Button basic>Manage Machine</Button>}>
        <Modal.Header>{props.machine_info.name}</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>List Issues Here</Header>
            <p>Issue 1</p>
            <p>Issue 2</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Card.Content>
  </Card>
);

export default LocationMachineCard;
