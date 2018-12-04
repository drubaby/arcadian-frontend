import React, { Component } from "react";
import { Item, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MachineFinderResultItem extends Component {
  render() {
    // console.log("machine finder result item: ", this.props.locMac);
    return (
      <Item>
      <Link to={`/location/${this.props.locMac.location_id}`}>
        <Item.Header>
          <Icon fitted name="gamepad" />
          <strong>{this.props.locMac.machine.name}</strong> @ <strong>{this.props.locMac.location_name}</strong>
        </Item.Header>
        <Item.Description>{this.props.locMac.is_working ? "Working" : "Out of Order"} | {this.props.locMac.machine_issues.length} Issues </Item.Description>
        </Link>
      </Item>
    );
  }
}
export default connect(
  null,
  null
)(MachineFinderResultItem);
