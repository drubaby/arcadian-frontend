import React from "react";
import { Header, Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Location from "../containers/Location";
import LocationsContainer from "../containers/LocationsContainer";


//should routes be defined here or in router? probably in App.js.
const SidebarExample = () => (
  <Router>
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="push"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
      >
        <Menu.Item as={Link} to="/location/:id">
          <Icon name="gamepad" />
          Games [Test Location Link]
        </Menu.Item>
        <Menu.Item as={Link} to="/locations">
          <Icon name="building" />
          Locations
        </Menu.Item>

      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <Header as="h3">Arcadian :]</Header>

          <Switch>
            <Route
              exact
              path="/location/:id"
              render={data => <Location locationId={data.match.params.id} />
              }
            />
            <Route
              exact
              path="/locations"
              component={() => <LocationsContainer />}
            />
          </Switch>
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </Router>
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
