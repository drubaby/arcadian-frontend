import React from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

// Client-side routes defined in App.js
const SidebarNav = () => (
  <Sidebar
    as={Menu}
    // animation="push"
    icon="labeled"
    inverted
    vertical
    visible
    width="thin"
  >
    <Menu.Item as={NavLink} to="/about">
      <Icon name="home" />
      About
    </Menu.Item>
    <Menu.Item as={Link} to="/login">
      <Icon name="user" />
      My Favorites
    </Menu.Item>
    <Menu.Item as={NavLink} to="/locations">
      <Icon name="building" />
      Locations
    </Menu.Item>
  </Sidebar>
);

function mapStateToProps(state) {
  return {
    allLocations: state.allLocations
  };
}

export default connect(
  mapStateToProps,
  null
)(SidebarNav);
