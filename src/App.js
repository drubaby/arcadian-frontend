import React, { Component } from 'react';
// import MachinesContainer from './containers/MachinesContainer'
import LocationsContainer from './containers/LocationsContainer'
import SidebarExample from './components/SidebarExample.js'
import Location from './containers/Location'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SidebarExample className="ui left sidebar inverted vertical menu visible scale down"/>
      </div>
    );
  }
}

export default App;
