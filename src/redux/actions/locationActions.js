const LOCATIONS_URL = "http://localhost:3000/locations";
const LOC_MAC_URL = "http://localhost:3000/location_machines";
const MACHINES_URL = "http://localhost:3000/machines";

function loadingLocations() {
  return { type: "LOADING_LOCATIONS" };
}

function fetchedLocations(locations) {
  return { type: "FETCHED_LOCATIONS", locations };
}

function fetchedMachines(machines) {
  return { type: "FETCHED_MACHINES", machines };
}

// Find a machine object in store by location_machine[machine_id]
function findMachineName(machine_id) {
  return { type: "FIND_MACHINE_NAME", machine_id }
}

//Make show location action
function showLocation(location) {
  return { type: "SHOW_LOCATION", location };
}

function fetchingLocations() {
  return dispatch => {
    dispatch(loadingLocations());
    fetch(LOCATIONS_URL)
      .then(res => res.json())
      .then(locations => {
        dispatch(fetchedLocations(locations));
      });
  };
}

function loadingLocationMachines() {
  return { type: "LOADING_LOCATION_MACHINES" };
}

function fetchedLocationMachines(machines) {
  return { type: "FETCHED_LOCATION_MACHINES", machines };
}

function fetchingLocationMachines(locationID) {
  return dispatch => {
    dispatch(loadingLocationMachines());

    fetch(LOC_MAC_URL)
      .then(res => res.json())
      .then(allMachines => {
        //filter machines for this location
        let locMacs = allMachines.filter(mac => mac.location_id === locationID);
        // add bare bones location_machines to state
        dispatch(fetchedLocationMachines(locMacs));
        // debugger
        //for each locMac look up details against AllMachines
        //
      });
  };
}

function fetchAllMachines() {
  return dispatch => {
    fetch(MACHINES_URL)
      .then(res => res.json())
      .then(machines => {
        // console.log(machines);
        dispatch(fetchedMachines(machines));
      });
  };
}

export {
  fetchedLocations,
  fetchingLocations,
  loadingLocations,
  showLocation,
  fetchingLocationMachines,
  fetchAllMachines,
  fetchedMachines,
  findMachineName
};
