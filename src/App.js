import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import LocationsContainer from "./containers/LocationsContainer";
import SidebarExample from "./components/SidebarExample.js";
// import Location from "./containers/Location";
import { connect } from "react-redux";
import "./App.css";
import About from "./components/About";
import { Container } from "semantic-ui-react";
import {
  fetchingLocations,
  // loadingLocations,
  showLocation,
  fetchAllMachines
} from "./redux/actions/locationActions";

class App extends Component {
  // consider putting *grid* container in return to lay out sidebar with content

  componentDidMount() {
    console.log("App mounted, now fetching all locations for store...");
    this.props.fetchingLocations();
    this.props.fetchAllMachines()

    //should fetchingLocation() move to sidebar?
  }

  render() {
    return (
      <Router>
        <Container className="App">
          <SidebarExample />

          <Route path="/" exact render={About} />
        </Container>
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
    }
    ,
    fetchAllMachines: () => {
      dispatch(fetchAllMachines());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
