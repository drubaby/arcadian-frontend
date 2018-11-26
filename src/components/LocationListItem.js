import React, { Component } from "react";
import { Item } from "semantic-ui-react";


export default class LocationListItem extends Component {

  render() {
    return (
      <Item className='item'>
        <Item.Header>{this.props.location.name}</Item.Header>
        <Item.Description>{this.props.location.street}</Item.Description>
      </Item>
    );
  }
}
