import React from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
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
    <Menu.Item as={NavLink} to="/login">
      <Icon name="user" />
      Login
    </Menu.Item>
    <Menu.Item as={NavLink} to="/locations">
      <Icon name="building" />
      Locations
    </Menu.Item>
    <Menu.Item as={NavLink} to="/machine_finder">
      <Icon name="settings" />
      Pinball Finder
    </Menu.Item>
  </Sidebar>
);

// function mapStateToProps(state) {
//   return {
//     allLocations: state.allLocations
//   };
// }

export default connect(
  null,
  null
)(SidebarNav);
