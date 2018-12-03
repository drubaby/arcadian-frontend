import React from "react";
import { Header, Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import Location from "../containers/Location";
import About from "./About";
import LocationsContainer from "../containers/LocationsContainer";
import Login from "./Login";

//should routes be defined here or in router? probably in App.js.
const SidebarExample = () => (
  <Sidebar
    as={Menu}
    animation="push"
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
)(SidebarExample);
