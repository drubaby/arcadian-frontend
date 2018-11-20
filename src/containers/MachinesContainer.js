import React, { Component } from 'react';

const BACKEND_URL = "http://localhost:3000"

export default class MachinesContainer extends Component {

  constructor(){
    super()
    this.state={
      allMachines: []
    }
  }

  componentDisMount(){
    this.getAllMachines()
  }

  getAllMachines = () => {
    fetch(BACKEND_URL + '/machines')
    .then(resp => resp.json())
    .then(json => {
      this.setState({ allMachines: json})
    })
  }

  render(){
    return(
      <div>
        Here are all the machines.
      </div>
    )
  }

}
