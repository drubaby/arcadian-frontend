import React, { Component } from "react";

const BACKEND_URL = "http://localhost:3000";
///////////////////
//////////////
// Legacy component, unused due to redux!
///////////////
///////////////
export default class MachinesContainer extends Component {
  constructor() {
    super();
    this.state = {
      allMachines: []
    };
  }

  componentDidMount() {
    this.getAllMachines();
  }

  getAllMachines = () => {
    fetch(BACKEND_URL + "/machines")
      .then(resp => resp.json())
      .then(json => {
        this.setState({ allMachines: json });
      });
  };

  render() {
    return (
      <div>
        Here are the first ten machines:
        {this.state.allMachines.slice(0, 11).map(machine => {
          return (
            <li>
              {" "}
              {machine.name}
              <ul>{machine.manufacture_date}</ul>{" "}
            </li>
          );
        })}
      </div>
    );
  }
}
