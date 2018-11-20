import React, { Component } from 'react';
import MachinesContainer from './containers/MachinesContainer'
import LocationsContainer from './containers/LocationsContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MachinesContainer />
        <LocationsContainer />
      </div>
    );
  }
}

export default App;
