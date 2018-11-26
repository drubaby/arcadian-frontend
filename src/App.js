import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LocationsContainer from "./containers/LocationsContainer";
import SidebarExample from "./components/SidebarExample.js";
import Location from "./containers/Location";
import {connect} from 'react-redux'
import "./App.css";
import About from "./components/About"
import {
  fetchingLocations,
  loadingLocations,
  testingComponent,
  showLocation
} from "./redux/actions/locationActions";

class App extends Component {

  // consider putting *grid* container in return to lay out sidebar with content

  componentDidMount() {
    console.log("App mounted");
    this.props.fetchingLocations();
  }

  render() {
    return (
      <Router>
        <div className="App ">

          <SidebarExample/>
          <Route path="/" exact render={About} />


        </div>
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
      dispatch(showLocation())
    }
  };
};


export default connect(null, mapDispatchToProps)(App);
