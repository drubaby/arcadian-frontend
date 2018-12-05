const All_LOCATIONS_URL = "http://localhost:3000/locations";
const LOC_MAC_URL = "http://localhost:3000/location_machines";
const MACHINES_URL = "http://localhost:3000/machines";
const POST_ISSUE_URL = "http://localhost:3000/machine_issues";
const SINGLE_LOCATION_URL = "http://localhost:3000/locations/";
const CURRENT_LOCATION_MACHINES = "http://localhost:3000/machines_at_location/";

function fetchAllMachines(machines) {
  return dispatch => {
    fetch(MACHINES_URL)
      .then(res => res.json())
      .then(machines => {
        dispatch(fetchedMachines(machines));
      });
  };
}

function fetchedMachines(machines) {
  return { type: "FETCHED_MACHINES", machines };
}

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

///////// Location Search Bar /////////////
function changeLocSearchText(input) {
  return { type: "CHANGE_LOC_SEARCH_TEXT", input };
}

function refreshLocSearchOptions(locations) {
  return { type: "REFRESH_LOC_SEARCH_OPTIONS", locations };
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
    fetch(SINGLE_LOCATION_URL + `${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(locationObj => {
        dispatch(showLocation(locationObj));
      });
  };
}
// POST NEW LOCATION
function postLocation(payload) {
  return dispatch => {
    fetch(All_LOCATIONS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    });
  };
}

function showLocation(location) {
  return { type: "SHOW_LOCATION", location };
}

// Add new LocMac instance to a Location
function addLocationMachine(payload) {
  return dispatch => {
    // dispatch(makingNewLocationMachine())
    fetch(LOC_MAC_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(obj => {
        fetch("http://localhost:3000/update_location_by_machine", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(obj)
        })
          .then(res => res.json())
          .then(locationObj => {
            dispatch(showLocation(locationObj));
          });
      });
  };
}

// Remove Loc Mac instance from Location
function removeLocationMachine(machineObj) {
  return dispatch => {
    fetch(LOC_MAC_URL + `/${machineObj.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(obj => {
        fetch("http://localhost:3000/update_location_by_machine", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(obj)
        })
          .then(res => res.json())
          .then(locationObj => {
            dispatch(showLocation(locationObj));
          });
      });
  };
}
////////// END SINGLE LOCATION FUNCTIONS ///////////

////////// LOCATION MACHINES/////////
function fetchingLocationMachines(id) {
  return dispatch => {
    dispatch(loadingLocationMachines());
    // debugger
    fetch(CURRENT_LOCATION_MACHINES + `${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
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
  console.log("dispatching machine obj: ", machine);
  // sends updated MachineObj as patch request to DB
  return dispatch => {
    fetch(LOC_MAC_URL + `/${machine.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(machine)
    })
      // Response obj is updated Obj in DB, sends to custom route to find Loc
      .then(res => res.json())
      .then(obj => {
        fetch("http://localhost:3000/update_location_by_machine", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(obj)
        })
          .then(res => res.json())
          .then(locationObj => {
            dispatch(showLocation(locationObj));
          });
      });
  };
}
/////////// END LOCATION MACHINE ACTIONS////////////

/////////// MACHINE FINDER ACTIONS /////////////////
/////////// All Location Machines => Machine Finder
function fetchingAllLocationMachines() {
  return dispatch => {
    fetch(LOC_MAC_URL)
      .then(r => r.json())
      .then(machines => {
        dispatch(fetchedLocMacs(machines));
      });
  };
}

function fetchedLocMacs(machines) {
  return { type: "FETCHED_LOC_MACS", machines };
}

function refreshMachineFinderOptions(machines) {
  // debugger
  return { type: "REFRESH_MACHINE_FINDER_OPTIONS", machines };
}

function changeMachineFinderText(input) {
  return { type: "CHANGE_MACHINE_FINDER_TEXT", input };
}

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
      method: "DELETE"
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

function changeSearchText(input) {
  return { type: "CHANGE_MAC_SEARCH_TEXT", input };
}

function updateSearchResults(results) {
  return { type: "UPDATE_SEARCH_RESULTS", results };
}

function refreshSearchOptions(machines) {
  return { type: "REFRESH_SEARCH_OPTIONS", machines };
}
////////// end Machine search
////////// FAVORITOS

function addToFavorites(location) {
  return { type: "ADD_FAVORITE", location}
}



export {
  //ALL LOCATIONS
  fetchedLocations,
  fetchingLocations,
  loadingLocations,
  //LOCATION SEARCH
  changeLocSearchText,
  refreshLocSearchOptions,
  //NEW LOCATION
  postLocation,
  //SHOW LOCATION
  fetchedLocation,
  fetchingLocation,
  loadingLocation,
  showLocation,
  //LOCATION MACHINES
  fetchingLocationMachines,
  loadingLocationMachines,
  selectLocationMachine,
  toggleMachineWorking,
  addLocationMachine,
  removeLocationMachine,
  // MACHINE FINDER
  fetchingAllLocationMachines,
  refreshMachineFinderOptions,
  changeMachineFinderText,
  // MACHINE ISSUES
  addIssue,
  postIssue,
  resolveIssue,
  //ALL MACHINES
  fetchAllMachines,
  //SEARCH FUNCTION
  changeSearchText,
  updateSearchResults,
  refreshSearchOptions,
  //FAVORITE FUNCTIONS
  addToFavorites
};


//
// fetch("http://localhost:3000/locations/4", {
//   method: "GET",
//   headers: {
//     Authorization: window.sessionStorage.getItem("jwt"),
//     "Content-Type": "application/json",
//     Accept: "application/json"
//   }
// })
//   .then(res => res.json())
//   .then(json => {
//     console.log(json);
//   });
