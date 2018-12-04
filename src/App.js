import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SidebarNav from "./components/SidebarExample.js";
import { connect } from "react-redux";
import "./App.css";
import About from "./components/About";
import Location from "./containers/Location";
import LocationsContainer from "./containers/LocationsContainer";
import Login from "./components/Login";
import MachineFinder from './containers/MachineFinder'
import NewLocationForm from './components/NewLocationForm'
import { Grid } from "semantic-ui-react";
import {
  fetchingLocations,
  showLocation,
  fetchAllMachines
} from "./redux/actions/locationActions";

class App extends Component {
  // consider putting *grid* container in return to lay out sidebar with content

  componentDidMount() {
    console.log("App mounted, now fetching all locations for store...");
    this.props.fetchingLocations();
    console.log("App now fetching all machines...")
    this.props.fetchAllMachines();
  }

  render() {
    return (
      <Router>
        <Grid columns={2}>
          <Grid.Column width={3}>
            <SidebarNav className="Sidebar" id="sidebarthing" />
          </Grid.Column>
          <Grid.Column width={12}>
            <Header align="center">Arcadian</Header>

            <Route exact path="/about" component={() => <About />} />
            <Route path="/login" component={Login} />
            <Route
              exact
              path="/location/:id"
              render={data => <Location locationId={data.match.params.id} />}
            />
            <Route
              exact
              path="/locations"
              component={() => <LocationsContainer />}
            />
            <Route
              exact
              path="/machine_finder"
              component={() => <MachineFinder />}
            />
            <Route
            exact
            path="/new_location"
            component={()=> <NewLocationForm />}
            />
          </Grid.Column>
        </Grid>
      </Router>
    );
  }
}

//define router on this level
//display sidebar with routes underneath
// ex <route path = "/location/:id" render = <Component>

// does this component need to connect to store for props?

const mapDispatchToProps = dispatch => {
  return {
    fetchingLocations: () => {
      dispatch(fetchingLocations());
    },
    showLocation: () => {
      dispatch(showLocation());
    },
    fetchAllMachines: () => {
      dispatch(fetchAllMachines());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
