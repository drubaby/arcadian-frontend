import React from "react";
import { Card, Button, Modal, Image, Header } from "semantic-ui-react";
import MachineIssue from './MachineIssue'
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
            <Header>{props.machine_issues.length === 0 ? "No known issues" : "Known Issues"}</Header>
            {props.machine_issues.length === 0 ? null : props.machine_issues.map(issue =>{
              return(<MachineIssue issueObj={issue}/>)
            })}


          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Card.Content>
  </Card>
);

export default LocationMachineCard;
