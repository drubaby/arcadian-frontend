const All_LOCATIONS_URL = "http://localhost:3000/locations";
const LOC_MAC_URL = "http://localhost:3000/location_machines";
// const MACHINES_URL = "http://localhost:3000/machines";
const POST_ISSUE_URL = "http://localhost:3000/machine_issues";
const SINGLE_LOCATION_URL = "http://localhost:3000/locations/";
const CURRENT_LOCATION_MACHINES = "http://localhost:3000/machines_at_location/";

/////////// ALL LOCATIONS
function loadingLocations() {
  return { type: "LOADING_LOCATIONS" };
}

// Sets allLocations in store
function fetchedLocations(locations) {
  return { type: "FETCHED_LOCATIONS", locations };
}

// fetch ALL locations
function fetchingLocations() {
  return dispatch => {
    dispatch(loadingLocations());
    fetch(All_LOCATIONS_URL)
      .then(res => res.json())
      .then(locations => {
        dispatch(fetchedLocations(locations));
      });
  };
}
////////////// SINGLE LOCATION //////////
function loadingLocation() {
  return { type: "LOADING_LOCATION" };
}

// Sets Current Location in store
function fetchedLocation(locationObj) {
  return { type: "FETCHED_LOCATIONS", locationObj };
}
// fetch SINGLE location
function fetchingLocation(id) {
  return dispatch => {
    dispatch(loadingLocation());
    fetch(SINGLE_LOCATION_URL + `${id}`)
      .then(res => res.json())
      .then(locationObj => {
        dispatch(showLocation(locationObj));
      });
  };
}

function showLocation(location) {
  return { type: "SHOW_LOCATION", location };
}

////////// LOCATION MACHINES
function fetchingLocationMachines(id) {
  return dispatch => {
    dispatch(loadingLocationMachines());
    // debugger
    fetch(CURRENT_LOCATION_MACHINES + `${id}`)
      .then(res => res.json())
      .then(machineArray => {
        dispatch(showLocMacs(machineArray));
      });
  };
}

function loadingLocationMachines() {
  return { type: "LOADING_LOCATION_MAC_CONTAINER" };
}

function showLocMacs(machines) {
  return { type: "SHOW_LOC_MACS", machines };
}

function selectLocationMachine(machine) {
  return { type: "SELECT_LOC_MAC", machine };
}

function toggleMachineWorking(machine) {
  // return { type: "TOGGLE_WORKING", machine}
  // debugger;
  return dispatch => {
    fetch(LOC_MAC_URL + `/${machine.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(machine)
    })
      .then(res => res.json())
      .then(obj => console.log(obj));
  };
}
// patch to DB
//after response, call SHOW LOCATION to rerender

/////////// Machine Issues
function addIssue(payload) {
  return { type: "ADD_ISSUE", payload };
}

function postIssue(payload) {
  return dispatch => {
    dispatch(addIssue(payload));
    console.log("posting issue");
    // debugger
    fetch(POST_ISSUE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(issue => {
        fetch("http://localhost:3000/update_location_by_issue", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(issue)
        })
          .then(res => res.json())
          .then(locationObj => {
            dispatch(showLocation(locationObj));
          });
      });
  };
}

function resolveIssue(payload) {
  return dispatch => {
    dispatch(markResolved(payload));
    fetch(POST_ISSUE_URL + `/${payload.id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(issueObj => {
        console.log(issueObj);
        fetch("http://localhost:3000/update_location_by_issue", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(issueObj)
        })
          .then(res => res.json())
          .then(locationObj => {
            // debugger
            dispatch(showLocation(locationObj));
          });
      });
  };
}

function markResolved(issueObj) {
  return { type: "MARK_RESOLVED", issueObj };
}

// function updateLocationByIssue(issue) {
//   return { type: "UPDATE_LOCATION_BY_ISSUE", issue };
// }

// function fetchedIssue(issue) {
//   return { type: "FETCHED_ISSUE", issue };
// }
//POST requires location_machine_id: nil, description: nil

export {
  //ALL LOCATIONS
  fetchedLocations,
  fetchingLocations,
  loadingLocations,
  //SINGLE LOCATION
  fetchedLocation,
  fetchingLocation,
  loadingLocation,
  showLocation,
  //LOCATION MACHINES
  fetchingLocationMachines,
  loadingLocationMachines,
  selectLocationMachine,
  toggleMachineWorking,
  addIssue,
  postIssue,
  resolveIssue
};
