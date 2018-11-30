const All_LOCATIONS_URL = "http://localhost:3000/locations";
// const LOC_MAC_URL = "http://localhost:3000/location_machines";
// const MACHINES_URL = "http://localhost:3000/machines";
const POST_ISSUE_URL = "http://localhost:3000/machine_issues";
const SINGLE_LOCATION_URL = "http://localhost:3000/locations/"

function loadingLocations() {
  return { type: "LOADING_LOCATIONS" };
}

function loadingLocation() {
  return { type: "LOADING_LOCATION"}
}

// Sets Current Location in store
function fetchedLocation(locationObj) {
  return { type: "FETCHED_LOCATIONS", locationObj };
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
// fetch SINGLE location
function fetchingLocation(id){
  return dispatch => {
    dispatch(loadingLocation())
    fetch(SINGLE_LOCATION_URL + `${id}`)
    .then(res => res.json())
    .then(locationObj => {
      dispatch(showLocation(locationObj))
    })
  }

}
//Set store status for "Current Location"
function showLocation(location) {
  return { type: "SHOW_LOCATION", location };
}

// not currently used
function loadingLocationMachines() {
  return { type: "LOADING_LOCATION_MACHINES" };
}
// not currently used
function fetchedLocationMachines(locationID) {
  return { type: "FETCHED_LOCATION_MACHINES", locationID };
}

// not currently used
function fetchLocationMachines(locationID) {
  return { type: "FETCH_LOCATION_MACHINES", locationID };
}

// function fetchAllMachines() {
//   return dispatch => {
//     fetch(MACHINES_URL)
//       .then(res => res.json())
//       .then(machines => {
//         dispatch(fetchedMachines(machines));
//       });
//   };
// }

function addIssue(payload) {
  return { type: "ADD_ISSUE", payload };
}

function postIssue(payload) {
  return dispatch => {
    dispatch(addIssue(payload));
    console.log("posting up");
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
        dispatch(fetchedIssue(issue))

      });
  };
}

function fetchedIssue(issue) {
  return { type: "FETCHED_ISSUE", issue };
}
//POST requires location_machine_id: nil, description: nil

export {
  fetchedLocations,
  fetchingLocations,
  loadingLocations,
  fetchedLocation,
  fetchingLocation,
  loadingLocation,

  showLocation,
  fetchLocationMachines,
  // fetchAllMachines,
  // fetchedMachines,
  // findMachineName,
  addIssue,
  postIssue,
  fetchedIssue
};

// //First attempt, ignore
// function fetchingLocationMachines(locationID) {
//   return dispatch => {
//     dispatch(loadingLocationMachines());
//     fetch(LOC_MAC_URL)
//       .then(res => res.json())
//       .then(allMachines => {
//         //filter machines for this location
//         let locMacs = allMachines.filter(mac => mac.location_id === locationID);
//         // add bare bones location_machines to state
//         dispatch(fetchedLocationMachines(locMacs));
//         // debugger
//       });
//   };
// }
