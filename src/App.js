import React, { Component } from 'react';
// import MachinesContainer from './containers/MachinesContainer'
import LocationsContainer from './containers/LocationsContainer'
import SidebarExample from './components/SidebarExample.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SidebarExample />
        <LocationsContainer />
      </div>
    );
  }
}

export default App;
