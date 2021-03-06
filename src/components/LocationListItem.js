import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//onClick={() => this.props.showLocation(this.props.location)}
// Rendered in LocationsContainer as 'locationsSearchResults'
class LocationListItem extends Component {
  render() {
    return (

      <Item className="item" location={this.props.location}>
        <Link to={`/location/${this.props.location.id}`}>
          <Item.Header>{this.props.location.name}</Item.Header>
          <Item.Description>{this.props.location.street}</Item.Description>
        </Link>
      </Item>

    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     showLocation: (locationObj) => {
//       dispatch(showLocation(locationObj));
//     }
//   }
// }

export default connect(
  null,
  null
)(LocationListItem);
